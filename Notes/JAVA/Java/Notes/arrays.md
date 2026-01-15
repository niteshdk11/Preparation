# Arrays in Java

## Declaring Arrays

### ✅ Valid Declarations
```java
int arr[] = new int[]{2, 4, 5, 6, 7, 8, 9, 10};
int arr[] = {2, 4, 5, 6, 7, 8, 9, 10};
int[] arr = {2, 4, 5, 6};
int arr[] = {2, 3, 4};
int arr[] = new int[30];
int arr[] = new int[20];
```

### ❌ Invalid Declarations
```java
int arr[];
int[] arr;
int arr[] = int{2, 4, 5, 6};
int arr[] = new int{2, 3, 4, 5, 6};
```

---

## Arrays as Arguments in Functions

When arrays are passed to functions, they are **passed by reference**, not by value.

### ❌ Invalid Usage
```java
update(new int{2, 3, 4, 5, 6}); 
update(int[20]); 
update(int[]{2, 3, 4, 5, 6}); 
```

### ✅ Valid Usage
```java
update(new int[20]); 
update(new int[]{2, 3, 4, 5, 6});
```

---

## Loops on Arrays

### Enhanced For Loop
```java
for (int i : marks) {
    System.out.print(i + " ");
}
```

### Traditional For Loop
```java
for (int i = 0; i < marks.length; i++) {
    marks[i] = scnr.nextInt();
}
```

---

## Declaring and Using Arrays

### Example
```java
int arr[] = new int[10];

// Assigning values
arr[0] = scnr.nextInt();
arr[1] = scnr.nextInt();

// Modifying values
arr[1] += 23;

// Printing values
System.out.println("Your array is: " + arr[0]);
System.out.println("Your array is: " + arr[1]);

scnr.close();
```

---

## Passing Arrays to Functions

### Example
```java
update(new int[20]); 
update(scnr, new int[]{2, 3, 4, 5, 6});
```

---

## Printing Arrays

### Valid Usage
```java
printArr(new int[30]);
printArr(new int[]{2, 3, 4, 5});
printArr(new int[40]);
```

### `printArr` Function Definition
```java
public static void printArr(int arr[]) {
    System.out.print("[");
    for (int i : arr) {
        System.out.print(i + " ");
    }
    System.out.println("]");
}
```

---

## Notes
1. Arrays in Java must be initialized before use.
2. Arrays passed to methods are referenced directly, meaning changes inside the method affect the original array.
3. Use enhanced for-loops (`for-each`) for simple traversal and traditional for-loops for modification or indexed access. 


---

# Java Array and Algorithm Topics

## 1. **Linear Search**
Linear search is a simple algorithm where each element in the array is checked sequentially to find the target value.

### Method:
- Iterate through the array.
- Compare each element with the target.
- If found, return the index; otherwise, return -1.

### Code:
```java
public static void LinearSearch(int arr[], int target) {
    for (int i : arr) {
        if (i == target) {
            System.out.println("Target found!");
            return;
        }
    }
    System.out.println("Target not found!");
}
```

---

## 2. **Binary Search**
Binary search is an efficient algorithm for sorted arrays. It divides the array into halves to locate the target value.

### Method:
- Calculate the middle index.
- Compare the middle element with the target.
- Adjust the search range (left or right half) based on the comparison.

### Code:
```java
public static int BinarySearch(int arr[], int key) {
    int start = 0;
    int end = arr.length - 1;

    while (start <= end) {
        int mid = start + (end - start) / 2;
        if (arr[mid] == key) {
            System.out.println("Key found at index: " + mid);
            return mid;
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    System.out.println("Key not found!");
    return -1;
}
```

---

## 3. **Largest in Array**
Finds the largest element in the given array.

### Code:
```java
public static int LargestInArray(int num[]) {
    int max = Integer.MIN_VALUE;
    for (int i : num) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}
```

---

## 4. **Reversing an Array**
### Method 1: Using an Auxiliary Array
Create a new array and populate it in reverse order.

#### Code:
```java
public static void ReverseArrayM1(int arr[]) {
    int revarr[] = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
        revarr[arr.length - i - 1] = arr[i];
    }
    for (int i : revarr) {
        System.out.print(i + " ");
    }
}
```

### Method 2: In-place Reversal
Swap elements from start to end until the midpoint.

#### Code:
```java
public static void ReverseArrayM2(int arr[]) {
    int start = 0, end = arr.length - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    for (int i : arr) {
        System.out.print(i + " ");
    }
}
```

---

## 5. **Pairs in Array**
Prints all unique pairs of elements in the array.

### Code:
```java
public static void PairInArray(int arr[]) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            System.out.print("(" + arr[i] + ", " + arr[j] + ")");
        }
        System.out.println();
    }
}
```

---

## 6. **Subarrays**
### Method 1: Brute Force
Find all subarrays and calculate their sums.

#### Code:
```java
public static void SubArray(int arr[]) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i; j < arr.length; j++) {
            int sum = 0;
            for (int k = i; k <= j; k++) {
                System.out.print(arr[k] + " ");
                sum += arr[k];
            }
            System.out.println(" -> Sum: " + sum);
        }
        System.out.println();
    }
}
```

### Method 2: Using Prefix Array
Uses a prefix array to optimize the calculation of subarray sums.

#### Code:
```java
public static void SubArray1(int arr[]) {
    int preArr[] = new int[arr.length];
    preArr[0] = arr[0];
    for (int i = 1; i < arr.length; i++) {
        preArr[i] = preArr[i - 1] + arr[i];
    }

    int max = Integer.MIN_VALUE;
    for (int i = 0; i < arr.length; i++) {
        for (int j = i; j < arr.length; j++) {
            int sum = (i == 0) ? preArr[j] : preArr[j] - preArr[i - 1];
            max = Math.max(max, sum);
        }
    }
    System.out.println("Max Subarray Sum: " + max);
}
```

---

## 7. **Kadane’s Algorithm**
Finds the maximum sum of a subarray in `O(n)` time complexity.

### Code:
```java
public static void Kadane(int arr[]) {
    int maxSum = Integer.MIN_VALUE;
    int currSum = 0;

    for (int i : arr) {
        currSum += i;
        if (currSum < 0) {
            currSum = 0;
        }
        maxSum = Math.max(maxSum, currSum);
    }
    System.out.println("Max Subarray Sum: " + maxSum);
}
```

### Improved Version (Handles All-Negative Arrays):
```java
public static void KadaneBetter(int arr[]) {
    int maxSum = Integer.MIN_VALUE;
    int currSum = 0;
    boolean allNegative = true;

    for (int i : arr) {
        if (i > 0) {
            allNegative = false;
            break;
        }
    }

    if (allNegative) {
        for (int i : arr) {
            maxSum = Math.max(maxSum, i);
        }
    } else {
        for (int i : arr) {
            currSum += i;
            if (currSum < 0) {
                currSum = 0;
            }
            maxSum = Math.max(maxSum, currSum);
        }
    }
    System.out.println("Max Subarray Sum: " + maxSum);
}
```

---

## 8. **Trapping Rainwater Problem**
Calculates the trapped rainwater using the boundaries' heights.

### Code:
```java
public static void Trapping_Rain_Water(int arr[]) {
    int n = arr.length;
    int[] leftMax = new int[n];
    int[] rightMax = new int[n];

    leftMax[0] = arr[0];
    for (int i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
    }

    rightMax[n - 1] = arr[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    int trappedWater = 0;
    for (int i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - arr[i];
    }

    System.out.println("Trapped Water: " + trappedWater);
}
```

---

## 9. **Buy and Sell Stocks**
Calculates the maximum profit from stock prices.

### Code:
```java
public static void Sell_Buy_Share(int prices[]) {
    int buyingPrice = Integer.MAX_VALUE;
    int maxProfit = 0;

    for (int price : prices) {
        if (price < buyingPrice) {
            buyingPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - buyingPrice);
        }
    }
    System.out.println("Max Profit: " + maxProfit);
}
```

---

