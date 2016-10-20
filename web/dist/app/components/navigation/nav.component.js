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
var NavComponent = (function () {
    function NavComponent(_categoriesService) {
        var _this = this;
        this._categoriesService = _categoriesService;
        this._categoriesService.categoriesChanges.subscribe(function (result) { return _this.categories = result; }); // subscribes for categories changes
    }
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shop-nav',
            templateUrl: 'nav.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.CategoriesService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFHakQsc0JBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFPdkQ7SUFHQyxzQkFBb0Isa0JBQXFDO1FBSDFELGlCQU1DO1FBSG9CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQSxvQ0FBb0M7SUFDN0gsQ0FBQztJQVZGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7O29CQUFBO0lBT0YsbUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLG9CQUFZLGVBTXhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0NhdGVnb3J5fSBmcm9tIFwiLi4vLi4vbW9kZWxzL2luZGV4XCI7XHJcbmltcG9ydCB7Q2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3Nob3AtbmF2JyxcclxuXHR0ZW1wbGF0ZVVybDogJ25hdi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XHJcblx0Y2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY2F0ZWdvcmllc1NlcnZpY2U6IENhdGVnb3JpZXNTZXJ2aWNlKXtcclxuXHRcdHRoaXMuX2NhdGVnb3JpZXNTZXJ2aWNlLmNhdGVnb3JpZXNDaGFuZ2VzLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5jYXRlZ29yaWVzID0gcmVzdWx0KTsvLyBzdWJzY3JpYmVzIGZvciBjYXRlZ29yaWVzIGNoYW5nZXNcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
