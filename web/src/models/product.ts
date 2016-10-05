export class Product {
	_id: string;
	name: string;
	price: string;
	desc: string;
	imgUrl: string;

	constructor(obj: any) {
		this._id = obj._id;
		this.name = obj.name;
		this.price = obj.price;
		this.desc = obj.desc;
		this.imgUrl = obj.imgUrl;
	}
}
