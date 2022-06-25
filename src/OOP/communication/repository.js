"use strict";
exports.__esModule = true;
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
    }
    Repository.prototype.getItemsByIds = function (ids) {
        throw new Error("Implement getItemsByIds for ");
    };
    Repository.prototype.deleteMany = function (params) {
        throw new Error("Please implement deleteMany");
    };
    Repository.prototype.patchItem = function (item, field) {
        throw new Error("Implement patchItem");
    };
    return Repository;
}());
exports.Repository = Repository;
