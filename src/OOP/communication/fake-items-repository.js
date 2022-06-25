"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.FakeItemsRepository = void 0;
var repository_1 = require("./repository");
var FakeItemsRepository = /** @class */ (function (_super) {
    __extends(FakeItemsRepository, _super);
    function FakeItemsRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [
            { id: 1, name: "Phone", price: 1000 },
            { id: 2, name: "MacBook", price: 3000 },
            { id: 3, name: "BMW", price: 10000 },
            { id: 4, name: "PC", price: 2500 },
        ];
        return _this;
    }
    FakeItemsRepository.prototype.getItemById = function (id, query) {
        return this.items.find(function (val) { return val.id === id; });
    };
    FakeItemsRepository.prototype.createItem = function (item, options, projectId) {
        var items = this.items;
        var lastItem = this.items[this.items.length - 1];
        var createdItem = __assign(__assign({}, item), { id: (lastItem === null || lastItem === void 0 ? void 0 : lastItem.id) || 0 + 1 });
        items.push(createdItem);
        this.items = items;
        return createdItem;
    };
    FakeItemsRepository.prototype.updateItem = function (item, query) {
        var index = this.items.findIndex(function (val) { return val.id === item.id; });
        if (index < 0) {
            throw new Error("Item not found");
        }
        this.items[index] = item;
        return item;
    };
    FakeItemsRepository.prototype.deleteItem = function (id) {
        var item = this.items.find(function (val) { return val.id == id; });
        if (item) {
            var items = this.items.filter(function (val) { return val.id !== id; });
            this.items = items;
            return true;
        }
        else
            return false;
    };
    FakeItemsRepository.prototype.getItems = function (params) {
        return this.items;
    };
    Object.defineProperty(FakeItemsRepository.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
        },
        enumerable: false,
        configurable: true
    });
    return FakeItemsRepository;
}(repository_1.Repository));
exports.FakeItemsRepository = FakeItemsRepository;
