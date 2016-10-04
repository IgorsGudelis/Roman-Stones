var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	name: {type: String},
	price: {type: String},
	description: {type: String},
	imgUrl: {type: String}
});

var categorySchema = new mongoose.Schema({
	category: {type: String, required: true},
	products: [productSchema]
});


mongoose.model('Category', categorySchema);