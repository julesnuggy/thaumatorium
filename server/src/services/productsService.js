"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
var productsRepository_1 = require("../repositories/productsRepository");
var ProductsService = /** @class */ (function () {
    function ProductsService() {
        var _this = this;
        this.service = new productsRepository_1.ProductsRepository();
        this.getProducts = function () {
            return _this.service.getProducts();
        };
        this.createProduct = function (params) {
            return _this.service.createProduct(params);
        };
    }
    return ProductsService;
}());
exports.ProductsService = ProductsService;
