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
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Inject, Injectable, Optional } from '@angular/core';
import * as ms from 'ms';
import { SettingsService } from '../settings/settings.service';
let ServerResponseService = class ServerResponseService {
    constructor(response) {
        this.response = response;
    }
    getHeader(key) {
        return this.response.getHeader(key);
    }
    setHeader(key, value) {
        if (this.response) {
            this.response.header(key, value);
        }
        return this;
    }
    appendHeader(key, value, delimiter = ',') {
        if (this.response) {
            const current = this.getHeader(key);
            if (!current) {
                return this.setHeader(key, value);
            }
            const newValue = [...current.split(delimiter), value]
                .filter((el, i, a) => i === a.indexOf(el))
                .join(delimiter);
            this.response.header(key, newValue);
        }
        return this;
    }
    setHeaders(dictionary) {
        if (this.response) {
            Object.keys(dictionary).forEach((key) => this.setHeader(key, dictionary[key]));
        }
        return this;
    }
    setStatus(code, message) {
        if (this.response) {
            this.response.statusCode = code;
            if (message) {
                this.response.statusMessage = message;
            }
        }
        return this;
    }
    setNotFound(message = 'not found') {
        if (SettingsService.isServer) {
            this.response.status(404);
            this.response.statusMessage = message;
        }
        return this;
    }
    setUnauthorized(message = 'Unauthorized') {
        if (this.response) {
            this.response.statusCode = 401;
            this.response.statusMessage = message;
        }
        return this;
    }
    setCachePrivate() {
        if (this.response) {
            this.setCache('private');
        }
        return this;
    }
    setCacheNone() {
        if (this.response) {
            this.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            this.setHeader('Pragma', 'no-cache');
        }
        return this;
    }
    setCache(directive, maxAge, smaxAge) {
        if (this.response) {
            // tslint:disable-next-line:max-line-length
            if (smaxAge) {
                this.setHeader('Cache-Control', `${directive}, max-age=${maxAge ? ms(maxAge) / 1000 : 0}, s-maxage=${ms(smaxAge) / 1000}`);
            }
            else {
                this.setHeader('Cache-Control', `${directive}, max-age=${maxAge ? ms(maxAge) / 1000 : 0}`);
            }
            this.setHeader('Expires', maxAge ? new Date(Date.now() + ms(maxAge)).toUTCString() : new Date(Date.now()).toUTCString());
        }
        return this;
    }
    setError(message = 'internal server error') {
        if (this.response) {
            this.response.statusCode = 500;
            this.response.statusMessage = message;
        }
        return this;
    }
};
ServerResponseService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Optional()), __param(0, Inject(RESPONSE)),
    __metadata("design:paramtypes", [Object])
], ServerResponseService);
export { ServerResponseService };
