/*************
 This class acts as a middleman between the provider of an observable and the subscriber to that
 observable.
 **************/

export class ObservableService {

	constructor(__observableProvider) {
		this.__observableProvider = __observableProvider;
	}


	get __observable() {
		if (!(this.____observable)) {
			if ((typeof this.__observableProvider.getObservable) !== 'function') {
				throw new Error("The property '_observableProvider' must have a method" +
					" 'getObservable()'");
			}
			this.____observable = this.__observableProvider.getObservable();
		}
		return this.____observable;
	}


	subscribe(observer) {
		return this.__observable.subscribe(observer);
	}

}
