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
        categoriesList = this.categoriesSort(categoriesList);
        return categoriesList;
    };
    //Sorts array of Category instances by category
    CategoriesManager.prototype.categoriesSort = function (items) {
        var tmpVal = new index_1.Category(); //temp variable for Category item;
        var length = items.length;
        //bubble sort
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (items[j + 1].category < items[j].category) {
                    tmpVal = items[j + 1];
                    items[j + 1] = items[j];
                    items[j] = tmpVal;
                }
            }
        }
        return items;
    };
    return CategoriesManager;
}());
exports.CategoriesManager = CategoriesManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvY2F0ZWdvcmllcy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUVqRDtJQUdDO1FBRlEscUJBQWdCLEdBQW9CLElBQUksdUJBQWUsRUFBRSxDQUFDO0lBRW5ELENBQUM7SUFFaEIsa0RBQWtEO0lBQ2xELGdEQUFvQixHQUFwQixVQUFxQixLQUFLO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXJCLDJEQUEyRDtRQUMzRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFFLENBQUM7WUFDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxxQ0FBcUM7WUFFMUcseUNBQXlDO1lBQ3pDLElBQUksR0FBRyxHQUFHO2dCQUNULEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2FBQ3JCLENBQUM7WUFFRixJQUFJLFFBQVEsR0FBRyxJQUFJLGdCQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFakMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBLHFDQUFxQztRQUNwRSxDQUFDLENBQUMsQ0FBQztRQUVILGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUVELCtDQUErQztJQUMvQywwQ0FBYyxHQUFkLFVBQWUsS0FBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQWEsSUFBSSxnQkFBUSxFQUFFLENBQUMsQ0FBQSxrQ0FBa0M7UUFDeEUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUUxQixhQUFhO1FBQ2IsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLHlCQUFpQixvQkFrRDdCLENBQUEiLCJmaWxlIjoiaGVscGVycy9jYXRlZ29yaWVzLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhdGVnb3J5fSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xyXG5pbXBvcnQge1Byb2R1Y3RzTWFuYWdlcn0gZnJvbSAnLi4vaGVscGVycy9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc01hbmFnZXIge1xyXG5cdHByaXZhdGUgX3Byb2R1Y3RzTWFuYWdlcjogUHJvZHVjdHNNYW5hZ2VyID0gbmV3IFByb2R1Y3RzTWFuYWdlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdC8vQ3JlYXRlcyBhbmQgcmV0dXJucyAgYXJyYXkgb2YgQ2F0ZWdvcnkgaW5zdGFuY2VzXHJcblx0Y3JlYXRlQ2F0ZWdvcmllc0xpc3QoaXRlbXMpOiBDYXRlZ29yeVtdICB7XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRsZXQgY2F0ZWdvcmllc0xpc3QgPSBbXTtcclxuXHRcdGxldCBwcm9kdWN0TGlzdCA9IFtdO1xyXG5cclxuXHRcdC8vQ3JlYXRlcyBpbnN0YW5jZSBvZiBDYXRlZ29yeSBhbmQgYWRkcyB0byBhcnJheSBDYXRlZ29yaWVzXHJcblx0XHRpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaSl7XHJcblx0XHRcdHByb2R1Y3RMaXN0ID0gdGhhdC5fcHJvZHVjdHNNYW5hZ2VyLmNyZWF0ZVByb2R1Y3RzTGlzdCh2YWwucHJvZHVjdHMpOy8vIGNyZWF0ZXMgYXJyYXkgb2YgUHJvZHVjdCBpbnN0YW5jZXNcclxuXHJcblx0XHRcdC8vY3JlYXRlcyBvYmplY3QgZm9yIENhdGVnb3J5IGNvbnN0cnVjdG9yXHJcblx0XHRcdGxldCBvYmogPSB7XHJcblx0XHRcdFx0X2lkOiB2YWwuX2lkLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiB2YWwuY2F0ZWdvcnksXHJcblx0XHRcdFx0cHJvZHVjdHM6IHByb2R1Y3RMaXN0XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRsZXQgY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkob2JqKTtcclxuXHJcblx0XHRcdGNhdGVnb3JpZXNMaXN0LnB1c2goY2F0ZWdvcnkpOy8vY3JlYXRlcyBhcnJheSBvZiBDYXRlZ29yeSBpbnN0YW5jZXNcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNhdGVnb3JpZXNMaXN0ID0gdGhpcy5jYXRlZ29yaWVzU29ydChjYXRlZ29yaWVzTGlzdCk7XHJcblxyXG5cdFx0cmV0dXJuIGNhdGVnb3JpZXNMaXN0O1xyXG5cdH1cclxuXHJcblx0Ly9Tb3J0cyBhcnJheSBvZiBDYXRlZ29yeSBpbnN0YW5jZXMgYnkgY2F0ZWdvcnlcclxuXHRjYXRlZ29yaWVzU29ydChpdGVtczogQ2F0ZWdvcnlbXSk6IENhdGVnb3J5W10ge1xyXG5cdFx0bGV0IHRtcFZhbDogQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoKTsvL3RlbXAgdmFyaWFibGUgZm9yIENhdGVnb3J5IGl0ZW07XHJcblx0XHRsZXQgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xyXG5cclxuXHRcdC8vYnViYmxlIHNvcnRcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgbGVuZ3RoIC0gMSAtIGk7IGorKykge1xyXG5cdFx0XHRcdGlmKGl0ZW1zW2ogKyAxXS5jYXRlZ29yeSA8IGl0ZW1zW2pdLmNhdGVnb3J5KSB7XHJcblx0XHRcdFx0XHR0bXBWYWwgPSBpdGVtc1tqICsgMV07XHJcblx0XHRcdFx0XHRpdGVtc1tqICsgMV0gPSBpdGVtc1tqXTtcclxuXHRcdFx0XHRcdGl0ZW1zW2pdID0gdG1wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpdGVtcztcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
