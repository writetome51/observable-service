# ObservableService

This class acts as an abstraction layer between the class that creates an observable and  
the class that subscribes to that observable.  That way those 2 classes don't have  
to know about each other.  

It provides the property `.observable`, which is intended to be accessed in the class  
that subscribes to it.

To use:  create a subclass of this, assign `this._functionThatReturnsObservable` a  
function (preferably a method from another class that returns the observable), and use the  
subclass as an injected service inside another class, which then calls `.subscribe()` on  
the observable.

## Example
```
export class UsersObservableService extends ObservableService {

    constructor(
        _userQueryService: UserQueryService
    ) {
        super();
        
        // Assign a function that returns an observable:
        this._functionThatReturnsObservable = _userQueryService.getUsersObservable;
    }

}

// Now this class calls .subscribe() to access the data...
export class UsersService {

    users: User[];
    subscription: Subscription;

    constructor(
        // inject the service:
        protected _usersObservableSvc: UsersObservableService
    ) {
        this.subscription = this._usersObservableSvc.observable.subscribe(
            (users) => this.users = users
        );
    }

}

// And that's it.
```