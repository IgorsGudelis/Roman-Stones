import './rxjs-extensions';

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import { routing } from './app.routing';

import {AppComponent,
		NavComponent,
		CarouselComponent,
		HomeComponent,
		FooterComponent}   from './components/index';
import {CategoriesService} from "./services/index";

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		CarouselComponent,
		HomeComponent,
		FooterComponent],
	providers: [CategoriesService],
	imports: [BrowserModule, FormsModule, HttpModule, routing],
	bootstrap: [AppComponent]
})
export class AppModule { }
