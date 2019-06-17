import { Observable, Subscription } from 'rxjs';
import { BaseClass } from '@writetome51/base-class';
import { IEmptyable } from 'emptyable/IEmptyable';


/*************
 This class acts as a middleman between the class that creates an observable and the class
 that subscribes to that observable.  That way those 2 classes don't have to know about each other.
 **************/

export abstract class ObservableService extends BaseClass implements IEmptyable {

	// private  __observable (read-only);
	private ___observable: Observable<any>;


	constructor(
		protected _functionThatReturnsObservable: Function
	) {
		super();
	}


	private get __observable(): Observable<any> {
		if (!(this.___observable)) {
			if ((typeof this._functionThatReturnsObservable) !== 'function') {
				throw new Error('The property \'_functionThatReturnsObservable\' must be set to a function.');
			}
			this.___observable = this._functionThatReturnsObservable();
		}
		return this.___observable;
	}


	subscribe(dataHandler: (data?: any) => void): Subscription {
		return this.__observable.subscribe(dataHandler);
	}


	empty(): void {
		this.___observable = undefined;
	}


}
