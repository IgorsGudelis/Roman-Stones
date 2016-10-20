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
var index_1 = require("../../services/index");
var AppComponent = (function () {
    function AppComponent(_categoriesService) {
        this._categoriesService = _categoriesService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Gets all categories
        this._categoriesService
            .getCategories()
            .subscribe(function (res) { return _this.categories = res; });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shop-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.CategoriesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUdoRCxzQkFBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQU96RDtJQUdDLHNCQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7SUFFN0QsK0JBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkEscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0I7YUFDckIsYUFBYSxFQUFFO2FBQ2YsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBZkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxvQkFBb0I7U0FDakMsQ0FBQzs7b0JBQUE7SUFZRixtQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksb0JBQVksZUFXeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnc2hvcC1hcHAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdGNhdGVnb3JpZXM6IENhdGVnb3J5W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhdGVnb3JpZXNTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKTp2b2lkIHtcclxuXHRcdC8vR2V0cyBhbGwgY2F0ZWdvcmllc1xyXG5cdFx0dGhpcy5fY2F0ZWdvcmllc1NlcnZpY2VcclxuXHRcdFx0LmdldENhdGVnb3JpZXMoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHJlcyA9PnRoaXMuY2F0ZWdvcmllcyA9IHJlcyk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
