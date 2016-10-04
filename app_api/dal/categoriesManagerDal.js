var mongoose = require('mongoose');
var Ctgr = mongoose.model('Category');

var CategoriesManagerDal = function() {
	this.result = {
		categories: null,
		errExist: false,
		err: null,
		reason: null //status response depend on it (create - status 201)
	};
};

//Gets categories from database
CategoriesManagerDal.prototype.getCategories = function(resolve) {
	var that = this;

	Ctgr.find(function(err, categories){
		if(!categories) {
			that.result.categories = null;
			that.result.errExist = false;
			that.result.reason = null;
			resolve(that.result);

		}else if(err){
			that.result.errExist = true;
			that.result.err = err;
		}else {
			that.result.categories = categories;
		}

		that.result.reason = null;

		resolve(that.result);
	});
};

//Creates new category
CategoriesManagerDal.prototype.createCategory = function(category, resolve, reject) {
	var that = this;

	Ctgr //Check exists category or not
		.find({category: category})
		.exec(function(err, categoryExist) {
			if(categoryExist.length !== 0) {
				reject('A category with same name already exists.');

			}else if(err) {
				reject(err);

			}else {
				//Creates new category
				Ctgr.create(
						{
							category: category
						},
						function(err, category){
							if(err){
								that.result.errExist = true;
								that.result.err = err;
							}else{
								that.result.categories = category;
							}

							that.result.reason = 'create';

							resolve(that.result);
						}
				);
			}
		});
};

//Updates category
CategoriesManagerDal.prototype.updateCategory = function(categoryId, categoryName, resolve) {
	var that = this;

	Ctgr
		.findById(categoryId)
		.exec(function(err, category){
			if(!category) {
				that.result.categories = null;
				that.result.errExist = false;
				that.result.reason = null;
				resolve(that.result);

			}else if (err) {
				that.result.errExist = true;
				that.result.err = err;
				resolve(that.result);

			}else {
				category.category = categoryName;

				category.save(function(err, category){
					if(err){
						that.result.errExist = true;
						that.result.err = err;
					}else{
						that.result.categories = category;
					}

					that.result.reason = null;
					resolve(that.result);
				});
			}
		});
};

//Deletes category
CategoriesManagerDal.prototype.deleteCategory = function(categoryId, resolve) {
	var that = this;

	Ctgr
		.findByIdAndRemove(categoryId)
		.exec(function (err, category) {
			if (err) {
				that.result.errExist = true;
				that.result.err = err;
			}else {
				that.result.reason = 'delete';
			}

			that.result.categories = category;
			resolve(that.result);
		});
};

module.exports = CategoriesManagerDal;