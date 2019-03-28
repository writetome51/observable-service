import { Observable } from 'rxjs';


export class TestObservableCreator {


	getObservable() {
		return Observable.create((observer) => {
			observer.next('hello');
		});
	}


}
