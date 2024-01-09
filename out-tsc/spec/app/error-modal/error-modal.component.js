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
import { NovoModalRef, NovoModalParams } from 'novo-elements';
let ErrorModalComponent = class ErrorModalComponent {
    constructor(params, modalRef) {
        this.params = params;
        this.modalRef = modalRef;
    }
    ngOnInit() {
    }
    close() {
        this.modalRef.close();
    }
};
ErrorModalComponent = __decorate([
    Component({
        selector: 'error-modal',
        templateUrl: './error-modal.component.html',
        styleUrls: ['./error-modal.component.scss'],
    }),
    __metadata("design:paramtypes", [NovoModalParams, NovoModalRef])
], ErrorModalComponent);
export { ErrorModalComponent };
