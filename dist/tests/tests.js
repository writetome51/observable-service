"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_observable_service_1 = require("./test-observable-service");
var test_observable_creator_1 = require("./test-observable-creator");
var observableCreator = new test_observable_creator_1.TestObservableCreator();
var observableSvc = new test_observable_service_1.TestObservableService(observableCreator);
var subscription = observableSvc.subscribe(function (data) { return console.log(data); });
// prints 'hello'
observableSvc.empty();
subscription = observableSvc.subscribe(function (data) { return console.log(data); });
// prints 'hello'
subscription.unsubscribe();
// @ts-ignore
console.log(subscription.isStopped);
// prints 'true'
