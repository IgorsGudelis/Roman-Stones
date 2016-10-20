"use strict";
var Category = (function () {
    function Category(obj) {
        this._id = obj ? obj && obj._id : 0;
        this.category = obj ? obj && obj.category : '';
        this.products = obj ? obj && obj.products : [];
    }
    return Category;
}());
exports.Category = Category;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFLQyxrQkFBWSxHQUFTO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxnQkFBUSxXQVVwQixDQUFBIiwiZmlsZSI6Im1vZGVscy9jYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRjYXRlZ29yeTogc3RyaW5nO1xyXG5cdHByb2R1Y3RzOiBQcm9kdWN0W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xyXG5cdFx0dGhpcy5faWQgPSBvYmogPyBvYmomJm9iai5faWQgOiAwO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG9iaiA/IG9iaiYmb2JqLmNhdGVnb3J5IDogJyc7XHJcblx0XHR0aGlzLnByb2R1Y3RzID0gb2JqID8gb2JqJiZvYmoucHJvZHVjdHMgOiBbXTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
