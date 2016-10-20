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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUUzQixxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsaUNBQTRCLDJCQUEyQixDQUFDLENBQUE7QUFDeEQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDRCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4QyxzQkFDeUMsb0JBQW9CLENBQUMsQ0FBQTtBQUM5RCxzQkFBZ0Msa0JBQWtCLENBQUMsQ0FBQTtBQVluRDtJQUFBO0lBQXlCLENBQUM7SUFWMUI7UUFBQyxlQUFRLENBQUM7WUFDVCxZQUFZLEVBQUU7Z0JBQ2Isb0JBQVk7Z0JBQ1osb0JBQVk7Z0JBQ1oscUJBQWE7Z0JBQ2IsdUJBQWUsQ0FBQztZQUNqQixTQUFTLEVBQUUsQ0FBQyx5QkFBaUIsQ0FBQztZQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsRUFBRSxxQkFBTyxDQUFDO1lBQzFELFNBQVMsRUFBSyxDQUFDLG9CQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vcnhqcy1leHRlbnNpb25zJztcclxuXHJcbmltcG9ydCB7TmdNb2R1bGV9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9ICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudCwgTmF2Q29tcG9uZW50LFxyXG5cdFx0SG9tZUNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50fSAgIGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7Q2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2luZGV4XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXBwQ29tcG9uZW50LFxyXG5cdFx0TmF2Q29tcG9uZW50LFxyXG5cdFx0SG9tZUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbQ2F0ZWdvcmllc1NlcnZpY2VdLFxyXG5cdGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cE1vZHVsZSwgcm91dGluZ10sXHJcblx0Ym9vdHN0cmFwOiAgICBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
