import {AppSettings} from '../settings/appSettings';

export class UrlResolver{
	private static _categoriesUrl = AppSettings.CATEGORIES_URL;
	private static _productsUrl = AppSettings.PRODUCTS_URL;
	private static _registerUrl = AppSettings.REGISTER_URL;
	private static _loginUrl = AppSettings.LOGIN_URL;

	constructor() {}

	static getCategoriesUrl() {
		return this._categoriesUrl;
	}

	//Gets url for all products of category by category id
	static getCategoryProductsUrl(categoryId: string) {
		return this._categoriesUrl + categoryId + this._productsUrl;
	}

	//Gets url for product of category
	static getCategoryProductUrl(categoryId: string, productId: string) {
		return this._categoriesUrl + categoryId + this._productsUrl + productId;
	}

	//Gets register url
	static getRegisterUrl() {
		return this._registerUrl;
	}

	//Gets login url
	static getLoginUrl() {
		return this._loginUrl;
	}
}
