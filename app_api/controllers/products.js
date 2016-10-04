var mongoose = require('mongoose');
var Ctgr = mongoose.model('Category');
var fs = require('fs');
var ServerManager = require('../bll/serverManager');
var _serverManager = new ServerManager();

//Renames image name to name of the product and returns new img url
var renameImg = function(body, file){
	var mime = file.mimetype;
	var imgType = mime.split('/')[1];

	imgType = imgType == 'jpeg' ? '.jpg':'.png';

	var imgPathOld = file.destination + file.filename;
	var imgPathNew = file.destination + body.productName + imgType;

	fs.rename(imgPathOld, imgPathNew, function(err){
		if(err){
			_serverManager.sendJsonResponse(res, 400 , err);
		}
	});

	return '/imgs/' + body.productName + imgType;// url for img in mongodb
};

//Deletes old image after edit image
var deleteImgOld = function(path){
	fs.unlink(path, function(err){
		if(err){
			_serverManager.sendJsonResponse(res, 500, err);
		}
	});
};

//Adds new product to the category
var doAddProduct = function(req, res, category, imgUrl) {
	debugger;
	if (!category) {
		_serverManager.sendJsonResponse(res, 404, {
			"message": "categoryId not found."
		});
	} else {
		console.log(category.products);
		category.products.push({
			name: req.body.productName,
			price: req.body.productPrice,
			description: req.body.productDesc,
			imgUrl: imgUrl
		});

		category.save(function(err, category) {
			var thisCategory;
			var indx = category.products.length - 1;

			if (err) {
				_serverManager.sendJsonResponse(res, 400, err);
			} else {
				thisCategory = category.products[indx];

				_serverManager.sendJsonResponse(res, 201, thisCategory);
			}
		});
	}
};

//Gets products list of the category by categoryId
module.exports.productsList = function(req, res){
	var categoryId = req.params.categoryId;

	if (!categoryId) {
		_serverManager.sendJsonResponse(res, 404, {
			"message": "Not found, categoryId is required"
		});

		return;
	}

	Ctgr
	.findById(categoryId)
	.exec(function(err, category){
		if(!category){
			_serverManager.sendJsonResponse(res, 404, {message: 'category not found.'});
			return;

		}else if(err){
			_serverManager.sendJsonResponse(res, 404, err);
			return;
		}

		if(!category.products){
			_serverManager.sendJsonResponse(res, 404, {message: "category hasn't products."});
		}else{
			_serverManager.sendJsonResponse(res, 200, category.products);
		}
	});
};

//Creates new product in the category
module.exports.productsCreate = function(req, res){
	var categoryId = req.params.categoryId;

	if (!categoryId) {
		_serverManager.sendJsonResponse(res, 404, {
			"message": "Not found, categoryId is required"
		});

		return;
	}

	Ctgr
	.findById(categoryId)
	.select('products')
	.exec(function(err, category){
		if(err){
			_serverManager.sendJsonResponse(res, 404, err);
		}else{
			//var imgPathNew = renameImg(req.body, req.file);
			var imgPathNew = '/imgs/Roman-Stones-Black-Onyx-Silver-Anchor-925.jpg'; //for can add product without image for debugger

			doAddProduct(req, res, category, imgPathNew);
		}
	});
};

//Gets product of the category by categoryId and productId
module.exports.productsReadOne = function(req, res){
	if (req.params && req.params.categoryId && req.params.productId) {
		Ctgr
		.findById(req.params.categoryId)
		.select('category products')
		.exec(function (err, category) {
			var response, product;

			if (!category) {
				_serverManager.sendJsonResponse(res, 404, {"message": "category not found."});

				return;

			} else if (err) {
				_serverManager.sendJsonResponse(res, 400, err);

				return;
			}

			if (category.products && category.products.length > 0) {
				product = category.products.id(req.params.productId);

				if (!product) {
					_serverManager.sendJsonResponse(res, 404, {
						"message": "product not found."
					});
				} else {
					response = {
						category: {
							category: category.category,
							id: req.params.categoryId
						},
						product: product
					};
					_serverManager.sendJsonResponse(res, 200, response);
				}
			} else {
				_serverManager.sendJsonResponse(res, 404, {
					"message": "No products found."
				});
			}
		});
	} else {
		_serverManager.sendJsonResponse(res, 404, {
			"message": "Not found, categoryId and productId are both required."
		});
	}
};

//Updates product of the category
module.exports.productsUpdateOne = function(req, res){
	if (req.params && req.params.categoryId && req.params.productId) {
		Ctgr
		.findById(req.params.categoryId)
		.select('products')
		.exec(function (err, category) {
			var product;

			if (!category) {
				_serverManager.sendJsonResponse(res, 404, {"message": "category not found."});

				return;

			} else if (err) {
				_serverManager.sendJsonResponse(res, 400, err);

				return;
			}

			if (category.products && category.products.length > 0) {
				product = category.products.id(req.params.productId);

				if (!product) {
					_serverManager.sendJsonResponse(res, 404, {
						"message": "product not found."
					});
				} else {
					var imgPathNew = '';
					var app_api = './app_api';

					if(req.file){
						deleteImgOld(app_api + product.imgUrl);
						imgPathNew = renameImg(req.body, req.file);

						product.imgUrl = imgPathNew;
					}else{
						var start = product.imgUrl.length - 4;//start indx for .jpg or .png
						var imgType = product.imgUrl.substring(start);
						var imgPath = app_api + product.imgUrl;

						imgPathNew = '/imgs/' + req.body.productName + imgType;//img Url for mongodb

						fs.rename(imgPath, app_api + imgPathNew, function(err){
							if(err){
								_serverManager.sendJsonResponse(res, 400, err);
							}
						});

						product.imgUrl = imgPathNew;
					}

					product.name = req.body.productName;
					product.price = req.body.productPrice;
					product.description = req.body.productDesc;

					category.save(function(err, category) {
						if (err) {
							_serverManager.sendJsonResponse(res, 404, err);
						} else {
							_serverManager.sendJsonResponse(res, 200, product);
						}
					});
				}
			} else {
				_serverManager.sendJsonResponse(res, 404, {
					"message": "No products found."
				});
			}
		});
	} else {
		_serverManager.sendJsonResponse(res, 404, {
			"message": "Not found, categoryId and productId are both required."
		});
	}
};

//Deletes product from the category
module.exports.productsDeleteOne = function(req, res){
	if (req.params && req.params.categoryId && req.params.productId) {
		Ctgr
		.findById(req.params.categoryId)
		.select('products')
		.exec(function (err, category) {
			var product;

			if (!category) {
				_serverManager.sendJsonResponse(res, 404, {"message": "category not found."});

				return;

			} else if (err) {
				_serverManager.sendJsonResponse(res, 400, err);

				return;
			}

			if (category.products && category.products.length > 0) {
				product = category.products.id(req.params.productId);

				if (!product) {
					_serverManager.sendJsonResponse(res, 404, {
						"message": "product not found."
					});
				} else {
					category.products.id(req.params.productId).remove();

					var app_api = './app_api';

					deleteImgOld(app_api + product.imgUrl);


					category.save(function(err, category) {
						if (err) {
							_serverManager.sendJsonResponse(res, 404, err);
						} else {
							_serverManager.sendJsonResponse(res, 200, null);
						}
					});
				}
			} else {
				_serverManager.sendJsonResponse(res, 404, {
					"message": "No products found."
				});
			}
		});
	} else {
		_serverManager.sendJsonResponse(res, 404, {
			"message": "Not found, categoryId and productId are both required."
		});
	}
};
