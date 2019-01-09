import { Observable } from 'rxjs/Observable';


export class TestObservableCreator {


	getObservable() {
		return Observable.create((observer) => {
			observer.next('hello');
		});
	}


}
