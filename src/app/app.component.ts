import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SettingsService } from './services/settings/settings.service';
import { Meta } from '@angular/platform-browser';
import { NovoToastService, NovoModalService } from 'novo-elements';
import { generateSitemap } from '../../generateXml';
import { generate } from 'rxjs';
import { SiteMapService } from './services/sitemap/sitemap.service';
import { any } from 'codelyzer/util/function';
import { ISettings } from './typings/settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = SettingsService.settings.companyName;
  public sitemapData: string = '';
  public rssData: string = '';
  public settings: ISettings = SettingsService.settings;

  constructor(
    private router: Router,
    private meta: Meta,
    private ref: ViewContainerRef,
    private toastService: NovoToastService,
    private modalService: NovoModalService,
    private sitemapService: SiteMapService,
  ) {
    if (SettingsService.settings.integrations.googleSiteVerification) {
      this.meta.updateTag({
        name: 'google-site-verification',
        content:
          SettingsService.settings.integrations.googleSiteVerification
            .verificationCode,
      });
    }
    let trackingId: string = '';
    if (SettingsService.settings.integrations.googleAnalytics) {
      trackingId =
        SettingsService.settings.integrations.googleAnalytics.trackingId;
    }
    if (trackingId && !SettingsService.isServer) {
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('create', trackingId, 'auto');
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      });
    }
  }
  public ngOnInit(): void {
    this.toastService.parentViewContainer = this.ref;
    this.modalService.parentViewContainer = this.ref;
    this.sitemapService.getSitemap().subscribe(
        (data) => {
            this.sitemapData = data;
        },
    );
    this.sitemapService.getRssFeed().subscribe(
        (data) => {
            this.rssData = data;
        },
    );
  }
}
