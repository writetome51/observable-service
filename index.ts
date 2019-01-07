import { Observable } from 'rxjs/Observable';
import { BaseClass } from '@writetome51/base-class';
import { IEmptyable } from 'emptyable/IEmptyable';


/*************
 This class acts as a middleman between the class that creates an observable and the class
 that subscribes to that observable.  That way those 2 classes don't have to know about each other.
 To use:  create a subclass of this, assign this._functionThatReturnsObservable
 a function (it can be a method from another class that creates the actual observable),
 and use the subclass as an injected service inside another class.
 **************/

export abstract class ObservableService extends BaseClass implements IEmptyable {

	// public observable (read-only);
	protected _functionThatReturnsObservable: Function; // Must be set before data can be returned.
	private _observable: Observable<any>;


	empty(): void {
		this._observable = undefined;
	}


	get observable(): Observable<any> {
		if (!(this._observable)) this._observable = this._return_observable();
		return this._observable;
	}


	private _return_observable() {
		if (!(this._functionThatReturnsObservable)) {
			throw new Error('The property \'_functionThatReturnsObservable\' must be set.');
		}
		return this._functionThatReturnsObservable();
	}


}
