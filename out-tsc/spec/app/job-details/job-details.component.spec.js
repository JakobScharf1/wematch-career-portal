/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { JobDetailsComponent } from './job-details.component';
describe('JobDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JobDetailsComponent],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(JobDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
