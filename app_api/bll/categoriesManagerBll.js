var Promise = require('promise');
var CategoriesManagerDal = require('../dal/categoriesManagerDal');
var _categoriesManagerDal = new CategoriesManagerDal();

var CategoriesManagerBll = function() {
	this.response = {
		status: 404,
		content: null
	}
};

//Checks response from database and sets status and content for browser response
CategoriesManagerBll.prototype.checkResponseDb = function(result) {
	if(result.categories === null && result.errExist === false) {
		this.response.content = 'categories not found.';

	}else if(result.errExist === true) {
		this.response.content = err;

	}else {
		if(result.reason === 'create') {
			this.response.status = 201;
			this.response.content = result.categories;
		}else if(result.reason === 'delete') {
			this.response.status = 200;
			this.response.content = {message: 'Category was deleted.'};
		}else {
			this.response.status = 200;
			this.response.content = result.categories;
		}
	}

	return this.response;
};

//Gets categories from database
CategoriesManagerBll.prototype.getCategories = function() {
	return new Promise(function(resolve, reject) {
		_categoriesManagerDal.getCategories(resolve);
	});
};

//Creates new category
CategoriesManagerBll.prototype.createCategory = function(category) {
	return new Promise(function(resolve, reject) {
		_categoriesManagerDal.createCategory(category, resolve, reject);
	});
};

//Updates category
CategoriesManagerBll.prototype.updateCategory = function(categoryId, categoryName) {
	return new Promise(function(resolve, reject) {
		_categoriesManagerDal.updateCategory(categoryId, categoryName, resolve);
	});
};

//Deletes category
CategoriesManagerBll.prototype.deleteCategory = function(categoryId) {
	return new Promise(function(resolve, reject) {
		_categoriesManagerDal.deleteCategory(categoryId, resolve);
	});
};

module.exports = CategoriesManagerBll;