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
let MainPageComponent = class MainPageComponent {
    constructor() {
        this.filterCount = 1;
        this.listFilter = {};
        this.displaySidebar = false;
        this.loading = true;
        this.error = false;
        this.sidebarCss = {};
    }
    onSidebarFilter(filter) {
        this.listFilter = filter;
        this.filterCount++;
    }
    toggleSidebar(value) {
        this.displaySidebar = value;
        if (value) {
            this.sidebarCss = {
                position: 'absolute',
                width: '60%',
                'max-width': 'unset',
            };
        }
        else {
            this.sidebarCss = {};
        }
    }
    handleListLoad(loading) {
        this.loading = loading;
    }
    handleError(showError) {
        this.error = showError;
    }
};
MainPageComponent = __decorate([
    Component({
        selector: 'app-main-page',
        templateUrl: './main-page.component.html',
        styleUrls: ['./main-page.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], MainPageComponent);
export { MainPageComponent };
