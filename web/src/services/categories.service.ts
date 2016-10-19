import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {Category} from '../models/index';
import {CategoriesManager} from '../helpers/index';
import {UrlResolver} from "./index";

@Injectable()
export class CategoriesService{
	private _categoriesUrl: string;
	private _selectedCategoryName: string;
	private _category: any;
	private _categoriesManager: CategoriesManager = new CategoriesManager();
	categoriesChanges: EventEmitter<any> = new EventEmitter<any>();

	constructor(private _http: Http){
		this._categoriesUrl = UrlResolver.getCategoriesUrl();//gets url for getting list of categories
	}

	//Gets categories from server
	getCategories(): Observable<Category[]> {
		return this._http.get(this._categoriesUrl)
			.map(res => {
				let items = res.json();
				return this._categoriesManager.createCategoriesList(items);// creates and returns array of Category instances
			});
	}

	//Creates new category
	createCategory(category: any): Observable<any> {
		const body = JSON.stringify(category);
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		return this._http
			.post(this._categoriesUrl, body, {headers: headers})
			.map(res => {
				res.json();
			});
	}

	//Edits category
	editCategory(categoryItem: any) {
		let category = {
			category: categoryItem.category
		};
		const body = JSON.stringify(category);
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		let url = this._categoriesUrl + categoryItem._id;

		return this._http
			.put(url, body, {headers: headers})
			.map(res => {
				res.json();
			});
	}

	//Deletes category
	deleteCategory(categoryId): Observable<any>  {
		return this._http
			.delete(this._categoriesUrl + categoryId)
			.map(res =>
				{
					return res.json();
				});
	}

	//Saves selected category to CategoriesService
	saveSelectedCategory(category: any) {
		this._category = category;
	}

	//Gets saved selected category from CategoriesService
	getSelectedCategory() {
		return this._category;
	}

	//Sends new categories for subscribers
	sendCategoriesChanges(categories) {
		this.categoriesChanges.emit(categories);
	}
}
