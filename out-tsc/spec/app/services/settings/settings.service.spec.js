/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';
describe('Service: Settings', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SettingsService],
        });
    });
    it('should ...', inject([SettingsService], (service) => {
        expect(service).toBeTruthy();
    }));
});
