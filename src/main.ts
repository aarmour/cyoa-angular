import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CyoaAngularAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CyoaAngularAppComponent);
