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
var HomeComponent = (function () {
    function HomeComponent(_categoriesService) {
        var _this = this;
        this._categoriesService = _categoriesService;
        this._categoriesService.categoriesChanges.subscribe(function (result) { return _this.categories = result; }); // subscribes for categories changes
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.CategoriesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRzFDLHNCQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBTXZEO0lBR0MsdUJBQW9CLGtCQUFxQztRQUgxRCxpQkFPQztRQUpvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUEsb0NBQW9DO0lBQzdILENBQUM7SUFURjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtTQUNsQyxDQUFDOztxQkFBQTtJQVFGLG9CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxxQkFBYSxnQkFPekIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW5kZXhcIjtcclxuaW1wb3J0IHtDYXRlZ29yaWVzU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG5cdGNhdGVnb3JpZXM6IENhdGVnb3J5W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhdGVnb3JpZXNTZXJ2aWNlOiBDYXRlZ29yaWVzU2VydmljZSkge1xyXG5cdFx0dGhpcy5fY2F0ZWdvcmllc1NlcnZpY2UuY2F0ZWdvcmllc0NoYW5nZXMuc3Vic2NyaWJlKHJlc3VsdCA9PiB0aGlzLmNhdGVnb3JpZXMgPSByZXN1bHQpOy8vIHN1YnNjcmliZXMgZm9yIGNhdGVnb3JpZXMgY2hhbmdlc1xyXG5cdH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
