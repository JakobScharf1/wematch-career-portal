var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { SettingsService } from './services/settings/settings.service';
import { AnalyticsService } from './services/analytics/analytics.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search/search.service';
import { ShareService } from './services/share/share.service';
import { ApplyService } from './services/apply/apply.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarFilterComponent } from './sidebar/sidebar-filter/sidebar-filter.component';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NovoListModule, NovoElementsModule, NovoHeaderModule, NovoModalModule, NovoModalService, FieldInteractionApi, NovoToastService, NovoDropdownModule, NovoButtonModule, } from 'novo-elements';
import { MainPageComponent } from './main-page/main-page.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyModalComponent } from './apply-modal/apply-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { StripHtmlPipe } from './utils/stripHtml.pipe';
import { StructuredSeoComponent } from './structured-seo/structured-seo.component';
import { DatePipe } from '@angular/common';
import { JobResolver } from './job.resolver';
import { ServerResponseService } from './services/server-response/server-response.service';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationLoader } from './services/localization/loader';
import { AppRoutingModule } from './app-routing.module';
import { InfoChipsComponent } from './components/info-chips/info-chips.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
export function initSettings(settings) {
    return () => settings.load();
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            JobListComponent,
            SidebarComponent,
            MainPageComponent,
            JobDetailsComponent,
            ApplyModalComponent,
            ErrorModalComponent,
            StripHtmlPipe,
            SidebarFilterComponent,
            StructuredSeoComponent,
            PrivacyPolicyComponent,
            ImpressumComponent,
            InfoChipsComponent,
        ],
        entryComponents: [ApplyModalComponent, ErrorModalComponent],
        imports: [
            BrowserModule.withServerTransition({ appId: 'serverApp' }),
            AppRoutingModule,
            HttpClientModule,
            NovoElementsModule,
            NovoListModule,
            NovoHeaderModule,
            BrowserTransferStateModule,
            NovoModalModule,
            FormsModule,
            NovoDropdownModule,
            NovoButtonModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useClass: TranslationLoader,
                },
            }),
        ],
        providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: initSettings,
                deps: [SettingsService],
                multi: true,
            },
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy,
            },
            SettingsService,
            SearchService,
            ShareService,
            FieldInteractionApi,
            NovoModalService,
            NovoToastService,
            ApplyService,
            AnalyticsService,
            DatePipe,
            JobResolver,
            ServerResponseService,
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
