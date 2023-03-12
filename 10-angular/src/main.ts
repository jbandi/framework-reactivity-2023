import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

enableProdMode(); // disabling "double change detection", because it is confusing in this demo

// NgModule is still needed, since standalone components API does not allow to disable Zone.js
platformBrowserDynamic()
  .bootstrapModule(
    AppModule
    // DEMO
    // ,{ ngZone: 'noop' }
  )
  .catch((err) => console.error(err));
