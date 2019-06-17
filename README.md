# ObservableService

An abstract TypeScript/JavaScript class which acts as an abstraction layer between  
the function that creates an observable and the class that subscribes to that observable.  

<b>NOTE: This version of ObservableService is intended for use with [RxJS](https://rxjs-dev.firebaseapp.com/) 6.1.x   
and up.</b>

To use:  create a subclass of this, call super() in the constructor, and pass into it a  
function that returns an observable (preferably an imported function or class method),  
and use the subclass inside another class, which then calls `.subscribe()` on  
the subclass instance.

## Example
<details>
<summary>view example</summary>

```ts
// Create a subclass...
export class UsersObservableService extends ObservableService {

    constructor(
        // an object with method that returns observable:
        userQueryService
    ) {
        // pass the method to ObservableService constructor:
        super(userQueryService.getUsersObservable);
    }

}


// Now another class calls .subscribe() to access the data...
export class UsersSubscriptionService {

    users: User[];
    subscription: Subscription;

    constructor(
        // inject the subclass of ObservableService:
        usersObservable: UsersObservableService
    ) {
        this.set_users_subscription();
    }
    
    set_users_subscription(){
        // call .subscribe()
        this.subscription = this.usersObservable.subscribe(
            (users) => this.users = users
        );
    }

    forceRefresh(){
        // This forces the observable to reset itself next time it's accessed:
        this.usersObservable.empty();
        this.set_users_subscription();
    }

}
```
</details>
    

## Constructor
```ts
constructor(protected _functionThatReturnsObservable: Function)
```

## Properties
```ts
protected _functionThatReturnsObservable: Function
    // You probably won't need to access this property, but just in case you
    // want to change its value, it's available.

public className : string (read-only)
```

## Methods
<details>
<summary>view methods</summary>

```ts
subscribe(dataHandler: (data?: any) => void): Subscription

empty(): void
    // sets the observable to undefined.  Useful if you have to force-refresh
    // data.  When you call this.subscribe() after calling this.empty(), 
    // this._functionThatReturnsObservable() is called again, the observable is 
    // assigned the result, and then .subscribe() is called on it.
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
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

protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Inheritance Chain

ObservableService<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

`npm i  @writetome51/observable-service`

## Loading
```ts
// if using TypeScript:
import { ObservableService } from '@writetome51/observable-service';
// if using ES5 JavaScript:
var ObservableService = 
    require('@writetome51/observable-service').ObservableService;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
