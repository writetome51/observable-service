"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_class_1 = require("@writetome51/base-class");
/*************
 This class acts as a middleman between the class that creates an observable and the class
 that subscribes to that observable.  That way those 2 classes don't have to know about each other.
 **************/
var ObservableService = /** @class */ (function (_super) {
    __extends(ObservableService, _super);
    function ObservableService(_functionThatReturnsObservable) {
        var _this = _super.call(this) || this;
        _this._functionThatReturnsObservable = _functionThatReturnsObservable;
        return _this;
    }
    ObservableService.prototype.empty = function () {
        this.__observable = undefined;
    };
    Object.defineProperty(ObservableService.prototype, "observable", {
        get: function () {
            if (!(this.__observable)) {
                if ((typeof this._functionThatReturnsObservable) !== 'function') {
                    throw new Error('The property \'_functionThatReturnsObservable\' must be set to a function.');
                }
                this.__observable = this._functionThatReturnsObservable();
            }
            return this.__observable;
        },
        enumerable: true,
        configurable: true
    });
    return ObservableService;
}(base_class_1.BaseClass));
exports.ObservableService = ObservableService;
