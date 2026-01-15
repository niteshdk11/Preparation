# TypeScript Function Concepts

## 1. Functions
Functions are blocks of reusable code that can be called with specific parameters. They can take different types and numbers of arguments, and return values.

### Example:
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

---

## 2. Function Types
When defining a function type, you can specify the types of parameters and the return type.

### Example:
```typescript
function abcd(name: string, cb: (a: string) => void): void {
    cb("hello");
}

// Usage
abcd("example", (val) => {
    console.log(val); // Logs: hello
});
```

### Note:
You cannot use `function` directly to define the type of a function parameter. Instead, specify the types for the parameters and return values.

---

## 3. Optional Parameters
Optional parameters can be defined using the `?` syntax. If a parameter is optional, it can be omitted when the function is called.

### Example:
```typescript
function abcd2(name: string, age: number, gender?: string): void {}

// Usage
abcd2("nitessh", 12); // No error, gender is optional
```

---

## 4. Default Parameters
Default parameters allow you to initialize parameters with default values if no argument is provided.

### Example:
```typescript
function abcd3(name: string, age: number, gender: string = "male"): void {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

// Usage
abcd3("nitessh", 12); // Logs: Name: nitessh, Age: 12, Gender: male
```

### Note:
You can combine optional and default parameters, but you cannot specify both for the same parameter in a way that conflicts.

### Example:
```typescript
function abcd4(name: string, age: number, gender?: string = "male"): void {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

// Usage
abcd4("nitessh", 12); // Logs: Name: nitessh, Age: 12, Gender: male
abcd4("nitessh", 12, "female"); // Logs: Name: nitessh, Age: 12, Gender: female
```

---

## 5. Rest Parameters
Rest parameters allow you to represent an indefinite number of arguments as an array. You define rest parameters using the `...` syntax.

### Example:
```typescript
function abcd4(...names: string[]): void {
    console.log(names);
}

// Usage
abcd4("Alice", "Bob", "Charlie"); // Logs: ["Alice", "Bob", "Charlie"]
```

---

## 6. Function Overloads
Function overloads allow you to define multiple signatures for a single function. This helps in providing different parameter combinations.

### Signature Example:
```typescript
function abcd(a: string): void;
function abcd(a: string, b: number): void;

// Implementation
function abcd(a: any, b?: any): void {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    } else if (typeof a === "string" && typeof b === "number") {
        console.log("hey with number:", b);
    } else {
        throw new Error("something is wrong");
    }
}

// Example usages
abcd("hey"); // Logs: hey
abcd("hey", 123); // Logs: hey with number: 123
abcd("hey", "test"); // Throws error
```

---