import {Category} from '../models/index';
import {ProductsManager} from '../helpers/index';

export class CategoriesManager {
	private _productsManager: ProductsManager = new ProductsManager();

	constructor() {}

	//Creates and returns  array of Category instances
	createCategoriesList(items): Category[]  {
		let that = this;
		let categoriesList = [];
		let productList = [];

		//Creates instance of Category and adds to array Categories
		items.forEach(function(val, i){
			productList = that._productsManager.createProductsList(val.products);// creates array of Product instances

			//creates object for Category constructor
			let obj = {
				_id: val._id,
				category: val.category,
				products: productList
			};

			let category = new Category(obj);

			categoriesList.push(category);//creates array of Category instances
		});

		return categoriesList;
	}
}
