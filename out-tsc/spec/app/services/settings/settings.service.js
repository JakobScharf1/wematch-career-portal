var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SettingsService_1;
import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TransferState, makeStateKey, } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as fs from 'fs';
import { join } from 'path';
const APP_CONFIG_URL = './app.json';
const LANGUAGE_KEY = makeStateKey('language');
let SettingsService = SettingsService_1 = class SettingsService {
    constructor(http, platformId, request, transferState, translate) {
        this.http = http;
        this.request = request;
        this.transferState = transferState;
        this.translate = translate;
        SettingsService_1.isServer = isPlatformServer(platformId);
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            const configKey = makeStateKey('app-config');
            if (SettingsService_1.isServer) {
                const assetsFolder = join(process.cwd(), 'dist', 'career-portal', 'browser');
                data = JSON.parse(fs.readFileSync(join(assetsFolder, 'app.json'), 'utf8'));
                this.transferState.set(configKey, data);
            }
            else {
                data = this.transferState.get(configKey, null);
                if (!data) {
                    data = yield this.http.get(APP_CONFIG_URL).toPromise();
                }
                this.http.get(APP_CONFIG_URL).toPromise(); // Always retrieve in console for support folks
            }
            yield this.setConfig(data);
            SettingsService_1.loaded = true;
        });
    }
    setConfig(data) {
        return __awaiter(this, void 0, void 0, function* () {
            SettingsService_1.settings = data;
            const objectConfigOptions = [
                'service',
                'additionalJobCriteria',
                'integrations',
                'eeoc',
                'privacyConsent',
            ];
            objectConfigOptions.forEach((option) => {
                if (!SettingsService_1.settings[option]) {
                    SettingsService_1.settings[option] = {};
                }
            });
            if (!SettingsService_1.settings.service.fields ||
                SettingsService_1.settings.service.fields.length === 0) {
                SettingsService_1.settings.service.fields = [
                    'id',
                    'title',
                    'publishedCategory(id,name)',
                    'address(city,state,countryName)',
                    'employmentType',
                    'dateLastPublished',
                    'publicDescription',
                    'isOpen',
                    'isPublic',
                    'isDeleted',
                    'publishedZip',
                    'salary',
                    'salaryUnit',
                ];
            }
            if (!SettingsService_1.settings.service.jobInfoChips) {
                SettingsService_1.settings.service.jobInfoChips = [
                    'employmentType',
                    {
                        type: 'mediumDate',
                        field: 'dateLastPublished',
                    },
                ];
            }
            if (!SettingsService_1.settings.service.keywordSearchFields ||
                SettingsService_1.settings.service.keywordSearchFields.length === 0) {
                SettingsService_1.settings.service.keywordSearchFields = [
                    'publicDescription',
                    'title',
                ];
            }
            const validTokenRegex = /[^A-Za-z0-9]/;
            if (!SettingsService_1.settings.service.corpToken ||
                validTokenRegex.test(SettingsService_1.settings.service.corpToken)) {
                throw new Error('Invalid Corp Token');
            }
            if (!SettingsService_1.settings.service.swimlane) {
                throw new Error('Invalid Swimlane');
            }
            yield this.translate.use(this.getPreferredLanguage()).toPromise();
            if (!SettingsService_1.isServer) {
                SettingsService_1.isIos =
                    !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
            }
        });
    }
    getPreferredLanguage() {
        let supportedLanguages = SettingsService_1.settings.supportedLocales || [];
        let language = SettingsService_1.settings.defaultLocale;
        if (SettingsService_1.isServer) {
            language = this.request['acceptsLanguages'](supportedLanguages);
            if (!language) {
                language = SettingsService_1.settings.defaultLocale;
            }
            this.transferState.set(LANGUAGE_KEY, language);
        }
        else {
            language = localStorage.getItem('preferredLanguage') || this.transferState.get(LANGUAGE_KEY, undefined);
            if (!language) {
                language = SettingsService_1.settings.supportedLocales.filter((locale) => {
                    return navigator.language === locale;
                })[0];
            }
            if (!language) {
                language = SettingsService_1.settings.defaultLocale;
            }
        }
        return language;
    }
};
SettingsService.loaded = false;
SettingsService = SettingsService_1 = __decorate([
    Injectable(),
    __param(1, Inject(PLATFORM_ID)),
    __param(2, Optional()), __param(2, Inject(REQUEST)),
    __metadata("design:paramtypes", [HttpClient, String, Object, TransferState,
        TranslateService])
], SettingsService);
export { SettingsService };
