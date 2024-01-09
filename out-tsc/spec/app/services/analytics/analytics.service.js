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
import { SettingsService } from '../settings/settings.service';
let AnalyticsService = class AnalyticsService {
    constructor() {
        if (SettingsService.settings.integrations.googleAnalytics) {
            this.trackingId = SettingsService.settings.integrations.googleAnalytics.trackingId;
        }
    }
    trackEvent(action) {
        if (this.trackingId && !SettingsService.isServer) {
            window.ga('send', {
                hitType: 'event',
                eventCategory: 'Career Portal',
                eventAction: action,
                eventLabel: action,
            });
        }
    }
};
AnalyticsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AnalyticsService);
export { AnalyticsService };
