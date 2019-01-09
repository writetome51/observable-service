# ObservableService

An abstract TypeScript/JavaScript class which acts as an abstraction layer between  
the class that creates an observable and the class that subscribes to that observable.  
That way those 2 classes don't have to know about each other.  

It provides the property `.observable`, which is intended to be accessed in the class  
that subscribes to it.

To use:  create a subclass of this, assign `this._functionThatReturnsObservable` a  
function (preferably a method from another class that returns the observable), and use the  
subclass as an injected service inside another class, which then calls `.subscribe()` on  
the observable.

## Example
```
// Create a subclass...
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

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/unsubscribe-on-destroy-component

## Loading

    // if using TypeScript:
    import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
    // if using ES5 JavaScript:
    var  UnsubscribeOnDestroyComponent = 
            require('@writetome51/unsubscribe-on-destroy-component').UnsubscribeOnDestroyComponent;
    

## Properties (ordered by importance)
```
public observable : Observable  (read-only)
    // Automatically assigns itself the result of 
    // this._functionThatReturnsObservable().

protected _functionThatReturnsObservable: Function;
    // Must be set before this.observable can be used.

public className : string (read-only)
    // Not important. Inherited from BaseClass (see Inheritance Chain below).
```

## Methods (ordered by importance)
```
empty(): void
    // sets this.observable to undefined.  Useful if you have to force-refresh
    // data.  Whenever you access this.observable, it automatically
    // reassigns itself the result of this._functionThatReturnsObservable().
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