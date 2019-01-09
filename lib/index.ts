import { Observable } from 'rxjs/Observable';
import { BaseClass } from '@writetome51/base-class';
import { IEmptyable } from 'emptyable/IEmptyable';


/*************
 This class acts as a middleman between the class that creates an observable and the class
 that subscribes to that observable.  That way those 2 classes don't have to know about each other.
 To use:  create a subclass of this, and pass  _objectWithMethodThatReturnsObservable and the
 nameOfMethodThatReturnsObservable to super() inside the constructor.
 Then use the subclass as an injected service inside the class that subscribes to the observable.
 **************/

export abstract class ObservableService extends BaseClass implements IEmptyable {

	// public observable (read-only);
	private __observable: Observable<any>;


	constructor(
		protected _functionThatReturnsObservable: Function
	) {
		super();
	}


	empty(): void {
		this.__observable = undefined;
	}


	get observable(): Observable<any> {
		if (!(this.__observable)) {
			if ((typeof this._functionThatReturnsObservable) !== 'function') {
				throw new Error('The property \'_functionThatReturnsObservable\' must be set to a function.');
			}
			this.__observable = this._functionThatReturnsObservable();
		}
		return this.__observable;
	}


}
