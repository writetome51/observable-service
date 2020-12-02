import { Subscribable, Unsubscribable } from 'rxjs';


/*************
 This class acts as a middleman between the provider of an observable and the subscriber to that
 observable.
 **************/

export abstract class ObservableService<T> {

	private ____observable: Subscribable<T>;


	constructor(
		private __observableProvider: { getObservable: () => Subscribable<T> }
	) {
	}


	private get __observable() {
		if (!(this.____observable)) {
			if ((typeof this.__observableProvider.getObservable) !== 'function') {
				throw new Error("The property '_observableProvider' must have a method" +
					" 'getObservable()'");
			}
			this.____observable = this.__observableProvider.getObservable();
		}
		return this.____observable;
	}


	subscribe(observer): Unsubscribable {
		return this.__observable.subscribe(observer);
	}

}
