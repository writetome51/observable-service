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
 To use:  create a subclass of this, assign this._functionThatReturnsObservable
 a function (it can be a method from another class that creates the actual observable),
 and use the subclass as an injected service inside another class.
 **************/
var ObservableService = /** @class */ (function (_super) {
    __extends(ObservableService, _super);
    function ObservableService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObservableService.prototype.empty = function () {
        this._observable = undefined;
    };
    Object.defineProperty(ObservableService.prototype, "observable", {
        get: function () {
            if (!(this._observable))
                this._observable = this._return_observable();
            return this._observable;
        },
        enumerable: true,
        configurable: true
    });
    ObservableService.prototype._return_observable = function () {
        if (!(this._functionThatReturnsObservable)) {
            throw new Error('The property \'_functionThatReturnsObservable\' must be set.');
        }
        return this._functionThatReturnsObservable();
    };
    return ObservableService;
}(base_class_1.BaseClass));
exports.ObservableService = ObservableService;
