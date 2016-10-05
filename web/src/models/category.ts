import {Product} from "./product";

export class Category {
	_id: string;
	category: string;
	products: Product[];

	constructor(obj: any) {
		this._id = obj&&obj._id;
		this.category = obj&&obj.category;
		this.products = obj&&obj.products;
	}
}
