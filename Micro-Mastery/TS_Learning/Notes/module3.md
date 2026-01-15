---

## **Classes and Objects**

### 1. **Class Definition**
A **class** is a blueprint for creating objects (instances). It defines properties and methods that the objects created from the class will have.

**Example:**
```typescript
class User {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let user1 = new User("John", 30);
```

### 2. **Constructors**
A constructor is a special method used for creating and initializing an object. It is called automatically when an object is created.

**Example 1:**
```typescript
class Dog {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}
```


### 2. **Access Modifiers: Public, Protected, Private**
Access modifiers define the visibility and accessibility of class properties and methods. Let’s explore each one with examples and differences.

---

### **1. Public**
- **Visibility**: Accessible from anywhere.
- **Default** modifier if none is specified.

**Example:**
```typescript
class Vehicle {
    public model: string; // Public property

    constructor(model: string) {
        this.model = model;
    }

    public getModel(): string { // Public method
        return this.model;
    }
}

let car = new Vehicle("Tesla");
console.log(car.model); // Accessible outside the class: Output - "Tesla"
console.log(car.getModel()); // Accessible: Output - "Tesla"
```

### **2. Private**
- **Visibility**: Accessible only within the defining class.
- **Not accessible outside or in derived classes.**

**Example:**
```typescript
class BankAccount {
    private balance: number; // Private property

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    private updateBalance(amount: number): void { // Private method
        this.balance += amount;
    }

    deposit(amount: number) {
        this.updateBalance(amount); // Accessible within the class
    }

    getBalance(): number {
        return this.balance; // Accessible within the class
    }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Accessible through public method: Output - 1500
// console.log(account.balance); // Error: 'balance' is private and only accessible within the class
// account.updateBalance(200); // Error: 'updateBalance' is private and not accessible
```

### **3. Protected**
- **Visibility**: Accessible within the class and its derived classes.
- **Not accessible from outside the class or from an instance of the derived class.**

**Example:**
```typescript
class Employee {
    protected salary: number; // Protected property

    constructor(salary: number) {
        this.salary = salary;
    }

    protected showSalary(): void { // Protected method
        console.log(`Salary: ${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(salary: number, private department: string) {
        super(salary);
    }

    displayInfo() {
        console.log(`Department: ${this.department}`);
        this.showSalary(); // Accessible in derived class
    }
}

let manager = new Manager(5000, "Sales");
manager.displayInfo(); // Accessible through a method in the derived class
// manager.showSalary(); // Error: 'showSalary' is protected and only accessible within the class or its subclasses
```

### **Difference Between Public, Private, and Protected**

| **Modifier**  | **Accessible in Class** | **Accessible in Derived Class** | **Accessible Outside Class** | **Use Case**                                                                 |
|---------------|-------------------------|---------------------------------|------------------------------|-----------------------------------------------------------------------------|
| **Public**    | ✔                       | ✔                               | ✔                            | Use when you want properties/methods to be accessible everywhere.           |
| **Protected** | ✔                       | ✔                               | ❌                            | Use when you want to allow access in the class and subclasses but not outside.|
| **Private**   | ✔                       | ❌                              | ❌                            | Use when you want to hide properties/methods completely from outside access. |



### 3. **Readonly Properties**
Readonly properties cannot be changed after initialization.

**Example:**
```typescript
class Rakesh {
    constructor(public readonly name: string) {}
}

let r1 = new Rakesh("Rakesh");
// r1.name = "Kushwaha"; // Error: Cannot assign to 'name' because it is a read-only property.
```

### 4. **Optional Properties**
Properties can be marked as optional using `?`. 

**Example:**
```typescript
class Tree {
    constructor(public name?: string, public gender?: string) {}
}

let t1 = new Tree();
let t2 = new Tree("Oak", "Male");
```

### 5. **Parameter Properties**
Using access modifiers (like `public` or `private`) directly in constructor parameters to define and initialize class properties.


```typescript
class Dog {
    constructor(public name: string) {}
}
//   OR 
//  to do this  

class DOG{
        public name :string
    constructor( name: string) {
      this.name = name ;
    }
}
//  But this is not called as  Parameter Properties
```

### 6. **Getters and Setters**
- **Getters** provide a way to access the property.
- **Setters** provide a way to change the property while also allowing validation or additional logic.

**Example:**
```typescript
class UK {
    constructor(private _name: string, public age: number) {}
    
    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let uk = new UK("John", 25);
console.log(uk.name); // Getter method
uk.name = "David"; // Setter method
console.log(uk.name);
```

### 7. **Static Members**
Static members belong to the class itself, not to the instance of the class. They are accessed using the class name.

**Example:**
```typescript
class Sherry {
    static version: string = "1.0.0";

    constructor(public versionIns: string) {
        this.versionIns = Sherry.version;
    }
}

console.log(Sherry.version); // Access static property directly using class name
```

### 8. **Abstract Classes and Methods**
Abstract classes are base classes that cannot be instantiated. They are meant to be inherited. Abstract methods must be implemented by derived classes.

**Example:**
```typescript
abstract class Payment {
    constructor(protected amount: number, protected accountNo: number) {}
    
    abstract isPaymentValid(): boolean;
}

class BankPayment extends Payment {
    isPaymentValid() {
        return this.amount > 0 && this.accountNo > 0;
    }
}

let payment = new BankPayment(100, 123456);
console.log(payment.isPaymentValid()); // Output: true
```

---

## **Classes and Objects Summary**

1. **Class Definition**: Blueprint for creating objects with defined properties and methods.
2. **Constructors**: Special methods for initializing objects automatically during creation.
3. **Access Modifiers**:
   - **Public**: Accessible everywhere.
   - **Private**: Accessible only within the class.
   - **Protected**: Accessible within the class and its subclasses.
4. **Readonly Properties**: Immutable after initialization.
5. **Optional Properties**: Marked with `?`, not mandatory.
6. **Parameter Properties**: Directly define and initialize properties in the constructor.
7. **Getters and Setters**: Control access and validation for properties.
8. **Static Members**: Belong to the class, not the instance.
9. **Abstract Classes**: Cannot be instantiated directly; subclasses must implement abstract methods.

---

