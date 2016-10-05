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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUdoRCxzQkFBNkMsc0JBQXNCLENBQUMsQ0FBQTtBQU9wRTtJQUdDLHNCQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7SUFHN0QsK0JBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLGtCQUFrQjthQUNyQixhQUFhLEVBQUU7YUFDZixTQUFTLENBQUMsVUFBQSxHQUFHLElBQUcsT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFmRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNqQyxDQUFDOztvQkFBQTtJQVlGLG1CQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxvQkFBWSxlQVd4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Q2F0ZWdvcnl9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7VXJsUmVzb2x2ZXIsIENhdGVnb3JpZXNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdzaG9wLWFwcCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0Y2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY2F0ZWdvcmllc1NlcnZpY2U6IENhdGVnb3JpZXNTZXJ2aWNlKSB7fVxyXG5cclxuXHJcblx0bmdPbkluaXQoKTp2b2lkIHtcclxuXHRcdHRoaXMuX2NhdGVnb3JpZXNTZXJ2aWNlXHJcblx0XHRcdC5nZXRDYXRlZ29yaWVzKClcclxuXHRcdFx0LnN1YnNjcmliZShyZXMgPT50aGlzLmNhdGVnb3JpZXMgPSByZXMpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
