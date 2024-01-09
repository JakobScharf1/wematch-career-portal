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
import { FormUtils, NovoModalRef, NovoModalParams, TextBoxControl, FileControl, PickerControl, SelectControl, NovoToastService, CheckboxControl, } from 'novo-elements';
import { SettingsService } from '../services/settings/settings.service';
import { AnalyticsService } from '../services/analytics/analytics.service';
import { ApplyService } from '../services/apply/apply.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
let ApplyModalComponent = class ApplyModalComponent {
    constructor(formUtils, params, modalRef, applyService, analytics, toaster, router, translate) {
        this.formUtils = formUtils;
        this.params = params;
        this.modalRef = modalRef;
        this.applyService = applyService;
        this.analytics = analytics;
        this.toaster = toaster;
        this.router = router;
        this.translate = translate;
        this.loading = true;
        this.hasError = false;
        this.formControls = [];
        this.eeocControls = [];
        this.applying = false;
        this.consentCheckbox = SettingsService.settings.privacyConsent.consentCheckbox;
        this.showCategory = SettingsService.settings.service.showCategory;
        this.isIos = SettingsService.isIos;
        this.APPLIED_JOBS_KEY = 'APPLIED_JOBS_KEY';
        this.toaster.parentViewContainer = this.params['viewContainer'];
    }
    ngOnInit() {
        this.job = this.params['job'];
        this.source = this.params['source'];
        this.setupForm();
    }
    setupForm() {
        this.firstName = new TextBoxControl({
            key: 'firstName',
            label: this.translate.instant('FIRST_NAME'),
            required: true,
            hidden: false,
            value: '',
        });
        this.lastName = new TextBoxControl({
            key: 'lastName',
            label: this.translate.instant('LAST_NAME'),
            required: true,
            hidden: false,
            value: '',
        });
        this.email = new TextBoxControl({
            key: 'email',
            label: this.translate.instant('EMAIL'),
            type: 'email',
            required: true,
            hidden: false,
            value: '',
        });
        this.phoneNumber = new TextBoxControl({
            key: 'phone',
            label: this.translate.instant('PHONE'),
            type: 'tel',
            required: false,
            hidden: false,
            value: '',
        });
        this.genderRaceEthnicity = [
            new SelectControl({
                key: 'gender',
                label: this.translate.instant('EEOC.GENDER_LABEL'),
                required: SettingsService.settings.eeoc.genderRaceEthnicity,
                hidden: false,
                options: [
                    { value: 'M', label: this.translate.instant('EEOC.GENDER_MALE') },
                    { value: 'F', label: this.translate.instant('EEOC.GENDER_FEMALE') },
                    { value: 'D', label: this.translate.instant('EEOC.GENDER_ND') },
                ],
            }), new PickerControl({
                key: 'ethnicity',
                label: this.translate.instant('EEOC.RACE_ETHNICITY_LABEL'),
                required: SettingsService.settings.eeoc.genderRaceEthnicity,
                hidden: false,
                multiple: true,
                placeholder: this.translate.instant('EEOC.SELECT_ALL'),
                config: {
                    options: [
                        { value: 'HL', label: this.translate.instant('EEOC.RACE_ETHNICITY_HL') },
                        { value: 'WH', label: this.translate.instant('EEOC.RACE_ETHNICITY_WH') },
                        { value: 'BL', label: this.translate.instant('EEOC.RACE_ETHNICITY_BL') },
                        { value: 'AS', label: this.translate.instant('EEOC.RACE_ETHNICITY_AS') },
                        { value: 'NP', label: this.translate.instant('EEOC.RACE_ETHNICITY_NP') },
                        { value: 'IA', label: this.translate.instant('EEOC.RACE_ETHNICITY_IA') },
                        { value: 'DN', label: this.translate.instant('EEOC.RACE_ETHNICITY_DN') },
                    ],
                },
            }),
        ];
        this.veteran = [
            new SelectControl({
                key: 'veteran',
                label: this.translate.instant('EEOC.VETERAN_LABEL'),
                description: this.translate.instant('EEOC.VETERAN_DESCRIPTION'),
                required: SettingsService.settings.eeoc.veteran,
                hidden: false,
                options: [
                    { value: 'P', label: this.translate.instant('EEOC.VETERAN_P') },
                    { value: 'V', label: this.translate.instant('EEOC.VETERAN_V') },
                    { value: 'N', label: this.translate.instant('EEOC.VETERAN_N') },
                    { value: 'D', label: this.translate.instant('EEOC.VETERAN_D') },
                ],
            }),
        ];
        this.disability = [
            new SelectControl({
                key: 'disability',
                label: this.translate.instant('EEOC.DISABILITY_LABEL'),
                description: this.translate.instant('EEOC.DISABILITY_DESCRIPTION'),
                required: SettingsService.settings.eeoc.disability,
                hidden: false,
                options: [
                    { value: 'Y', label: this.translate.instant('EEOC.DISABILITY_Y') },
                    { value: 'N', label: this.translate.instant('EEOC.DISABILITY_N') },
                    { value: 'D', label: this.translate.instant('EEOC.DISABILITY_D') },
                ],
            }),
        ];
        this.resume = new FileControl({
            key: 'resume',
            required: true,
            hidden: false,
            description: `${this.translate.instant('ACCEPTED_RESUME')} ${SettingsService.settings.acceptedResumeTypes.toString()}`,
        });
        this.formControls = [this.firstName, this.lastName, this.email, this.phoneNumber, this.resume];
        let eeoc = SettingsService.settings.eeoc;
        for (let field in eeoc) {
            if (eeoc[field]) {
                this.eeocControls.push(...this[field]);
            }
        }
        this.consentControl = new CheckboxControl({
            key: 'consent',
            required: SettingsService.settings.privacyConsent.consentCheckbox,
            hidden: false,
            interactions: [
                {
                    event: 'change',
                    script: (FAPI) => {
                        if (!FAPI.getValue('consent')) {
                            FAPI.markAsInvalid('consent');
                        }
                    },
                },
            ],
        });
        this.form = this.formUtils.toFormGroup([...this.formControls, ...this.eeocControls, this.consentControl]);
        this.loading = false;
    }
    close(applied = false) {
        if (applied) {
            this.analytics.trackEvent(`Success applying to job ${this.job.id}`);
        }
        else {
            this.analytics.trackEvent(`Close apply form without applying for job ${this.job.id}`);
        }
        this.modalRef.close(undefined);
    }
    save() {
        if (this.form.valid) {
            this.applying = true;
            this.analytics.trackEvent(`Apply to Job: ${this.job.id}`);
            let requestParams = {
                firstName: encodeURIComponent(this.form.value.firstName),
                lastName: encodeURIComponent(this.form.value.lastName),
                email: encodeURIComponent(this.form.value.email),
                phone: encodeURIComponent(this.form.value.phone || ''),
                format: this.form.value.resume[0].name.substring(this.form.value.resume[0].name.lastIndexOf('.') + 1),
            };
            if (this.form.value.gender) {
                requestParams.gender = encodeURIComponent(this.form.value.gender);
            }
            if (this.form.value.ethnicity) {
                requestParams.ethnicity = encodeURIComponent(this.form.value.ethnicity);
            }
            if (this.form.value.veteran) {
                requestParams.veteran = encodeURIComponent(this.form.value.veteran);
            }
            if (this.form.value.disability) {
                requestParams.disability = encodeURIComponent(this.form.value.disability);
            }
            if (this.source) {
                requestParams.source = this.source;
            }
            let formData = new FormData();
            formData.append('resume', this.form.value.resume[0].file);
            this.applyService.apply(this.job.id, requestParams, formData).subscribe(this.applyOnSuccess.bind(this), this.applyOnFailure.bind(this));
        }
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
    applyOnSuccess(res) {
        let toastOptions = {
            theme: 'success',
            icon: 'check',
            title: this.translate.instant('THANK_YOU'),
            message: this.translate.instant('YOU_WILL_BE_CONTACTED'),
            position: 'growlTopRight',
            hideDelay: 3000,
        };
        this.toaster.alert(toastOptions);
        let alreadyAppliedJobs = sessionStorage.getItem(this.APPLIED_JOBS_KEY);
        if (alreadyAppliedJobs) {
            let alreadyAppliedJobsArray = JSON.parse(alreadyAppliedJobs);
            alreadyAppliedJobsArray.push(this.job.id);
            sessionStorage.setItem(this.APPLIED_JOBS_KEY, JSON.stringify(alreadyAppliedJobsArray));
        }
        else {
            sessionStorage.setItem(this.APPLIED_JOBS_KEY, JSON.stringify([this.job.id]));
        }
        this.applying = false;
        this.close(true);
    }
    applyOnFailure(res) {
        this.hasError = true;
        this.applying = false;
    }
};
ApplyModalComponent = __decorate([
    Component({
        selector: 'app-apply-modal',
        templateUrl: './apply-modal.component.html',
        styleUrls: ['./apply-modal.component.scss'],
    }),
    __metadata("design:paramtypes", [FormUtils,
        NovoModalParams,
        NovoModalRef,
        ApplyService,
        AnalyticsService,
        NovoToastService,
        Router,
        TranslateService])
], ApplyModalComponent);
export { ApplyModalComponent };
