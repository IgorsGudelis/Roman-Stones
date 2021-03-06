import {Component, OnInit} from '@angular/core';

import { Category } from '../../models/index';
import { CategoriesService } from "../../services/index";

@Component({
	moduleId: module.id,
	selector: 'shop-app',
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
	categories: Category[];

	constructor(private _categoriesService: CategoriesService) {}

	ngOnInit():void {
		//Gets all categories
		this._categoriesService
			.getCategories()
			.subscribe(res =>this.categories = res);
	}
}
