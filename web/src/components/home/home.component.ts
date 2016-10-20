import { Component } from '@angular/core';

import {Category} from "../../models/index";
import {CategoriesService} from "../../services/index";

@Component({
	moduleId: module.id,
	templateUrl: 'home.component.html'
})
export class HomeComponent {
	categories: Category[];

	constructor(private _categoriesService: CategoriesService) {
		this._categoriesService.categoriesChanges.subscribe(result => this.categories = result);// subscribes for categories changes
	}

}
