import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch((err) => {
        console.log(err); // tslint:disable-line
        const errorMsgElement = document.querySelector('novo-loading');
        let message = 'Application initialization failed, please check your app.json file';
        if (err) {
            if (err.message) {
                message = message + ': ' + err.message;
            }
            else {
                message = message + ': ' + err;
            }
        }
        errorMsgElement.textContent = message;
    });
});
