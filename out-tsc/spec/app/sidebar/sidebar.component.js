var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, HostBinding, Input, } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
import { SearchService } from '../services/search/search.service';
import { Router } from '@angular/router';
let SidebarComponent = class SidebarComponent {
    constructor(searchService, router) {
        var _a, _b, _c;
        this.searchService = searchService;
        this.router = router;
        this.newFilter = new EventEmitter();
        this.toggleSidebar = new EventEmitter();
        this.display = false;
        this.controls = [];
        this.keyword = '';
        this.loading = false;
        this.filter = {};
        this.showPrivacyPolicy = SettingsService.settings.privacyConsent.sidebarLink;
        this.showImpressum = SettingsService.settings.privacyConsent.sidebarLink;
        this.languageDropdownEnabled = ((_a = SettingsService.settings.languageDropdownOptions) === null || _a === void 0 ? void 0 : _a.enabled) &&
            !SettingsService.isServer;
        this.availableLocales = ((_c = (_b = SettingsService.settings) === null || _b === void 0 ? void 0 : _b.languageDropdownOptions) === null || _c === void 0 ? void 0 : _c.choices) || [];
    }
    searchOnDelay() {
        const keywordSearchFields = SettingsService.settings.service.keywordSearchFields;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            let searchString = '';
            if (this.keyword.trim()) {
                keywordSearchFields.forEach((field, index) => {
                    if (index > 0) {
                        searchString += ' OR ';
                    }
                    searchString += `${field}{?^^equals}${this.keyword.trim() ? this.keyword.trim() + '*' : ''}`;
                });
            }
            delete this.filter['ids'];
            if (searchString) {
                this.filter['keyword'] = searchString;
            }
            else {
                delete this.filter['keyword'];
            }
            this.searchService
                .getCurrentJobIds(this.filter, [])
                .subscribe(this.handleJobIdsOnSuccess.bind(this));
        }, 250);
    }
    updateFilter(field, httpFormatedFilter) {
        delete this.filter['keyword'];
        this.filter[field] = httpFormatedFilter;
        let filter = {};
        Object.assign(filter, this.filter);
        this.filter = filter; // triggering angular change detection
        this.newFilter.emit(this.filter);
    }
    hideSidebar() {
        this.toggleSidebar.emit(false);
    }
    viewPrivacyPolicy() {
        const url = SettingsService.settings.privacyConsent.privacyPolicyUrl;
        if (url === '/privacy') {
            this.router.navigate([url]);
        }
        else {
            window.open(url);
        }
    }
    viewImpressum() {
        const url = '/impressum';
        this.router.navigate([url]);
    }
    setPreferredLanguage(language) {
        localStorage.setItem('preferredLanguage', language);
        location.reload();
    }
    handleJobIdsOnSuccess(res) {
        let resultIds = res.data.map((result) => {
            return `id{?^^equals}${result.id}`;
        });
        if (resultIds.length === 0) {
            resultIds.push(`id{?^^equals}${0}`);
        }
        this.updateFilter('ids', resultIds);
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SidebarComponent.prototype, "newFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SidebarComponent.prototype, "toggleSidebar", void 0);
__decorate([
    HostBinding('class.active'),
    Input(),
    __metadata("design:type", Boolean)
], SidebarComponent.prototype, "display", void 0);
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss'],
    }),
    __metadata("design:paramtypes", [SearchService, Router])
], SidebarComponent);
export { SidebarComponent };
