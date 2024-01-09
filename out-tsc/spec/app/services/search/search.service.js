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
import { of } from 'rxjs';
let SearchService = class SearchService {
    constructor(http, settings) {
        this.http = http;
        this.settings = settings;
    }
    get baseUrl() {
        var _a;
        let service = (_a = SettingsService.settings) === null || _a === void 0 ? void 0 : _a.service;
        let port = (service === null || service === void 0 ? void 0 : service.port) ? service.port : 443;
        let scheme = `http${port === 443 ? 's' : ''}`;
        return `${scheme}://public-rest${service === null || service === void 0 ? void 0 : service.swimlane}.bullhornstaffing.com:${port}/rest-services/${service === null || service === void 0 ? void 0 : service.corpToken}`;
    }
    getjobs(filter, params = {}, count = 30) {
        let queryArray = [];
        params.query = `(isOpen:1) AND (isDeleted:0)${this.formatAdditionalCriteria(true)}${this.formatFilter(filter, true)}`;
        params.fields = SettingsService.settings.service.fields;
        params.count = count;
        params.sort = SettingsService.settings.additionalJobCriteria.sort;
        params.showTotalMatched = true;
        for (let key in params) {
            queryArray.push(`${key}=${params[key]}`);
        }
        let queryString = queryArray.join('&');
        return this.http.get(`${this.baseUrl}/search/JobOrder?${queryString}`);
    }
    openJob(id) {
        var _a, _b;
        return this.http.get(`${this.baseUrl}/query/JobBoardPost?where=(id=${id})&fields=${(_b = (_a = SettingsService.settings) === null || _a === void 0 ? void 0 : _a.service) === null || _b === void 0 ? void 0 : _b.fields}`);
    }
    getCurrentJobIds(filter, ignoreFields) {
        let queryArray = [];
        let params = {};
        params.query = `(isOpen:1) AND (isDeleted:0)${this.formatAdditionalCriteria(true)}${this.formatFilter(filter, true, ignoreFields)}`;
        params.count = `500`;
        params.fields = 'id';
        params.sort = 'id';
        for (let key in params) {
            queryArray.push(`${key}=${params[key]}`);
        }
        let queryString = queryArray.join('&');
        return this.http.get(`${this.baseUrl}/search/JobOrder?${queryString}`);
    }
    getAvailableFilterOptions(ids, field) {
        let params = {};
        let queryArray = [];
        if (ids.length > 0) {
            params.where = `id IN (${ids.toString()})`;
            params.count = `500`;
            params.fields = `${field},count(id)`;
            params.groupBy = field;
            switch (field) {
                case 'publishedCategory(id,name)':
                    params.orderBy = 'publishedCategory.name';
                    break;
                case 'address(state)':
                    params.orderBy = 'address.state';
                    break;
                case 'address(city)':
                    params.orderBy = 'address.city';
                    break;
                default:
                    params.orderBy = '-count.id';
                    break;
            }
            for (let key in params) {
                queryArray.push(`${key}=${params[key]}`);
            }
            let queryString = queryArray.join('&');
            return this.http.get(`${this.baseUrl}/query/JobBoardPost?${queryString}`); // tslint:disable-line
        }
        else {
            return of({ count: 0, start: 0, data: [] });
        }
    }
    formatAdditionalCriteria(isSearch) {
        let field = SettingsService.settings.additionalJobCriteria.field;
        let values = SettingsService.settings.additionalJobCriteria.values;
        let query = '';
        let delimiter = isSearch ? '"' : '\'';
        let equals = isSearch ? ':' : '=';
        if (field && values.length > 0 && field !== '[ FILTER FIELD HERE ]' && values[0] !== '[ FILTER VALUE HERE ]') {
            for (let i = 0; i < values.length; i++) {
                if (i > 0) {
                    query += ` OR `;
                }
                else {
                    query += ' AND (';
                }
                query += `${field}${equals}${delimiter}${values[i]}${delimiter}`;
            }
            query += ')';
        }
        return query;
    }
    formatFilter(filter, isSearch, ignoreFields = []) {
        let additionalFilter = '';
        for (let key in filter) {
            if (!ignoreFields.includes(key)) {
                let filterValue = filter[key];
                if (typeof filterValue === 'string') {
                    additionalFilter += ` AND (${filterValue})`;
                }
                else if (filterValue.length) {
                    additionalFilter += ` AND (${filterValue.join(' OR ')})`;
                }
            }
        }
        return additionalFilter.replace(/{\?\^\^equals}/g, isSearch ? ':' : '=').replace(/{\?\^\^delimiter}/g, isSearch ? '"' : '\'');
    }
};
SearchService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, SettingsService])
], SearchService);
export { SearchService };
