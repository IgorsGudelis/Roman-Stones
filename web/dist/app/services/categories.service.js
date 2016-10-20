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
        //gets url for getting list of categories
        this._categoriesUrl = index_2.UrlResolver.getCategoriesUrl();
    }
    //Gets categories from server
    CategoriesService.prototype.getCategories = function () {
        var _this = this;
        return this._http.get(this._categoriesUrl)
            .map(function (res) {
            var items = res.json();
            // creates array of Category instances
            var categories = _this._categoriesManager.createCategoriesList(items);
            //sends categories items for subscribers
            _this.categoriesChanges.emit(categories);
            return categories;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhdGVnb3JpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUk1QyxzQkFBZ0Msa0JBQWtCLENBQUMsQ0FBQTtBQUNuRCxzQkFBMEIsU0FBUyxDQUFDLENBQUE7QUFJcEM7SUFRQywyQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFKdkIsdUJBQWtCLEdBQXNCLElBQUkseUJBQWlCLEVBQUUsQ0FBQztRQUN4RSxzQkFBaUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFJOUQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCw2QkFBNkI7SUFDN0IseUNBQWEsR0FBYjtRQUFBLGlCQWFDO1FBWkEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNQLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV2QixzQ0FBc0M7WUFDdEMsSUFBSSxVQUFVLEdBQWUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWpGLHdDQUF3QztZQUN4QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXhDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLDBDQUFjLEdBQWQsVUFBZSxRQUFhO1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1AsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHdDQUFZLEdBQVosVUFBYSxZQUFpQjtRQUM3QixJQUFJLFFBQVEsR0FBRztZQUNkLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtTQUMvQixDQUFDO1FBQ0YsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNmLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDUCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsMENBQWMsR0FBZCxVQUFlLFVBQVU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFFTixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELDhDQUE4QztJQUM5QyxnREFBb0IsR0FBcEIsVUFBcUIsUUFBYTtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscURBQXFEO0lBQ3JELCtDQUFtQixHQUFuQjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsaURBQXFCLEdBQXJCLFVBQXNCLFVBQVU7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBdEZGO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUF1RmIsd0JBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBO0FBdEZZLHlCQUFpQixvQkFzRjdCLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHtDYXRlZ29yeX0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcclxuaW1wb3J0IHtDYXRlZ29yaWVzTWFuYWdlcn0gZnJvbSAnLi4vaGVscGVycy9pbmRleCc7XHJcbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2V7XHJcblx0cHJpdmF0ZSBfY2F0ZWdvcmllc1VybDogc3RyaW5nO1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkQ2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfY2F0ZWdvcnk6IGFueTtcclxuXHRwcml2YXRlIF9jYXRlZ29yaWVzTWFuYWdlcjogQ2F0ZWdvcmllc01hbmFnZXIgPSBuZXcgQ2F0ZWdvcmllc01hbmFnZXIoKTtcclxuXHRjYXRlZ29yaWVzQ2hhbmdlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe1xyXG5cdFx0Ly9nZXRzIHVybCBmb3IgZ2V0dGluZyBsaXN0IG9mIGNhdGVnb3JpZXNcclxuXHRcdHRoaXMuX2NhdGVnb3JpZXNVcmwgPSBVcmxSZXNvbHZlci5nZXRDYXRlZ29yaWVzVXJsKCk7XHJcblx0fVxyXG5cclxuXHQvL0dldHMgY2F0ZWdvcmllcyBmcm9tIHNlcnZlclxyXG5cdGdldENhdGVnb3JpZXMoKTogT2JzZXJ2YWJsZTxDYXRlZ29yeVtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fY2F0ZWdvcmllc1VybClcclxuXHRcdFx0Lm1hcChyZXMgPT4ge1xyXG5cdFx0XHRcdGxldCBpdGVtcyA9IHJlcy5qc29uKCk7XHJcblxyXG5cdFx0XHRcdC8vIGNyZWF0ZXMgYXJyYXkgb2YgQ2F0ZWdvcnkgaW5zdGFuY2VzXHJcblx0XHRcdFx0bGV0IGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSB0aGlzLl9jYXRlZ29yaWVzTWFuYWdlci5jcmVhdGVDYXRlZ29yaWVzTGlzdChpdGVtcyk7XHJcblxyXG5cdFx0XHRcdC8vc2VuZHMgY2F0ZWdvcmllcyBpdGVtcyBmb3Igc3Vic2NyaWJlcnNcclxuXHRcdFx0XHR0aGlzLmNhdGVnb3JpZXNDaGFuZ2VzLmVtaXQoY2F0ZWdvcmllcyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBjYXRlZ29yaWVzO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vQ3JlYXRlcyBuZXcgY2F0ZWdvcnlcclxuXHRjcmVhdGVDYXRlZ29yeShjYXRlZ29yeTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjYXRlZ29yeSk7XHJcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHBcclxuXHRcdFx0LnBvc3QodGhpcy5fY2F0ZWdvcmllc1VybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG5cdFx0XHQubWFwKHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzLmpzb24oKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL0VkaXRzIGNhdGVnb3J5XHJcblx0ZWRpdENhdGVnb3J5KGNhdGVnb3J5SXRlbTogYW55KSB7XHJcblx0XHRsZXQgY2F0ZWdvcnkgPSB7XHJcblx0XHRcdGNhdGVnb3J5OiBjYXRlZ29yeUl0ZW0uY2F0ZWdvcnlcclxuXHRcdH07XHJcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnkpO1xyXG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuXHRcdGxldCB1cmwgPSB0aGlzLl9jYXRlZ29yaWVzVXJsICsgY2F0ZWdvcnlJdGVtLl9pZDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cFxyXG5cdFx0XHQucHV0KHVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG5cdFx0XHQubWFwKHJlcyA9PiB7XHJcblx0XHRcdFx0cmVzLmpzb24oKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL0RlbGV0ZXMgY2F0ZWdvcnlcclxuXHRkZWxldGVDYXRlZ29yeShjYXRlZ29yeUlkKTogT2JzZXJ2YWJsZTxhbnk+ICB7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cFxyXG5cdFx0XHQuZGVsZXRlKHRoaXMuX2NhdGVnb3JpZXNVcmwgKyBjYXRlZ29yeUlkKVxyXG5cdFx0XHQubWFwKHJlcyA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly9TYXZlcyBzZWxlY3RlZCBjYXRlZ29yeSB0byBDYXRlZ29yaWVzU2VydmljZVxyXG5cdHNhdmVTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5OiBhbnkpIHtcclxuXHRcdHRoaXMuX2NhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcblx0fVxyXG5cclxuXHQvL0dldHMgc2F2ZWQgc2VsZWN0ZWQgY2F0ZWdvcnkgZnJvbSBDYXRlZ29yaWVzU2VydmljZVxyXG5cdGdldFNlbGVjdGVkQ2F0ZWdvcnkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY2F0ZWdvcnk7XHJcblx0fVxyXG5cclxuXHQvL1NlbmRzIG5ldyBjYXRlZ29yaWVzIGZvciBzdWJzY3JpYmVyc1xyXG5cdHNlbmRDYXRlZ29yaWVzQ2hhbmdlcyhjYXRlZ29yaWVzKSB7XHJcblx0XHR0aGlzLmNhdGVnb3JpZXNDaGFuZ2VzLmVtaXQoY2F0ZWdvcmllcyk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
