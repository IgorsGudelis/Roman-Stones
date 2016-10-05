"use strict";
var index_1 = require('../models/index');
var ProductsManager = (function () {
    function ProductsManager() {
    }
    //Creates and return products list
    ProductsManager.prototype.createProductsList = function (items) {
        var productsList = [];
        //Creates instance of Product and adds to array of Products
        items.forEach(function (val, i) {
            var item = new index_1.Product(val);
            productsList.push(item);
        });
        return productsList;
    };
    return ProductsManager;
}());
exports.ProductsManager = ProductsManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvcHJvZHVjdHMtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQXNCLGlCQUFpQixDQUFDLENBQUE7QUFFeEM7SUFDQztJQUFlLENBQUM7SUFFaEIsa0NBQWtDO0lBQ2xDLDRDQUFrQixHQUFsQixVQUFtQixLQUFLO1FBQ3ZCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV0QiwyREFBMkQ7UUFDM0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxHQUFHLElBQUksZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3JCLENBQUM7SUFDRixzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksdUJBQWUsa0JBZ0IzQixDQUFBIiwiZmlsZSI6ImhlbHBlcnMvcHJvZHVjdHMtbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c01hbmFnZXIge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Ly9DcmVhdGVzIGFuZCByZXR1cm4gcHJvZHVjdHMgbGlzdFxyXG5cdGNyZWF0ZVByb2R1Y3RzTGlzdChpdGVtcyk6IFByb2R1Y3RbXSB7XHJcblx0XHRsZXQgcHJvZHVjdHNMaXN0ID0gW107XHJcblxyXG5cdFx0Ly9DcmVhdGVzIGluc3RhbmNlIG9mIFByb2R1Y3QgYW5kIGFkZHMgdG8gYXJyYXkgb2YgUHJvZHVjdHNcclxuXHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24odmFsLCBpKSB7XHJcblx0XHRcdGxldCBpdGVtID0gbmV3IFByb2R1Y3QodmFsKTtcclxuXHJcblx0XHRcdHByb2R1Y3RzTGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHByb2R1Y3RzTGlzdDtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
