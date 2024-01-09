var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../services/search/search.service';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from '../services/settings/settings.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
let JobListComponent = class JobListComponent {
    constructor(http, titleService, meta, router, translate) {
        this.http = http;
        this.titleService = titleService;
        this.meta = meta;
        this.router = router;
        this.translate = translate;
        this.sidebarVisible = false;
        this.displaySidebar = new EventEmitter();
        this.showLoading = new EventEmitter();
        this.showError = new EventEmitter();
        this.jobs = [];
        this._loading = true;
        this.moreAvailable = true;
        this.total = '...';
        this.showCategory = SettingsService.settings.service.showCategory;
        this.start = 0;
    }
    ngOnChanges(changes) {
        this.getData();
    }
    getData(loadMore = false) {
        this.start = loadMore ? (this.start + 30) : 0;
        this.titleService.setTitle(`${SettingsService.settings.companyName} - Careers`);
        let description = this.translate.instant('PAGE_DESCRIPTION');
        this.meta.updateTag({ name: 'og:description', content: description });
        this.meta.updateTag({ name: 'twitter:description', content: description });
        this.meta.updateTag({ name: 'description', content: description });
        this.http.getjobs(this.filter, { start: this.start }).subscribe(this.onSuccess.bind(this), this.onFailure.bind(this));
    }
    loadMore() {
        this.getData(true);
    }
    openSidebar() {
        this.displaySidebar.emit(true);
    }
    loadJob(jobId) {
        this.router.navigate([`jobs/${jobId}`]);
        this.loading = true;
    }
    get loading() {
        return this._loading;
    }
    set loading(value) {
        this.showLoading.emit(value);
        this._loading = value;
    }
    onSuccess(res) {
        if (this.start > 0) {
            this.jobs = this.jobs.concat(res.data);
        }
        else {
            this.jobs = res.data;
        }
        this.total = res.total;
        this.moreAvailable = (res.count === 30);
        this.loading = false;
    }
    onFailure(res) {
        this.loading = false;
        this.jobs = [];
        this.total = 0;
        this.moreAvailable = false;
        this.showError.emit(true);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], JobListComponent.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], JobListComponent.prototype, "filterCount", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], JobListComponent.prototype, "sidebarVisible", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], JobListComponent.prototype, "displaySidebar", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], JobListComponent.prototype, "showLoading", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], JobListComponent.prototype, "showError", void 0);
JobListComponent = __decorate([
    Component({
        selector: 'app-job-list',
        templateUrl: './job-list.component.html',
        styleUrls: ['./job-list.component.scss'],
    }),
    __metadata("design:paramtypes", [SearchService, Title, Meta, Router, TranslateService])
], JobListComponent);
export { JobListComponent };
