///<reference path="../../typings/index.d.ts"/>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';
import { environment } from './environment';

if(environment.production) {
	enableProdMode();
}

const platform = platformBrowserDynamic();

//noinspection TypeScriptValidateTypes
platform.bootstrapModule(AppModule);
