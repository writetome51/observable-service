import pkg from 'rxjs';
const {Observable} = pkg;

export class TestObservableProvider {

    getObservable() {
    	return new Observable(subscriber => {
			subscriber.next(1);
			subscriber.next(2);
			subscriber.next(3);
			setTimeout(() => {
				subscriber.next(4);
				subscriber.complete();
			}, 1000);
		});
    }
}
