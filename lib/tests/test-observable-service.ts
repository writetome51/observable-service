import { ObservableService } from '../index';


export class TestObservableService extends ObservableService {

	constructor(
		objectWithMethodThatReturnsObservable: Object,
	) {
		// @ts-ignore
		super(objectWithMethodThatReturnsObservable.getObservable);
	}

}
