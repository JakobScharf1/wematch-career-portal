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
import { SearchService } from '../../services/search/search.service';
import { CheckListControl, FormUtils } from 'novo-elements';
let SidebarFilterComponent = class SidebarFilterComponent {
    constructor(service, formUtils) {
        this.service = service;
        this.formUtils = formUtils;
        this.checkboxFilter = new EventEmitter();
        this.loading = true;
        this.viewAllOptions = false;
    }
    ngOnChanges(changes) {
        switch (this.field) {
            case 'publishedCategory(id,name)':
                this.fieldName = 'publishedCategory';
                break;
            default:
                this.fieldName = this.field;
                break;
        }
        this.getFilterOptions();
    }
    toggleAllOptions() {
        this.viewAllOptions = !this.viewAllOptions;
    }
    getFilterOptions() {
        this.loading = true;
        this.service.getCurrentJobIds(this.filter, [this.fieldName]).subscribe(this.handleJobIdsOnSuccess.bind(this));
    }
    handleJobIdsOnSuccess(res) {
        let resultIds = res.data.map((result) => { return result.id; });
        this.service.getAvailableFilterOptions(resultIds, this.field).subscribe(this.setFieldOptionsOnSuccess.bind(this));
    }
    setFieldOptionsOnSuccess(res) {
        let interaction;
        switch (this.field) {
            case 'address(city)':
                this.options = res.data.map((result) => {
                    return {
                        value: result.address.city,
                        label: `${result.address.city} (${result.idCount})`,
                    };
                }).filter((item) => {
                    return item.value;
                });
                interaction = (API) => {
                    let values = [];
                    this.lastSetValue = API.getActiveValue();
                    if (API.getActiveValue()) {
                        values = API.getActiveValue().map((value) => {
                            return `address.city{?^^equals}{?^^delimiter}${value}{?^^delimiter}`;
                        });
                    }
                    this.checkboxFilter.emit(values);
                };
                break;
            case 'address(state)':
                this.options = res.data.map((result) => {
                    return {
                        value: result.address.state,
                        label: `${result.address.state} (${result.idCount})`,
                    };
                }).filter((item) => {
                    return item.value;
                });
                interaction = (API) => {
                    let values = [];
                    this.lastSetValue = API.getActiveValue();
                    if (API.getActiveValue()) {
                        values = API.getActiveValue().map((value) => {
                            return `address.state{?^^equals}{?^^delimiter}${value}{?^^delimiter}`;
                        });
                    }
                    this.checkboxFilter.emit(values);
                };
                break;
            case 'publishedCategory(id,name)':
                this.options = res.data
                    .filter((unfilteredResult) => {
                    return !!unfilteredResult.publishedCategory;
                })
                    .map((result) => {
                    return {
                        value: result.publishedCategory.id,
                        label: `${result.publishedCategory.name} (${result.idCount})`,
                    };
                });
                interaction = (API) => {
                    let values = [];
                    this.lastSetValue = API.getActiveValue();
                    if (API.getActiveValue()) {
                        values = API.getActiveValue().map((value) => {
                            return `publishedCategory.id{?^^equals}${value}`;
                        });
                    }
                    this.checkboxFilter.emit(values);
                };
                break;
            default:
                break;
        }
        this.control = new CheckListControl({
            key: 'checklist',
            options: this.options,
            interactions: [{ event: 'change', script: interaction.bind(this), invokeOnInit: false }],
        });
        this.formUtils.setInitialValues([this.control], { 'checklist': this.lastSetValue });
        this.form = this.formUtils.toFormGroup([this.control]);
        this.loading = false;
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SidebarFilterComponent.prototype, "checkboxFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SidebarFilterComponent.prototype, "filter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SidebarFilterComponent.prototype, "field", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SidebarFilterComponent.prototype, "title", void 0);
SidebarFilterComponent = __decorate([
    Component({
        selector: 'app-sidebar-filter',
        templateUrl: './sidebar-filter.component.html',
        styleUrls: ['./sidebar-filter.component.scss'],
    }),
    __metadata("design:paramtypes", [SearchService, FormUtils])
], SidebarFilterComponent);
export { SidebarFilterComponent };
