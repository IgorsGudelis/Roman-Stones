import {Product} from "./product";

export class Category {
	_id: string;
	category: string;
	products: Product[];

	constructor(obj?: any) {
		this._id = obj ? obj&&obj._id : 0;
		this.category = obj ? obj&&obj.category : '';
		this.products = obj ? obj&&obj.products : [];
	}
}
