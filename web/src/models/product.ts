export class Product {
	_id: string;
	name: string;
	price: string;
	desc: string;
	imgUrl: string;

	constructor(obj?: any) {
		this._id = obj ? obj._id : 0;
		this.name = obj ? obj.name : '';
		this.price = obj ? obj.price : '';
		this.desc = obj ? obj.desc : '';
		this.imgUrl = obj ? obj.imgUrl : '';
	}
}
