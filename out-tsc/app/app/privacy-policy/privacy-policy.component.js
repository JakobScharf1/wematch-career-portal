var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
let PrivacyPolicyComponent = class PrivacyPolicyComponent {
    constructor(http, domSanitize) {
        this.http = http;
        this.domSanitize = domSanitize;
        this.loading = true;
    }
    ngOnInit() {
        this.http.get('./static/privacy-policy.html', { responseType: 'text' }).subscribe(this.handlePolicyOnSuccess.bind(this));
    }
    handlePolicyOnSuccess(data) {
        this.data = this.domSanitize.bypassSecurityTrustHtml(data);
        this.loading = false;
    }
};
PrivacyPolicyComponent = __decorate([
    Component({
        selector: 'app-privacy-policy',
        templateUrl: './privacy-policy.component.html',
        styleUrls: ['./privacy-policy.component.scss'],
    }),
    __metadata("design:paramtypes", [HttpClient, DomSanitizer])
], PrivacyPolicyComponent);
export { PrivacyPolicyComponent };
