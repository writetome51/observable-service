# ObservableService\<T\>

An abstract TypeScript/JavaScript class which acts as an abstraction layer between  
the provider of an observable and the class that subscribes to that observable.  

<b>NOTE: This version of ObservableService is intended for use with [RxJS](https://rxjs-dev.firebaseapp.com/) 6.1.x   
and up.</b>

## Example
<details>
<summary>view example</summary>

```ts
// Create a subclass...
export class UsersObservableService extends ObservableService<Users> {

    constructor(
        // an object with method that returns observable:
        userQueryService: { getObservable: () => Subscribable<Users> }
    ) {
        super(userQueryService);
    }

}

// Now another class calls .subscribe() to access the data...
export class UsersSubscriptionService {

    users: User[];
    subscription: Subscription;

    constructor(usersObservable: UsersObservableService) {
        this.subscription = usersObservable.subscribe(
            (users) => this.users = users
        );
    }
 
}
```
</details>
    

## Constructor
```ts
constructor(
    __observableProvider: { getObservable: () => Subscribable<T> }
)
```

## Methods

```ts
subscribe(observer): Unsubscribable
```


## Installation

`npm i  @writetome51/observable-service`

## Loading
```js
import { ObservableService } from '@writetome51/observable-service';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
