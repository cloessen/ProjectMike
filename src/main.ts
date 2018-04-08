import { LOCALE_ID } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{provide: LOCALE_ID, useValue: 'de-DE'}]).bootstrapModule(AppModule, {
  providers: [{provide: LOCALE_ID, useValue: 'de-DE' }]
})
  .catch(err => console.log(err));
