/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SidebarFilterComponent } from './sidebar-filter.component';
describe('SidebarFilterComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarFilterComponent],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
