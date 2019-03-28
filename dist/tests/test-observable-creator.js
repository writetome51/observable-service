"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var TestObservableCreator = /** @class */ (function () {
    function TestObservableCreator() {
    }
    TestObservableCreator.prototype.getObservable = function () {
        return rxjs_1.Observable.create(function (observer) {
            observer.next('hello');
        });
    };
    return TestObservableCreator;
}());
exports.TestObservableCreator = TestObservableCreator;
