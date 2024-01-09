var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SettingsService } from './services/settings/settings.service';
import { Meta } from '@angular/platform-browser';
import { NovoToastService, NovoModalService } from 'novo-elements';
let AppComponent = class AppComponent {
    constructor(router, meta, ref, toastService, modalService) {
        this.router = router;
        this.meta = meta;
        this.ref = ref;
        this.toastService = toastService;
        this.modalService = modalService;
        this.title = SettingsService.settings.companyName;
        this.settings = SettingsService.settings;
        if (SettingsService.settings.integrations.googleSiteVerification) {
            this.meta.updateTag({
                name: 'google-site-verification',
                content: SettingsService.settings.integrations.googleSiteVerification
                    .verificationCode,
            });
        }
        let trackingId = '';
        if (SettingsService.settings.integrations.googleAnalytics) {
            trackingId =
                SettingsService.settings.integrations.googleAnalytics.trackingId;
        }
        if (trackingId && !SettingsService.isServer) {
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    window.ga('create', trackingId, 'auto');
                    window.ga('set', 'page', event.urlAfterRedirects);
                    window.ga('send', 'pageview');
                }
            });
        }
    }
    ngOnInit() {
        this.toastService.parentViewContainer = this.ref;
        this.modalService.parentViewContainer = this.ref;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        Meta,
        ViewContainerRef,
        NovoToastService,
        NovoModalService])
], AppComponent);
export { AppComponent };
