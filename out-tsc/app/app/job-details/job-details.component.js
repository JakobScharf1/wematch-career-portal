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
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../services/search/search.service';
import { NovoModalService } from 'novo-elements';
import { SettingsService } from '../services/settings/settings.service';
import { AnalyticsService } from '../services/analytics/analytics.service';
import { ApplyModalComponent } from '../apply-modal/apply-modal.component';
import { ShareService } from '../services/share/share.service';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { Title, Meta } from '@angular/platform-browser';
import { ServerResponseService } from '../services/server-response/server-response.service';
import { TranslateService } from '@ngx-translate/core';
let JobDetailsComponent = class JobDetailsComponent {
    constructor(service, shareService, route, router, analytics, modalService, viewContainerRef, titleService, meta, serverResponse, translate) {
        this.service = service;
        this.shareService = shareService;
        this.route = route;
        this.router = router;
        this.analytics = analytics;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.titleService = titleService;
        this.meta = meta;
        this.serverResponse = serverResponse;
        this.translate = translate;
        this.loading = true;
        this.showShareButtons = false;
        this.alreadyApplied = false;
        this.showCategory = SettingsService.settings.service.showCategory;
        this.isSafariAgent = false;
        this.APPLIED_JOBS_KEY = 'APPLIED_JOBS_KEY';
        this.modalService.parentViewContainer = this.viewContainerRef;
    }
    ngOnInit() {
        if (!SettingsService.isServer) {
            this.isSafariAgent = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
        }
        this.loading = true;
        this.id = this.route.snapshot.paramMap.get('id');
        this.source = this.route.snapshot.queryParams.source;
        this.analytics.trackEvent(`Open Job: ${this.id}`);
        this.checkSessionStorage();
        this.setJob();
    }
    checkSessionStorage() {
        if (!SettingsService.isServer) {
            let alreadyAppliedJobs = sessionStorage.getItem(this.APPLIED_JOBS_KEY);
            if (alreadyAppliedJobs) {
                let alreadyAppliedJobsArray = JSON.parse(alreadyAppliedJobs);
                this.alreadyApplied = (alreadyAppliedJobsArray.indexOf(parseInt(this.id)) !== -1); // tslint:disable-line
            }
        }
    }
    getRelatedJobs() {
        if (this.job && this.job.publishedCategory) {
            this.service.getjobs({ 'publishedCategory.id': [this.job.publishedCategory.id] }, {}, SettingsService.settings.service.batchSize).subscribe((res) => { this.relatedJobs = res.data; });
        }
    }
    apply() {
        this.analytics.trackEvent(`Open Apply Form ${this.job.id}`);
        this.modalService.open(ApplyModalComponent, {
            job: this.job,
            source: this.source,
            viewContainer: this.viewContainerRef,
        }).onClosed.then(this.checkSessionStorage.bind(this));
    }
    toggleShareButtons() {
        this.showShareButtons = !this.showShareButtons;
    }
    shareFacebook() {
        this.shareService.facebook(this.job);
        this.analytics.trackEvent(`Shared Job: ${this.id} via Facebook`);
    }
    shareTwitter() {
        this.shareService.twitter(this.job);
        this.analytics.trackEvent(`Shared Job: ${this.id} via Twitter`);
    }
    shareLinkedin() {
        this.shareService.linkedin(this.job);
        this.analytics.trackEvent(`Shared Job: ${this.id} via LinkedIn`);
    }
    emailLink() {
        window.open(this.shareService.emailLink(this.job));
        this.analytics.trackEvent(`Shared Job: ${this.id} via Email`);
    }
    print() {
        window.print();
    }
    goToJobList() {
        this.router.navigate(['/']);
    }
    setJob() {
        let res = this.route.snapshot.data.message;
        if (res.data && res.data.length > 0) {
            this.job = res.data[0];
            this.titleService.setTitle(this.job.title);
            this.meta.updateTag({ name: 'og:title', content: this.job.title });
            this.meta.updateTag({ name: 'titter:title', content: this.job.title });
            this.meta.updateTag({ name: 'og:image', content: SettingsService.settings.companyLogoPath });
            this.meta.updateTag({ name: 'og:url', content: `${SettingsService.urlRoot}${this.router.url}` });
            this.meta.updateTag({ name: 'og:description', content: this.job.publicDescription });
            this.meta.updateTag({ name: 'twitter:description', content: this.job.publicDescription });
            this.meta.updateTag({ name: 'description', content: this.job.publicDescription });
            this.loading = false;
        }
        else {
            this.serverResponse.setNotFound();
            this.modalService.open(ErrorModalComponent, {
                title: this.translate.instant('ERROR'),
                message: this.translate.instant('MISSING_JOB_ERROR'),
            }).onClosed.then(this.goToJobList.bind(this));
        }
    }
};
JobDetailsComponent = __decorate([
    Component({
        selector: 'app-job-details',
        templateUrl: './job-details.component.html',
        styleUrls: ['./job-details.component.scss'],
    }),
    __metadata("design:paramtypes", [SearchService,
        ShareService,
        ActivatedRoute,
        Router,
        AnalyticsService,
        NovoModalService,
        ViewContainerRef,
        Title,
        Meta,
        ServerResponseService,
        TranslateService])
], JobDetailsComponent);
export { JobDetailsComponent };
