var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { from } from 'rxjs';
let TranslationLoader = class TranslationLoader {
    constructor(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    getTranslation(locale) {
        // Split out the language code from the locale
        const languageCode = (locale.split('-')[0] || '').toLowerCase();
        return from(this.getLanguageAndLocale(languageCode, locale));
    }
    translationFetcher(locale) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`i18n/${locale}.json`).toPromise();
        });
    }
    getLanguageAndLocale(language, locale) {
        return __awaiter(this, void 0, void 0, function* () {
            const languageKey = makeStateKey('transfer-translate-' + language);
            const fallbackKey = makeStateKey('transfer-translate-' + locale);
            let fallbackTranslations = {};
            let translations = {};
            try {
                fallbackTranslations = this.transferState.get(fallbackKey, null);
                if (!fallbackTranslations) {
                    fallbackTranslations = yield this.translationFetcher(language);
                }
            }
            catch (e) {
                fallbackTranslations = {};
            }
            try {
                translations = this.transferState.get(languageKey, null);
                if (!translations) {
                    translations = yield this.translationFetcher(locale);
                }
            }
            catch (e) {
                translations = {};
            }
            return Object.assign(Object.assign({}, fallbackTranslations), translations);
        });
    }
};
TranslationLoader = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, TransferState])
], TranslationLoader);
export { TranslationLoader };
