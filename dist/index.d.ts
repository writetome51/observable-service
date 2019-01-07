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

export declare abstract class ObservableService extends BaseClass implements IEmptyable {

	readonly observable: Observable<any>;
	protected _functionThatReturnsObservable: Function;
	private _observable;


	empty(): void;


	private _return_observable;
}
