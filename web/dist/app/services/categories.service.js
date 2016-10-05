"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var index_1 = require('../helpers/index');
var index_2 = require("./index");
var CategoriesService = (function () {
    function CategoriesService(_http) {
        this._http = _http;
        this._categoriesManager = new index_1.CategoriesManager();
        this.categoriesChanges = new core_1.EventEmitter();
        this._categoriesUrl = index_2.UrlResolver.getCategoriesUrl();
    }
    //Gets categories from server
    CategoriesService.prototype.getCategories = function () {
        var _this = this;
        return this._http.get(this._categoriesUrl)
            .map(function (res) {
            var items = res.json();
            return _this._categoriesManager.createCategoriesList(items); // creates and returns array of Category instances
        });
    };
    //Creates new category
    CategoriesService.prototype.createCategory = function (category) {
        var body = JSON.stringify(category);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post(this._categoriesUrl, body, { headers: headers })
            .map(function (res) {
            res.json();
        });
    };
    //Edits category
    CategoriesService.prototype.editCategory = function (categoryItem) {
        var category = {
            category: categoryItem.category
        };
        var body = JSON.stringify(category);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this._categoriesUrl + categoryItem._id;
        return this._http
            .put(url, body, { headers: headers })
            .map(function (res) {
            res.json();
        });
    };
    //Deletes category
    CategoriesService.prototype.deleteCategory = function (categoryId) {
        return this._http
            .delete(this._categoriesUrl + categoryId)
            .map(function (res) {
            return res.json();
        });
    };
    //Saves selected category to CategoriesService
    CategoriesService.prototype.saveSelectedCategory = function (category) {
        this._category = category;
    };
    //Gets saved selected category from CategoriesService
    CategoriesService.prototype.getSelectedCategory = function () {
        return this._category;
    };
    //Sends new categories for subscribers
    CategoriesService.prototype.sendCategoriesChanges = function (categories) {
        this.categoriesChanges.emit(categories);
    };
    CategoriesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategoriesService);
    return CategoriesService;
}());
exports.CategoriesService = CategoriesService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUk1QyxzQkFBZ0Msa0JBQWtCLENBQUMsQ0FBQTtBQUNuRCxzQkFBMEIsU0FBUyxDQUFDLENBQUE7QUFHcEM7SUFPQywyQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFIdkIsdUJBQWtCLEdBQXNCLElBQUkseUJBQWlCLEVBQUUsQ0FBQztRQUN4RSxzQkFBaUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFHOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELDZCQUE2QjtJQUM3Qix5Q0FBYSxHQUFiO1FBQUEsaUJBTUM7UUFMQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1AsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxrREFBa0Q7UUFDOUcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLDBDQUFjLEdBQWQsVUFBZSxRQUFhO1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1AsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHdDQUFZLEdBQVosVUFBYSxZQUFpQjtRQUM3QixJQUFJLFFBQVEsR0FBRztZQUNkLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtTQUMvQixDQUFDO1FBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNmLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDUCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsMENBQWMsR0FBZCxVQUFlLFVBQVU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFFTixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELDhDQUE4QztJQUM5QyxnREFBb0IsR0FBcEIsVUFBcUIsUUFBYTtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscURBQXFEO0lBQ3JELCtDQUFtQixHQUFuQjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsaURBQXFCLEdBQXJCLFVBQXNCLFVBQVU7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBN0VGO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUE4RWIsd0JBQUM7QUFBRCxDQTdFQSxBQTZFQyxJQUFBO0FBN0VZLHlCQUFpQixvQkE2RTdCLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcclxuaW1wb3J0IHtDYXRlZ29yaWVzTWFuYWdlcn0gZnJvbSAnLi4vaGVscGVycy9pbmRleCc7XHJcbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzU2VydmljZXtcclxuXHRwcml2YXRlIF9jYXRlZ29yaWVzVXJsOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWRDYXRlZ29yeU5hbWU6IHN0cmluZztcclxuXHRwcml2YXRlIF9jYXRlZ29yeTogYW55O1xyXG5cdHByaXZhdGUgX2NhdGVnb3JpZXNNYW5hZ2VyOiBDYXRlZ29yaWVzTWFuYWdlciA9IG5ldyBDYXRlZ29yaWVzTWFuYWdlcigpO1xyXG5cdGNhdGVnb3JpZXNDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXtcclxuXHRcdHRoaXMuX2NhdGVnb3JpZXNVcmwgPSBVcmxSZXNvbHZlci5nZXRDYXRlZ29yaWVzVXJsKCk7XHJcblx0fVxyXG5cclxuXHQvL0dldHMgY2F0ZWdvcmllcyBmcm9tIHNlcnZlclxyXG5cdGdldENhdGVnb3JpZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9jYXRlZ29yaWVzVXJsKVxyXG5cdFx0XHQubWFwKHJlcyA9PiB7XHJcblx0XHRcdFx0bGV0IGl0ZW1zID0gcmVzLmpzb24oKTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fY2F0ZWdvcmllc01hbmFnZXIuY3JlYXRlQ2F0ZWdvcmllc0xpc3QoaXRlbXMpOy8vIGNyZWF0ZXMgYW5kIHJldHVybnMgYXJyYXkgb2YgQ2F0ZWdvcnkgaW5zdGFuY2VzXHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly9DcmVhdGVzIG5ldyBjYXRlZ29yeVxyXG5cdGNyZWF0ZUNhdGVnb3J5KGNhdGVnb3J5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5KTtcclxuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHJcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cFxyXG5cdFx0XHQucG9zdCh0aGlzLl9jYXRlZ29yaWVzVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcblx0XHRcdC5tYXAocmVzID0+IHtcclxuXHRcdFx0XHRyZXMuanNvbigpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vRWRpdHMgY2F0ZWdvcnlcclxuXHRlZGl0Q2F0ZWdvcnkoY2F0ZWdvcnlJdGVtOiBhbnkpIHtcclxuXHRcdGxldCBjYXRlZ29yeSA9IHtcclxuXHRcdFx0Y2F0ZWdvcnk6IGNhdGVnb3J5SXRlbS5jYXRlZ29yeVxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjYXRlZ29yeSk7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG5cdFx0bGV0IHVybCA9IHRoaXMuX2NhdGVnb3JpZXNVcmwgKyBjYXRlZ29yeUl0ZW0uX2lkO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLl9odHRwXHJcblx0XHRcdC5wdXQodXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcblx0XHRcdC5tYXAocmVzID0+IHtcclxuXHRcdFx0XHRyZXMuanNvbigpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vRGVsZXRlcyBjYXRlZ29yeVxyXG5cdGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5SWQpOiBPYnNlcnZhYmxlPGFueT4gIHtcclxuXHRcdHJldHVybiB0aGlzLl9odHRwXHJcblx0XHRcdC5kZWxldGUodGhpcy5fY2F0ZWdvcmllc1VybCArIGNhdGVnb3J5SWQpXHJcblx0XHRcdC5tYXAocmVzID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL1NhdmVzIHNlbGVjdGVkIGNhdGVnb3J5IHRvIENhdGVnb3JpZXNTZXJ2aWNlXHJcblx0c2F2ZVNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnk6IGFueSkge1xyXG5cdFx0dGhpcy5fY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdC8vR2V0cyBzYXZlZCBzZWxlY3RlZCBjYXRlZ29yeSBmcm9tIENhdGVnb3JpZXNTZXJ2aWNlXHJcblx0Z2V0U2VsZWN0ZWRDYXRlZ29yeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdC8vU2VuZHMgbmV3IGNhdGVnb3JpZXMgZm9yIHN1YnNjcmliZXJzXHJcblx0c2VuZENhdGVnb3JpZXNDaGFuZ2VzKGNhdGVnb3JpZXMpIHtcclxuXHRcdHRoaXMuY2F0ZWdvcmllc0NoYW5nZXMuZW1pdChjYXRlZ29yaWVzKTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
