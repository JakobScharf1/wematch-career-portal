var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
let ApplyService = class ApplyService {
    constructor(http, settings) {
        this.http = http;
        this.settings = settings;
    }
    get baseUrl() {
        let service = SettingsService.settings.service;
        let port = service.port ? service.port : 443;
        let scheme = `http${port === 443 ? 's' : ''}`;
        return `${scheme}://public-rest${service.swimlane}.bullhornstaffing.com:${port}/rest-services/${service.corpToken}/apply`;
    }
    apply(id, params, formData) {
        let applyParams = this.assembleParams(params);
        return this.http.post(`${this.baseUrl}/${id}/raw?${applyParams}`, formData);
    }
    assembleParams(data) {
        let params = [];
        params.push(`externalID=Resume`);
        params.push(`type=Resume`);
        for (let key in data) {
            if (!data.hasOwnProperty(key)) {
                continue;
            }
            if (!data[key]) {
                continue;
            }
            let value = data[key];
            params.push(`${key}=${value}`);
        }
        return params.join('&');
    }
};
ApplyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, SettingsService])
], ApplyService);
export { ApplyService };
