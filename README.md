# ObservableService

An abstract TypeScript/JavaScript class which acts as an abstraction layer between  
the class that creates an observable and the class that subscribes to that observable.  
That way those 2 classes don't have to know about each other.  

It provides the property `.observable`, which is intended to be accessed in the class  
that subscribes to it.

To use:  create a subclass of this, call super() in the constructor, and pass into it a  
function that returns an observable (preferably an imported function or class method),  
and use the subclass inside another class, which then calls `.subscribe()` on  
the observable.

## Example
```
// Create a subclass...
export class UsersObservableService extends ObservableService {

    constructor(
        // an object with method that returns observable:
        userQueryService: UserQueryService,
    ) {
        // pass the method to ObservableService constructor:
        super(userQueryService.getUsersObservable);
    }

}

// Now this class calls .subscribe() to access the data...
export class UsersSubscriptionService {

    users: User[];
    subscription: Subscription;

    constructor(
        // inject the subclass of ObservableService:
        protected _usersObservableSvc: UsersObservableService
    ) {
        this.__set_users_subscription();
    }

    forceRefresh(){
        // This forces the observable to reset itself next time it's accessed:
        this._usersObservableSvc.empty();
        this.__set_users_subscription();
    }

    private __set_users_subscription(){
        this.subscription = this._usersObservableSvc.observable.subscribe(
            (users) => this.users = users
        );
    }

}
```

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/observable-service

## Loading

    // if using TypeScript:
    import { ObservableService } from '@writetome51/observable-service';
    // if using ES5 JavaScript:
    var ObservableService = 
            require('@writetome51/observable-service').ObservableService;
    

## Constructor
```
constructor(protected _functionThatReturnsObservable: Function)
```

## Properties
```
public observable : Observable  (read-only)
    // Automatically assigns itself the result of 
    // this._functionThatReturnsObservable().

protected _functionThatReturnsObservable: Function;
    // You probably won't need to access this property, but just in case you
    // want to change its value, it's available.

public className : string (read-only)
    // Not important. Inherited from BaseClass (see Inheritance Chain below).
```

## Methods
```
empty(): void
    // sets this.observable to undefined.  Useful if you have to force-refresh
    // data.  When you access this.observable after calling this.empty(), 
    // this._functionThatReturnsObservable() is called again and this.observable is 
    // assigned the result.
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```


## Inheritance Chain

ObservableService<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)