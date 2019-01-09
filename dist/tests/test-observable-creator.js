"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var TestObservableCreator = /** @class */ (function () {
    function TestObservableCreator() {
    }
    TestObservableCreator.prototype.getObservable = function () {
        return Observable_1.Observable.create(function (observer) {
            observer.next('hello');
        });
    };
    return TestObservableCreator;
}());
exports.TestObservableCreator = TestObservableCreator;
