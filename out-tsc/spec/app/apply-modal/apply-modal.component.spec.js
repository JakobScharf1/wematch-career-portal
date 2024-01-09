/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ApplyModalComponent } from './apply-modal.component';
describe('ApplyModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ApplyModalComponent],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ApplyModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
