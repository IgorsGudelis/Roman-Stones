import {Product} from '../models/index';

export class ProductsManager {
	constructor() {}

	//Creates and return products list
	createProductsList(items): Product[] {
		let productsList = [];

		//Creates instance of Product and adds to array of Products
		items.forEach(function(val, i) {
			let item = new Product(val);

			productsList.push(item);
		});

		return productsList;
	}
}
