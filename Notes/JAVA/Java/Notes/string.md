Here’s the **isothermal note** created in Markdown format, including your comments as notes.

---

# Java String and StringBuilder Operations

## Overview
This document covers various operations and concepts related to `String` and `StringBuilder` in Java, including examples, explanations, and common use cases.

---

### **1. String Basics**
- **Key Properties**: 
  - Strings in Java are **immutable**.
  - They cannot be changed after creation.
- **Examples**:
    ```java
    String str = "abcd";
    String str2 = new String("xyz");
    System.out.println(str);  // Output: abcd
    System.out.println(str2); // Output: xyz
    ```

**Input Methods:**
- `Scanner` class can be used to input strings.
    ```java
    Scanner sc = new Scanner(System.in);
    String word = sc.next();       // Accepts a single word
    String line = sc.nextLine();   // Accepts a full line
    ```

---

### **2. String Length**
- To find the length of a string:
    ```java
    System.out.println(str.length()); // Output: Length of the string
    ```

---

### **3. String Concatenation**
- Strings can be concatenated using the `+` operator:
    ```java
    String combined = str + str2; 
    System.out.println(combined); // Output: abcdxyz
    ```

---

### **4. String Comparison**
- `==` checks reference equality (memory address).
- `equals()` checks value equality.

**Examples:**
```java
String s1 = "Tony";
String s2 = "Tony";
String s3 = new String("Tony");

System.out.println(s1 == s2);       // true (pointing to the same memory)
System.out.println(s1 == s3);       // false (different memory allocation)
System.out.println(s1.equals(s3));  // true (values are the same)
```

> **Note**: This behavior is due to **string interning**.

---

### **5. Substring**
- Extract a part of a string using `substring(startIndex, endIndex)`. 
- `endIndex` is **exclusive**.
    ```java
    System.out.println(str.substring(1, 4)); // Output: bcd
    ```

---

### **6. StringBuilder**
- A mutable alternative to `String`. Useful for frequent modifications to strings.
- Common operations:
    ```java
    StringBuilder sb = new StringBuilder("Hello ");
    sb.append("World"); // Adds "World" to "Hello"
    System.out.println(sb); // Output: Hello World
    ```

> **Note**: Using `StringBuilder` reduces the time complexity for frequent modifications.

---

### **7. Problems and Solutions**

#### **(a) Palindrome Check**
Check if a given string is a palindrome (reads the same backward as forward).  
**Code**:
```java
public static boolean isPalindrome(String str) {
    for (int i = 0; i < str.length() / 2; i++) {
        if (str.charAt(i) != str.charAt(str.length() - i - 1)) {
            return false;
        }
    }
    return true;
}
```

---

#### **(b) Shortest Path**
Given a set of directions (`E`, `W`, `N`, `S`), find the shortest distance to the destination.

**Code**:
```java
public static float getShortestDist(String path) {
    int y = 0, x = 0;
    for (int i = 0; i < path.length(); i++) {
        char dir = path.charAt(i);
        if (dir == 'S') y--;
        else if (dir == 'N') y++;
        else if (dir == 'E') x++;
        else if (dir == 'W') x--;
    }
    return (float) Math.sqrt(x * x + y * y);
}
```
> **Note**: `Math.sqrt()` returns a `double`, so type casting to `float` is required if you need a `float` result.

---

#### **(c) Find the Largest String**
Given an array of strings, find the largest string lexicographically (alphabetical order).  
**Code**:
```java
public static void printLargest(String[] fruits) {
    String largest = fruits[0];
    for (String fruit : fruits) {
        if (largest.compareTo(fruit) < 0) {
            largest = fruit;
        }
    }
    System.out.print(largest);
}
```

---

#### **(d) Capitalize Each Word**
Convert the first letter of each word in a string to uppercase.  
**Code**:
```java
public static String toUpper(String str) {
    StringBuilder sb = new StringBuilder();
    sb.append(Character.toUpperCase(str.charAt(0)));

    for (int i = 1; i < str.length(); i++) {
        if (str.charAt(i) == ' ' && i < str.length() - 1) {
            sb.append(str.charAt(i));
            sb.append(Character.toUpperCase(str.charAt(i + 1)));
            i++;
        } else {
            sb.append(str.charAt(i));
        }
    }
    return sb.toString();
}
```
> **Input**: `"hello world"`  
> **Output**: `"Hello World"`

---

#### **(e) String Compression**
Compress a string by replacing consecutive occurrences of a character with the character followed by its count.  
**Code**:
```java
public static String compress(String str) {
    StringBuilder sb = new StringBuilder();
    int count = 1;

    for (int i = 0; i < str.length(); i++) {
        while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)) {
            count++;
            i++;
        }
        if (count == 1) {
            sb.append(str.charAt(i));
        } else {
            sb.append(str.charAt(i)).append(count);
        }
        count = 1;
    }
    return sb.toString();
}
```
> **Input**: `"aaabbcccdd"`  
> **Output**: `"a3b2c3d2"`

---

### **Time Complexity Notes**
- **Palindrome Check**: \( O(n) \)
- **Shortest Path**: \( O(n) \)
- **Largest String**: \( O(n \times m) \), where \( m \) is the average length of strings
- **String Compression**: \( O(n) \)

---

### **Key Comments**
1. **Strings are immutable**, and operations on them create new strings. Use `StringBuilder` for better performance in mutable operations.
2. **String comparison**:
   - Use `==` for reference comparison.
   - Use `.equals()` for value comparison.
3. **Substring**: Extract parts of a string using `substring(start, end)` where `end` is exclusive.
4. For mutable string operations, **`StringBuilder`** is highly efficient.

--- 

This document is structured to provide a clear and concise reference for common string and `StringBuilder` operations in Java.


### String Interning and StringBuilder Explained  

#### **String Interning in Java**  

**What is String Interning?**  
String interning is a method in Java that stores only one copy of each distinct string value in a pool called the **String Constant Pool**.  

**Key Points**:  
1. Strings declared using **double quotes** (e.g., `String s = "Hello";`) are stored in the string pool.  
   - If the same string is created again, the reference from the pool is reused instead of creating a new object.  
   - Example:  
     ```java
     String s1 = "Tony";
     String s2 = "Tony";
     System.out.println(s1 == s2); // true (both point to the same string in the pool)
     ```
2. Strings created with the `new` keyword are **not automatically added to the pool**.  
   - Example:  
     ```java
     String s3 = new String("Tony");
     System.out.println(s1 == s3); // false (different objects in memory)
     ```
3. To compare **values**, use the `.equals()` method, not `==`, because `==` compares **references**, not content.

**Why Use Interning?**  
- Reduces memory usage by reusing existing strings.  
- Improves performance in string-heavy applications.  

---

#### **Why Use `StringBuilder`?**  

**The Problem with Strings**:  
Strings are **immutable** in Java, meaning every modification (e.g., concatenation) creates a **new string object**. This leads to higher memory consumption and slower performance when performing many string operations.  

Example:  
```java
String s = "Hello";
s = s + " World"; // Creates a new string object "Hello World"
```

**The Solution: `StringBuilder`**  
`StringBuilder` is a **mutable** class that allows modifications without creating new objects.  

**Advantages of `StringBuilder`:**  
1. **Performance**: Modifications are faster (time complexity **O(1)** for append).  
2. **Memory Efficiency**: Reuses the same object.  
3. **Methods**: Includes methods like `.append()`, `.insert()`, `.replace()`, etc., for flexible string manipulation.  

**Example Using `StringBuilder`:**  
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // Modifies the existing object
System.out.println(sb); // Output: Hello World
```

**Use Case in Code**:  
```java
StringBuilder sb = new StringBuilder("Hello ");
for (char c = 'a'; c <= 'z'; c++) {
    sb.append(c); // Efficiently appends characters
}
System.out.println(sb); // Prints: Hello abcdefghijklmnopqrstuvwxyz
```

**Why Not Use Strings Directly Here?**  
Using a `String` in this loop would create **26 new string objects**, as every append operation creates a new string.

---

### Summary  
- **Interning** is used to save memory by reusing string literals.  
- **StringBuilder** is used for efficient string modifications and to avoid the overhead of creating multiple immutable string objects.  
