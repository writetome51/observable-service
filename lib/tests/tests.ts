import { TestObservableService } from './test-observable-service';
import { TestObservableCreator } from './test-observable-creator';


let observableCreator = new TestObservableCreator();
let observableSvc = new TestObservableService(observableCreator);

let subscription = observableSvc.subscribe((data) => console.log(data));
// prints 'hello'

observableSvc.empty();


subscription = observableSvc.subscribe((data) => console.log(data));
// prints 'hello'

subscription.unsubscribe();

// @ts-ignore
console.log(subscription.isStopped);
// prints 'true'
