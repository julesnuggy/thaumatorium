"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
var uuid_1 = require("uuid");
var db_1 = require("../db");
var ProductsRepository = /** @class */ (function () {
    function ProductsRepository() {
        this.getProducts = function () {
            db_1.sql.query('SELECT * FROM products', function (err, res) {
                if (err) {
                    console.log("ERROR", err);
                    return;
                }
                console.log("SUCCESS", res);
                return res;
            });
        };
        this.createProduct = function (params) {
            var id = uuid_1.v4();
            db_1.sql.query('INSERT INTO products SET id = ?, ?', [id, params], function (err, res) {
                if (err) {
                    console.log("ERROR", err);
                    return;
                }
                console.log("SUCCESS", res);
                return res;
            });
        };
    }
    return ProductsRepository;
}());
exports.ProductsRepository = ProductsRepository;
