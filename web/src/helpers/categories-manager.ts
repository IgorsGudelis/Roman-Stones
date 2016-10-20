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

		categoriesList = this.categoriesSort(categoriesList);

		return categoriesList;
	}

	//Sorts array of Category instances by category
	categoriesSort(items: Category[]): Category[] {
		let tmpVal: Category = new Category();//temp variable for Category item;
		let length = items.length;

		//bubble sort
		for(let i = 0; i < length; i++) {
			for(let j = 0; j < length - 1 - i; j++) {
				if(items[j + 1].category < items[j].category) {
					tmpVal = items[j + 1];
					items[j + 1] = items[j];
					items[j] = tmpVal;
				}
			}
		}

		return items;
	}
}
