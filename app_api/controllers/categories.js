var ServerManager = require('../bll/serverManager');
var CategoriesManagerBll = require('../bll/categoriesManagerBll');
var _serverManager = new ServerManager();
var _categoriesManagerBll = new CategoriesManagerBll();

//Gets list of categories
module.exports.categoriesList = function(req, res){
	_categoriesManagerBll.getCategories()
		.then(function(result){
			var responseDb =_categoriesManagerBll.checkResponseDb(result);

			_serverManager.sendJsonResponse(res, responseDb.status, responseDb.content);
		});
};

//Creates new category
module.exports.categoriesCreate = function(req, res) {
	var category = req.body.category;

	if (!category) {
		_serverManager.sendJsonResponse(res, 400, {message: 'Category name required.'});
	}else{
		_categoriesManagerBll.createCategory(category)
		.then(
				function(result){
					var responseDb =_categoriesManagerBll.checkResponseDb(result);

					_serverManager.sendJsonResponse(res, responseDb.status, responseDb.content);
				},
				function(rej) {
					var err = {message: rej};
					_serverManager.sendJsonResponse(res, 404, err);
				});
	}


};

//Updates category
module.exports.categoriesUpdateOne = function(req, res){
	var categoryId = req.params.categoryId;
	var categoryName = req.body.category;

	if (!categoryId) {
		_serverManager.sendJsonResponse(res, 404, {"message": "Not found, categoryId is required"});
	}

	_categoriesManagerBll.updateCategory(categoryId, categoryName)
		.then(function(result){
			var responseDb =_categoriesManagerBll.checkResponseDb(result);

			_serverManager.sendJsonResponse(res, responseDb.status, responseDb.content);
		});
};

//Deletes category
module.exports.categoriesDeleteOne = function(req, res){
	var categoryId = req.params.categoryId;

	if (categoryId) {
		_categoriesManagerBll.deleteCategory(categoryId)
				.then(function(result) {
					var responseDb =_categoriesManagerBll.checkResponseDb(result);
					_serverManager.sendJsonResponse(res, responseDb.status, responseDb.content);
				});

	} else {
		_serverManager.sendJsonResponse(res, 404, {"message": "No categoryId."});
	}
};



