

### 1. **Spiral Traversal of a 2D Matrix**

#### **Concept**  
Spiral traversal means visiting all elements of the matrix in a spiral pattern:  
- Start from the top-left corner.
- Move right across the top row.
- Move down the rightmost column.
- Move left across the bottom row.
- Move up the leftmost column.  
Repeat this pattern for the remaining submatrix.

#### **Code**
```java
public static void spiralMatrix(int arr[][]) {
    int rowStart = 0, rowEnd = arr.length - 1;
    int colStart = 0, colEnd = arr[0].length - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        // Top row
        for (int i = colStart; i <= colEnd; i++) {
            System.out.print(arr[rowStart][i] + " ");
        }
        rowStart++;

        // Right column
        for (int i = rowStart; i <= rowEnd; i++) {
            System.out.print(arr[i][colEnd] + " ");
        }
        colEnd--;

        // Bottom row (if applicable)
        if (rowStart <= rowEnd) {
            for (int i = colEnd; i >= colStart; i--) {
                System.out.print(arr[rowEnd][i] + " ");
            }
            rowEnd--;
        }

        // Left column (if applicable)
        if (colStart <= colEnd) {
            for (int i = rowEnd; i >= rowStart; i--) {
                System.out.print(arr[i][colStart] + " ");
            }
            colStart++;
        }
    }
    System.out.println();
}
```

#### **How It Works**  
The loop adjusts boundaries (`rowStart`, `rowEnd`, `colStart`, `colEnd`) after processing each row or column. This ensures we only traverse unvisited elements.

---

### 2. **Diagonal Traversal of a 2D Matrix**

#### **Concept**  
In diagonal traversal, there are two main diagonals:
1. **Primary diagonal (PD):** Elements where `i == j`.
2. **Secondary diagonal (SD):** Elements where `i + j == n - 1`.

#### **Code**
```java
public static void diagonalTraversal(int arr[][]) {
    int sum = 0;

    for (int i = 0; i < arr.length; i++) {
        // Primary diagonal
        sum += arr[i][i];

        // Secondary diagonal (avoid double counting the middle element)
        if (i != arr.length - 1 - i) {
            sum += arr[i][arr.length - 1 - i];
        }
    }

    System.out.println("Sum of diagonals: " + sum);
}
```

#### **How It Works**  
The `for` loop iterates through rows and accumulates values from both diagonals. For the secondary diagonal, we ensure the middle element (in odd-sized matrices) is not added twice.

---

### 3. **Staircase Search in a Sorted Matrix**

#### **Concept**  
In a sorted 2D matrix:
- Rows are sorted in ascending order.
- Columns are also sorted in ascending order.

Two approaches are possible:  
1. **Start from the top-right corner**: Move left or down based on the comparison.  
2. **Start from the bottom-left corner**: Move up or right based on the comparison.

#### **Code: Top-Right Corner Approach**
```java
public static boolean stairCaseS1(int arr[][], int key) {
    int row = 0, col = arr[0].length - 1;

    while (row < arr.length && col >= 0) {
        if (arr[row][col] == key) {
            System.out.println("Found at: (" + row + ", " + col + ")");
            return true;
        } else if (arr[row][col] > key) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }
    return false; // Not found
}
```

#### **Code: Bottom-Left Corner Approach**
```java
public static boolean stairCase(int arr[][], int key) {
    int row = arr.length - 1, col = 0;

    while (row >= 0 && col < arr[0].length) {
        if (arr[row][col] == key) {
            System.out.println("Found at: (" + row + ", " + col + ")");
            return true;
        } else if (arr[row][col] > key) {
            row--; // Move up
        } else {
            col++; // Move right
        }
    }
    return false; // Not found
}
```

#### **How It Works**  
- Start at a strategic corner.
- Compare the key with the current element:
  - If it matches, print the position.
  - If the current element is larger, move left/up.
  - If the current element is smaller, move right/down.

---

### **Output Example**

Given this matrix:  
```java
int arr[][] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12},
    {13, 14, 15, 16}
};
```

1. **Spiral Traversal**  
Output:  
```
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
```

2. **Diagonal Traversal**  
Output:  
```
Sum of diagonals: 68
```

3. **Staircase Search**  
For `key = 11`:  
Output:  
```
Found at: (2, 2)
```

---

### Notes
- These methods are **optimized** for their respective operations.
- Adjust matrix size and target values for testing and exploring more scenarios.