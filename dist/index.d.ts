import { Subscribable, Unsubscribable } from 'rxjs';


/*************
 This class acts as a middleman between the provider of an observable and the subscriber to that
 observable.
 **************/

export declare abstract class ObservableService<T> {

	private __observableProvider;
	private ____observable;


	constructor(__observableProvider: { getObservable: () => Subscribable<T>; });


	private get __observable();


	subscribe(observer: any): Unsubscribable;

}
