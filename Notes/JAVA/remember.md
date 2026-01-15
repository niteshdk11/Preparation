# Important Java Concepts and Reminders

## 1. **Float vs. Double**

- In Java, a **float** is a 32-bit (4-byte) data type, while a **double** is a 64-bit (8-byte) data type.
- By default, Java assumes decimal numbers are of type `double`. Therefore, you must append an `f` or `F` when declaring a `float` to explicitly specify its type.
  
  ```java
  float marks = 99.99f; // 'f' is necessary to indicate a float
  ```

## 2. **Character to Number Conversion**

- Characters can be automatically converted to their **ASCII** values. For example:
  - `'a'` is 97, `'b'` is 98, and so on.
  - `'A'` is 65, `'B'` is 66, and so on.
  
  ```java
  char ch = 'a';
  int asciiValue = ch; // This will give 97
  ```

## 3. **Integer Division in Java**

- When performing operations like `y * (s / k)`:
  - If `s / k` is an integer division (both `s` and `k` are integers), the result will be an integer (decimal values will be discarded).
  
  ```java
  int result = y * (s / k); // If s/k results in a decimal, only the integer part is used.
  ```

## 4. **Reversing a Number (Digit Extraction)**

- To extract the last digit of a number, use the modulus operation `%`:
  - `num % 10` gives the last digit.
- To remove the last digit of a number, divide the number by 10:
  - `num / 10` removes the last digit.
  
  ### Example:
  ```java
  int num = 1234;
  int lastDigit = num % 10;  // Gives 4
  num = num / 10;            // Removes the last digit, now num is 123
  ```


## 6. **Call by Value in Java**

- Java always passes **arguments by value**. This means a copy of the value is passed to the method, and changes made to the parameter inside the method do not affect the original argument.


### **Using `Math.pow()` in Java**

- The `Math.pow(base, exponent)` method is used to raise a number (base) to a specific power (exponent).
- **Return Type**: `Math.pow()` always returns a **double**, regardless of the input types.

### Example:
```java
double result = Math.pow(2, 3); // 2^3 = 8.0

```