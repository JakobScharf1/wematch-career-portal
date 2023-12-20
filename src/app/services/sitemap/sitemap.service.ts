import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class SiteMapService {
    private baseUrl = 'http://localhost:8000';
    
    constructor(private http: HttpClient) { }
        
    public getSitemap(): Observable<string> {
        const sitemapUrl = `${this.baseUrl}/sitemap`;
        return this.http.get(sitemapUrl, { responseType: 'text' });
    }
    
    public getRssFeed(): Observable<string> {
        const rssUrl = `${this.baseUrl}/feed`;
        return this.http.get(rssUrl, { responseType: 'text' });
    }
    
}
