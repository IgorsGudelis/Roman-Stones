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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var index_1 = require('./components/index');
var index_2 = require("./services/index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [index_1.AppComponent, index_1.NavComponent],
            providers: [index_2.CategoriesService],
            bootstrap: [index_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUUzQixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLHNCQUEyQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hFLHNCQUFnQyxrQkFBa0IsQ0FBQyxDQUFBO0FBUW5EO0lBQUE7SUFBeUIsQ0FBQztJQU4xQjtRQUFDLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxpQkFBVSxDQUFDO1lBQ2pELFlBQVksRUFBRSxDQUFDLG9CQUFZLEVBQUUsb0JBQVksQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQyx5QkFBaUIsQ0FBQztZQUM5QixTQUFTLEVBQUssQ0FBQyxvQkFBWSxDQUFDO1NBQzVCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3J4anMtZXh0ZW5zaW9ucyc7XHJcblxyXG5pbXBvcnQge05nTW9kdWxlfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSAgICBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50LCBOYXZDb21wb25lbnR9ICAgZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHtDYXRlZ29yaWVzU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvaW5kZXhcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlXSxcclxuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIE5hdkNvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbQ2F0ZWdvcmllc1NlcnZpY2VdLFxyXG5cdGJvb3RzdHJhcDogICAgW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
