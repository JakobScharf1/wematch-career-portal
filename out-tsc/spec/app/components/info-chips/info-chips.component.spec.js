/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { InfoChipsComponent } from './info-chips.component';
describe('InfoChipsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InfoChipsComponent],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(InfoChipsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
