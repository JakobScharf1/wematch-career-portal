var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobResolver } from './job.resolver';
import { environment } from '../environments/environment';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImpressumComponent } from './impressum/impressum.component';
const appRoutes = [
    { path: '', component: MainPageComponent },
    { path: 'jobs/:id', component: JobDetailsComponent, resolve: { message: JobResolver } },
    { path: 'jobs', component: MainPageComponent },
    { path: 'privacy', component: PrivacyPolicyComponent },
    { path: 'impressum', component: ImpressumComponent },
    {
        path: '**',
        redirectTo: '/',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(appRoutes, {
                enableTracing: false,
                useHash: environment.useHash,
                initialNavigation: 'enabled',
            })],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
