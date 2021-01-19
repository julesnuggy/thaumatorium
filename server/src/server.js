"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var db_1 = require("./db");
var port = process.env.PORT || 3001;
db_1.sql.connect(function (error) {
    if (error)
        throw error;
    console.log("Successfully connected to the database.");
});
app_1.app.listen(port, function () { return console.log("Listening on port " + port); });
