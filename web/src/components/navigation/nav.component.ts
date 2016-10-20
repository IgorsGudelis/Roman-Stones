import { Component, Input } from '@angular/core';

import {Category} from "../../models/index";
import {CategoriesService} from "../../services/index";

@Component({
	moduleId: module.id,
	selector: 'shop-nav',
	templateUrl: 'nav.component.html'
})
export class NavComponent {
	categories: Category[];

	constructor(private _categoriesService: CategoriesService){
		this._categoriesService.categoriesChanges.subscribe(result => this.categories = result);// subscribes for categories changes
	}
}
