/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { StructuredSeoComponent } from './sitemap.component';
describe('StructuredSeoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StructuredSeoComponent],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(StructuredSeoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
