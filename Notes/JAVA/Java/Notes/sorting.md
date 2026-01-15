### Java Sorting Algorithms Notes

---

#### **1. Bubble Sort**
- **Key Idea**: Compare adjacent elements and swap them if they are out of order.
- **Optimized Version**: Check if no swaps occurred during a pass; if true, break early.
- **Best Case Complexity**: \( O(n) \)
- **Worst Case Complexity**: \( O(n^2) \)

**Method:**
```java
public static void bubbleSort(int arr[]) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

**Optimized Bubble Sort:**
```java
public static void bubbleSortM2(int arr[]) {
    for (int i = 0; i < arr.length - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
}
```

---

#### **2. Selection Sort**
- **Key Idea**: Find the smallest element in the unsorted portion and place it in the sorted portion.
- **Worst Case Complexity**: \( O(n^2) \)

**Method:**
```java
public static int[] selectionSort(int arr[]) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minPos = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[minPos] > arr[j]) {
                minPos = j;
            }
        }
        int temp = arr[minPos];
        arr[minPos] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
```

---

#### **3. Insertion Sort**
- **Key Idea**: Insert elements from the unsorted portion into their correct position in the sorted portion.
- **Worst Case Complexity**: \( O(n^2) \)

**Method:**
```java
public static int[] insertionSort(int arr[]) {
    for (int i = 1; i < arr.length; i++) {
        int curr = arr[i];
        int prev = i - 1;
        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}
```

---

#### **4. In-Built Sort**
- **Key Idea**: Uses Dual-Pivot Quicksort for primitive types and TimSort for objects.
- **Complexity**: \( O(n \log n) \)

**Usage:**
```java
Arrays.sort(arr); // Sort entire array
Arrays.sort(arr, startIndex, endIndex); // Sort a specific portion
```

**Descending Order:**
- Requires converting `int[]` to `Integer[]` since `Collections.reverseOrder()` works only on objects.
```java
Integer[] arr = {4, 9, 2, -2, 17, 5, 8};
Arrays.sort(arr, Collections.reverseOrder());
```

---

#### **5. Counting Sort**
- **Key Idea**: Suitable for small ranges of positive numbers.
- **Constraints**: 
  - Only positive integers.
  - Handles large quantities of numbers within a small range.
- **Complexity**: \( O(n + k) \), where \( k \) is the range of numbers.

**Method:**
```java
public static int[] countingSort(int arr[]) {
    int maxVal = Integer.MIN_VALUE;
    for (int i = 0; i < arr.length; i++) {
        maxVal = Math.max(maxVal, arr[i]);
    }

    int[] count = new int[maxVal + 1];
    for (int i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    int j = 0;
    for (int i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            count[i]--;
            j++;
        }
    }
    return arr;
}
```

---

#### **Additional Notes**
- **Arrays.sort()**: Works in-place, meaning it modifies the original array and does not return a new array.
- **Collections.reverseOrder()**: Requires arrays to be of `Integer[]` type, not `int[]`, as it works on objects.
- **Performance Tip**: For custom sorting within ranges, specify `startIndex` and `endIndex` in `Arrays.sort(arr, start, end)`.

---

### Java Sorting Notes (Formatted and Explained)

---

#### **1. Sorting Using `Arrays.sort()`**
- **Key Idea**: The `Arrays.sort()` method sorts the array in ascending order **in-place**.
- **Important Note**: 
  - The method does **not return** a new array. Instead, it modifies the original array.
  - If you attempt to directly use the result of `Arrays.sort()` in another method, it will cause an error because `Arrays.sort()` returns `void`.

**Example:**
```java
int[] res = {4, 9, 2, -2, 17, 5, 8};
Arrays.sort(res);
System.out.println(Arrays.toString(res)); // Output: [-2, 2, 4, 5, 8, 9, 17]
```

**What Not to Do:**
```java
// This will cause an error because Arrays.sort() returns void
System.out.println(Arrays.toString(Arrays.sort(new int[]{4, 9, 15, 17, 5, 8})));
```

---

#### **2. Sorting with Custom Indexes**
- **Use Case**: If you want to sort only a portion of the array, you can specify a start and end index.
- **Syntax**: `Arrays.sort(arr, startIndex, endIndex);`
- **Behavior**: The elements from `startIndex` (inclusive) to `endIndex` (exclusive) will be sorted.

**Example:**
```java
int[] res = {4, 9, 2, -2, 17, 5, 8};
Arrays.sort(res, 0, 5); // Only the first 5 elements are sorted
System.out.println(Arrays.toString(res)); // Output: [-2, 2, 4, 9, 17, 5, 8]
```

---

#### **3. Sorting in Descending Order**
- **Problem**: `Arrays.sort()` does not directly support descending order for primitive types (like `int[]`).
- **Solution**: Use `Collections.reverseOrder()` which works on objects (e.g., `Integer[]`).
- **Note**: Convert `int[]` to `Integer[]` because `Collections.reverseOrder()` does not work with primitives.

**Steps:**
1. Declare the array as `Integer[]`.
2. Use `Arrays.sort()` with `Collections.reverseOrder()`.

**Example:**
```java
Integer[] res = {4, 9, 2, -2, 17, 5, 8};
Arrays.sort(res, Collections.reverseOrder());
System.out.println(Arrays.toString(res)); // Output: [17, 9, 8, 5, 4, 2, -2]
```

**Partial Sorting in Descending Order:**
```java
Integer[] res = {4, 9, 2, -2, 17, 5, 8};
Arrays.sort(res, 2, 5, Collections.reverseOrder()); // Sorts only index 2 to 4 in descending order
System.out.println(Arrays.toString(res)); // Output: [4, 9, 17, 2, -2, 5, 8]
```

---

#### **Key Points**
- `Arrays.sort()` is efficient for general use with complexity \( O(n \log n) \).
- For descending order, use `Collections.reverseOrder()` with `Integer[]`.
- When sorting a portion of an array, specify the range with `startIndex` and `endIndex` parameters.
- `Arrays.sort()` sorts **in-place**, meaning it modifies the original array and does not create a new one.
