import './rxjs-extensions';

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppComponent, NavComponent}   from './components/index';
import {CategoriesService} from "./services/index";

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
	declarations: [AppComponent, NavComponent],
	providers: [CategoriesService],
	bootstrap:    [AppComponent]
})
export class AppModule { }
