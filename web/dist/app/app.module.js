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
var app_routing_1 = require('./app.routing');
var index_1 = require('./components/index');
var index_2 = require("./services/index");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_1.AppComponent,
                index_1.NavComponent,
                index_1.CarouselComponent,
                index_1.HomeComponent,
                index_1.FooterComponent],
            providers: [index_2.CategoriesService],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            bootstrap: [index_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUUzQixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDRCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4QyxzQkFJMEIsb0JBQW9CLENBQUMsQ0FBQTtBQUMvQyxzQkFBZ0Msa0JBQWtCLENBQUMsQ0FBQTtBQWFuRDtJQUFBO0lBQXlCLENBQUM7SUFYMUI7UUFBQyxlQUFRLENBQUM7WUFDVCxZQUFZLEVBQUU7Z0JBQ2Isb0JBQVk7Z0JBQ1osb0JBQVk7Z0JBQ1oseUJBQWlCO2dCQUNqQixxQkFBYTtnQkFDYix1QkFBZSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLHlCQUFpQixDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxpQkFBVSxFQUFFLHFCQUFPLENBQUM7WUFDMUQsU0FBUyxFQUFFLENBQUMsb0JBQVksQ0FBQztTQUN6QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9yeGpzLWV4dGVuc2lvbnMnO1xyXG5cclxuaW1wb3J0IHtOZ01vZHVsZX0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50LFxyXG5cdFx0TmF2Q29tcG9uZW50LFxyXG5cdFx0Q2Fyb3VzZWxDb21wb25lbnQsXHJcblx0XHRIb21lQ29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50fSAgIGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7Q2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2luZGV4XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXBwQ29tcG9uZW50LFxyXG5cdFx0TmF2Q29tcG9uZW50LFxyXG5cdFx0Q2Fyb3VzZWxDb21wb25lbnQsXHJcblx0XHRIb21lQ29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFtDYXRlZ29yaWVzU2VydmljZV0sXHJcblx0aW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLCByb3V0aW5nXSxcclxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
