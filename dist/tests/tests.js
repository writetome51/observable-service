import { TestObservableService } from './test-observable-service.js';
import { TestObservableProvider } from './test-observable-provider.js';

let observableProvider = new TestObservableProvider();
let observableSvc = new TestObservableService(observableProvider);


let subscription = observableSvc.subscribe({
	next(x) { console.log('got value ' + x); },
	error(err) { console.error('something wrong occurred: ' + err); },
	complete() { console.log('done'); }
});
console.log('just after subscribe');
