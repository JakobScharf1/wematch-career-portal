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
let ShareService = class ShareService {
    constructor() {
        this.requestParams = {
            additionalEmailInfo: (job) => '?subject=' + encodeURIComponent(job.title) + '&body=' + this.description(job, window.location.href) + this.additionalEmailInfo(job),
            facebook: () => '?display=popup&app_id=' + this.config.keys.facebook + '&href=' + encodeURIComponent(window.location.href) + '&redirect_uri=' + encodeURIComponent('https://www.facebook.com/') + '&source=facebook',
            twitter: (job) => '?text=' + encodeURIComponent(this.description(job)) + '&url=' + encodeURIComponent(window.location.href) + '&source=twitter',
            linkedin: (job) => '?mini=true&source=Bullhorn%20Career%20Portal&title=' + encodeURIComponent(this.description(job)) + '&url=' + encodeURIComponent(window.location.href) + '&source=linkedin',
            email: (job) => '?subject=' + encodeURIComponent(job.title) + '&body=' + this.description(job, window.location.href),
        };
    }
    get config() {
        return {
            url: {
                facebook: 'https://www.facebook.com/dialog/share',
                twitter: 'https://twitter.com/intent/tweet',
                linkedin: 'https://www.linkedin.com/shareArticle',
            },
            keys: {
                facebook: '1439597326343190',
            },
        };
    }
    emailLink(job) {
        return 'mailto:' + this.requestParams.email(job);
    }
    facebook(job) {
        window.open(this.config.url.facebook + this.requestParams.facebook(job));
    }
    linkedin(job) {
        window.open(this.config.url.linkedin + this.requestParams.linkedin(job));
    }
    sendEmailLink(job, email) {
        email = email || '';
        return 'mailto:' + email + this.requestParams.additionalEmailInfo(job);
    }
    twitter(job) {
        window.open(this.config.url.twitter + this.requestParams.twitter(job));
    }
    additionalEmailInfo(job) {
        let body = '\n';
        if (job.title) {
            body += '\nTitle: Jobs';
        }
        if (job.publishedCategory && job.publishedCategory.name) {
            body += '\n' + 'Category: ' + job.publishedCategory.name;
        }
        if (job.address) {
            let location = '\n' + 'Location: ';
            if (job.address.city && job.address.state) {
                body += location + job.address.city + ', ' + job.address.state + '\n';
            }
            else if (job.address.city) {
                body += location + job.address.city + '\n';
            }
            else if (job.address.state) {
                body += location + job.address.state + '\n';
            }
        }
        return encodeURIComponent(body);
    }
    description(job, url) {
        if (url) {
            return 'Check out this ' + encodeURIComponent(job.title) + ' job: ' + encodeURIComponent(url);
        }
        return 'Check out this ' + encodeURIComponent(job.title) + ' job!';
    }
};
ShareService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ShareService);
export { ShareService };
