### TypeScript Generics and Type Safety Notes

---

### 1. Generics Overview
Generics allow you to create reusable components that work with a variety of data types. They maintain **type safety** while avoiding the use of the `any` type. Generics help ensure consistency and flexibility.

**Why Use Generics?**  
- Provides type safety and flexibility without compromising code readability.
- Avoids using `any`, which can lead to errors.

### Generic Functions
Generics in functions let you define the type dynamically when calling the function.

```typescript
function displayValue<T>(value: T): void {
  console.log(value);
  console.log(typeof value);
}
```

- **Alternate Ways**:
  1. Use unions (`a: string | number | boolean`), but it limits flexibility and requires repetitive checks.
  2. Use `any`, but it removes type safety completely.

### Generic Interfaces
Use generics in interfaces to allow flexibility in defining certain property types.

```typescript
interface User<T> {
  name: string;
  age: number;
  key: T;
}
```

- **Example**:
  ```typescript
  const user1: User<string> = { name: "Alice", age: 30, key: "123A" };
  const user2: User<number> = { name: "Bob", age: 25, key: 456 };
  ```

### Generic Classes
Generics in classes let you create reusable and type-safe structures that adapt to different types.

```typescript
class Bottle<T> {
  constructor(public content: T) {}
}
```

- **Example**:
  ```typescript
  const bottle1 = new Bottle<string>("Water");
  const bottle2 = new Bottle<number>(100);
  ```

### Type Assertion and Type Casting

#### 1. Type Assertion
This is used to override TypeScript’s inferred type with a specific type.

```typescript
let value: any = "Hello World";
console.log((value as string).toUpperCase());
```

- **Why Not Use `any`?**  
  Type assertion offers type safety and avoids unpredictable runtime errors.

#### 2. Type Casting
When converting one type to another explicitly, TypeScript allows for type conversions with type checks.

- **Example**:
  ```typescript
  let str = "123";
  let num = Number(str); // Converts string to number
  console.log(num); // Output: 123
  ```

#### 3. Non-Null Assertion Operator (`!`)
This tells TypeScript that a variable is **guaranteed not to be null** at a specific point.

```typescript
let value: string | null = "Hello";
console.log(value!.toUpperCase()); // Non-null assertion
```

### Type Guards

#### 1. Using `typeof` for Primitive Type Checks
It helps in type narrowing when handling union types.

```typescript
function checkType(value: number | string): void {
  if (typeof value === "number") {
    console.log(value.toFixed(2)); // Number-specific method
  } else {
    console.log(value.toUpperCase()); // String-specific method
  }
}
```

- **Why Use This?**  
  Provides **type safety** by narrowing down types, avoiding invalid operations.

#### 2. Using `instanceof` for Class Type Checks
It helps in narrowing down to a specific class within union types.

```typescript
class Car {
  switchOff() {
    console.log("Car is off");
  }
}

class Remote {
  switchOff() {
    console.log("TV is off");
  }
}

function switchOffDevice(device: Car | Remote) {
  if (device instanceof Car) {
    device.switchOff();
  } else {
    device.switchOff();
  }
}
```

- **Why Use This?**  
  Ensures **correct method calls** based on class type, avoiding errors due to incorrect method access.

### TypeScript Utility Types

#### 1. `Partial`
Makes all properties in a type optional.

```typescript
interface UserProfile {
  name: string;
  age: number;
}

const user: Partial<UserProfile> = { name: "Alice" };
```

#### 2. `Required`
Makes all properties in a type mandatory.

```typescript
interface UserProfile {
  name?: string;
  age?: number;
}

const user: Required<UserProfile> = { name: "Alice", age: 30 };
```

#### 3. `Readonly`
Makes all properties in a type read-only.

```typescript
interface UserProfile {
  name: string;
  age: number;
}

const user: Readonly<UserProfile> = { name: "Alice", age: 30 };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```

---

### Key Points:

1. **Avoid using `any`**: Use generics for flexibility with type safety.
2. **Use generics to enhance reusability** without compromising type consistency.
3. **Use type assertion** (`as`) and **non-null assertion** (`!`) when you are certain about a variable’s type at runtime.
4. **Type guards** (`typeof`, `instanceof`) allow precise narrowing down of types in unions, avoiding invalid operations.
5. **Utility types** such as `Partial`, `Required`, and `Readonly` help in creating more descriptive and maintainable types.