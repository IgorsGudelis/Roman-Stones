"use strict";
var index_1 = require('../models/index');
var index_2 = require('../helpers/index');
var CategoriesManager = (function () {
    function CategoriesManager() {
        this._productsManager = new index_2.ProductsManager();
    }
    //Creates and returns  array of Category instances
    CategoriesManager.prototype.createCategoriesList = function (items) {
        var that = this;
        var categoriesList = [];
        var productList = [];
        //Creates instance of Category and adds to array Categories
        items.forEach(function (val, i) {
            productList = that._productsManager.createProductsList(val.products); // creates array of Product instances
            //creates object for Category constructor
            var obj = {
                _id: val._id,
                category: val.category,
                products: productList
            };
            var category = new index_1.Category(obj);
            categoriesList.push(category); //creates array of Category instances
        });
        return categoriesList;
    };
    return CategoriesManager;
}());
exports.CategoriesManager = CategoriesManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvY2F0ZWdvcmllcy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUVqRDtJQUdDO1FBRlEscUJBQWdCLEdBQW9CLElBQUksdUJBQWUsRUFBRSxDQUFDO0lBRW5ELENBQUM7SUFFaEIsa0RBQWtEO0lBQ2xELGdEQUFvQixHQUFwQixVQUFxQixLQUFLO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXJCLDJEQUEyRDtRQUMzRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFFLENBQUM7WUFDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxxQ0FBcUM7WUFFMUcseUNBQXlDO1lBQ3pDLElBQUksR0FBRyxHQUFHO2dCQUNULEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2FBQ3JCLENBQUM7WUFFRixJQUFJLFFBQVEsR0FBRyxJQUFJLGdCQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBLHFDQUFxQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSx5QkFBaUIsb0JBNkI3QixDQUFBIiwiZmlsZSI6ImhlbHBlcnMvY2F0ZWdvcmllcy1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcclxuaW1wb3J0IHtQcm9kdWN0c01hbmFnZXJ9IGZyb20gJy4uL2hlbHBlcnMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNNYW5hZ2VyIHtcclxuXHRwcml2YXRlIF9wcm9kdWN0c01hbmFnZXI6IFByb2R1Y3RzTWFuYWdlciA9IG5ldyBQcm9kdWN0c01hbmFnZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHQvL0NyZWF0ZXMgYW5kIHJldHVybnMgIGFycmF5IG9mIENhdGVnb3J5IGluc3RhbmNlc1xyXG5cdGNyZWF0ZUNhdGVnb3JpZXNMaXN0KGl0ZW1zKTogQ2F0ZWdvcnlbXSAge1xyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0bGV0IGNhdGVnb3JpZXNMaXN0ID0gW107XHJcblx0XHRsZXQgcHJvZHVjdExpc3QgPSBbXTtcclxuXHJcblx0XHQvL0NyZWF0ZXMgaW5zdGFuY2Ugb2YgQ2F0ZWdvcnkgYW5kIGFkZHMgdG8gYXJyYXkgQ2F0ZWdvcmllc1xyXG5cdFx0aXRlbXMuZm9yRWFjaChmdW5jdGlvbih2YWwsIGkpe1xyXG5cdFx0XHRwcm9kdWN0TGlzdCA9IHRoYXQuX3Byb2R1Y3RzTWFuYWdlci5jcmVhdGVQcm9kdWN0c0xpc3QodmFsLnByb2R1Y3RzKTsvLyBjcmVhdGVzIGFycmF5IG9mIFByb2R1Y3QgaW5zdGFuY2VzXHJcblxyXG5cdFx0XHQvL2NyZWF0ZXMgb2JqZWN0IGZvciBDYXRlZ29yeSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRsZXQgb2JqID0ge1xyXG5cdFx0XHRcdF9pZDogdmFsLl9pZCxcclxuXHRcdFx0XHRjYXRlZ29yeTogdmFsLmNhdGVnb3J5LFxyXG5cdFx0XHRcdHByb2R1Y3RzOiBwcm9kdWN0TGlzdFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0bGV0IGNhdGVnb3J5ID0gbmV3IENhdGVnb3J5KG9iaik7XHJcblxyXG5cdFx0XHRjYXRlZ29yaWVzTGlzdC5wdXNoKGNhdGVnb3J5KTsvL2NyZWF0ZXMgYXJyYXkgb2YgQ2F0ZWdvcnkgaW5zdGFuY2VzXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gY2F0ZWdvcmllc0xpc3Q7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
