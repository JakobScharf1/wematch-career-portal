import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {

  public loading: boolean = true;
  public data: any;

  constructor(private http: HttpClient, private domSanitize: DomSanitizer) { }

  public ngOnInit(): void {
    this.http.get('./static/impressum.html', {responseType: 'text'}).subscribe(this.handlePolicyOnSuccess.bind(this));
  }

  private handlePolicyOnSuccess(data: any): void {
    this.data = this.domSanitize.bypassSecurityTrustHtml(data);
    this.loading = false;
  }

}
