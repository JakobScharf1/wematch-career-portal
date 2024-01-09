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
import { Component, Input, HostBinding, Renderer2, Inject } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe, DOCUMENT } from '@angular/common';
let StructuredSeoComponent = class StructuredSeoComponent {
    constructor(_renderer2, datePipe, _document, sanitizer) {
        this._renderer2 = _renderer2;
        this.datePipe = datePipe;
        this._document = _document;
        this.sanitizer = sanitizer;
    }
    ngOnChanges() {
        let jsonObject = {
            '@context': 'https://schema.org/',
            '@type': 'JobPosting',
            'title': this.jobData.title,
            'description': this.jobData.publicDescription,
            'datePosted': this.datePipe.transform(this.jobData.dateLastPublished, 'long'),
            'hiringOrganization': {
                '@type': 'Organization',
                'name': SettingsService.settings.companyName,
                'sameAs': SettingsService.settings.companyUrl,
                'logo': SettingsService.settings.companyLogoPath,
            },
            'jobLocation': {
                '@type': 'Place',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': this.jobData.address.city,
                    'addressRegion': this.jobData.address.state,
                    'postalCode': this.jobData.address.zip,
                },
            },
            'baseSalary': {
                '@type': 'MonetaryAmount',
                'value': {
                    '@type': 'QuantitativeValue',
                    'value': this.jobData.salary,
                    'unitText': this.jobData.salaryUnit,
                },
            },
        };
        let s = this._renderer2.createElement('script');
        s.type = `application/ld+json`;
        s.text = JSON.stringify(jsonObject);
        if (SettingsService.isServer) {
            this._renderer2.appendChild(this._document.body, s);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], StructuredSeoComponent.prototype, "jobData", void 0);
__decorate([
    HostBinding('innerHTML'),
    __metadata("design:type", Object)
], StructuredSeoComponent.prototype, "html", void 0);
StructuredSeoComponent = __decorate([
    Component({
        selector: 'app-structured-seo',
        templateUrl: './structured-seo.component.html',
        styleUrls: ['./structured-seo.component.scss'],
    }),
    __param(2, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2,
        DatePipe,
        Document,
        DomSanitizer])
], StructuredSeoComponent);
export { StructuredSeoComponent };
