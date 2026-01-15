
E21### Basic Types in TypeScript

#### 1. **Primitive Types (Number, String, Boolean)**
- **Number**: JavaScript ke saare numbers floating point hote hain. TypeScript me `number` type se batate ho.
    ```typescript
    let age: number = 25;
    ```

- **String**: Yeh text data ke liye hota hai. Double ya single quotes dono kaam karte hain.
    ```typescript
    let name: string = "Nitesh";
    ```

- **Boolean**: True/false value ko represent karta hai.
    ```typescript
    let isActive: boolean = true;
    ```

#### 2. **Arrays**
- Arrays me ek hi type ke elements store kar sakte ho agar specific type define kar diya.
    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- Mixed data types ko array me nahi daal sakte unless `any` use kiya ho.
    ```typescript
    let mixedArr: any[] = [1, 2, "hello", {name: "kushwaha"}];
    ```

#### 3. **Tuples**
- Tuple fixed number of elements ko store karta hai, jisme har element ka type predefined hota hai. Jaise agar pehla element number aur doosra string ho, toh usi sequence me values pass karni padengi.
    ```typescript
    let person: [number, string] = [1, "hello"];
    ```

In short:
* **Array**: A collection of elements of the **same type** and **dynamic size** (can be changed).
* **Tuple**: A fixed-size collection where each element can have a **different type**.

Use **arrays** for homogeneous data and **tuples** for heterogeneous data with a fixed length.


#### 4. **Enums (Enumerations)**
- Enumeration predefined constant values ko represent karta hai. Yeh helpful hota hai jab values fixed ho jaise user roles ya days of the week.
    ```typescript
    enum UserRole {
        ADMIN = 1,
        READ_ONLY = 2,
        AUTHOR = 3
    }
    ```
    `UserRole.ADMIN` ka value hamesha `1` rahega.

#### 5. **Any**
- `Any` type ka matlab hota hai TypeScript ki type-checking temporarily off karna. Yeh tab useful hai jab type fix nahi hai.
    ```typescript
    let a: any;
    a = 12;
    a = "hello";
    ```

#### 6. **Unknown**
- `Unknown` aur `any` me farak yeh hai ki `unknown` ka type pehle check karna padta hai jab use karte ho. Tum use kar to sab kuch sakte ho, par pehle type confirm karo.
    ```typescript
    let b: unknown;
    b = 12;
    b = "hello";

    if (typeof b === 'string') {
        b.endsWith("o");  // works only if it's a string
    }
    ```

#### 7. **Void**
- `Void` type batata hai ki function kuch return nahi kar raha. Mostly functions jo sirf console log ya aise kaam karte hain unka return type `void` hota hai.
    ```typescript
    function logMessage(): void {
        console.log("This function returns nothing");
    }
    ```

#### 8. **Null**
- `Null` type batata hai ki variable me value absent hai. Tum `null` ko doosre types ke sath combine bhi kar sakte ho (unions use karke).
    ```typescript
    let myVar: string | null = null;
    myVar = "hello";
    ```

#### 9. **Undefined**
- `Undefined` ka matlab hota hai variable defined nahi hua ya value assign nahi hui.
    ```typescript
    let someVar: undefined;
    someVar = undefined;
    ```

#### 10. **Never**
- `Never` type batata hai ki yeh function kabhi return nahi karega. Jaise agar function infinite loop me chala gaya ya exception throw kar diya toh baaki code kabhi execute nahi hoga.
    ```typescript
    function throwError(): never {
        throw new Error("This is an error");
    }
    ```

- Yeh type un functions ke liye useful hota hai jo execution ko rok dete hain ya kabhi terminate nahi hote, jaise infinite loops.
    ```typescript
    function infiniteLoop(): never {
        while (true) {
            console.log("Running forever...");
        }
    }
    ```

### Summary
- **Primitive Types**: Basic types jaise `number`, `string`, `boolean` hote hain.
- **Arrays**: Ek hi type ya mixed types store karne ke liye `any` use hota hai.
- **Tuples**: Fixed length aur types ke arrays hote hain.
- **Enums**: Predefined constant values ko store karta hai.
- **Any**: Jab tumhe type-checking off karni ho.
- **Unknown**: Unknown value ko use karne se pehle type check karna padta hai.
- **Void**: Functions jo kuch return nahi karte.
- **Null/Undefined**: Absence of value ko denote karta hai.
- **Never**: Functions jo kabhi terminate nahi hote ya exception throw karte hain. 
