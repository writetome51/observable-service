import { Subscription } from 'rxjs';
import { BaseClass } from '@writetome51/base-class';
import { IEmptyable } from 'emptyable/IEmptyable';


/*************
 This class acts as a middleman between the class that creates an observable and the class
 that subscribes to that observable.  That way those 2 classes don't have to know about each other.
 **************/
export declare abstract class ObservableService extends BaseClass implements IEmptyable {

	protected _functionThatReturnsObservable: Function;
	private readonly __observable;
	private ____observable;


	constructor(_functionThatReturnsObservable: Function);


	subscribe(dataHandler: (data?: any) => void): Subscription;


	empty(): void;
}
