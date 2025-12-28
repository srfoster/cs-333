# Chapter 4: Algorithm Paradigms and Intractability

This chapter introduces powerful algorithm design strategies and explores the fundamental limits of computation.

## Greedy Algorithms

Greedy algorithms make locally optimal choices hoping to find global optima. You'll study:

* **Activity Selection**: Scheduling non-overlapping intervals
* **Fractional Knapsack**: Maximizing value with divisible items
* **Huffman Encoding**: Optimal prefix-free codes for compression

## Divide and Conquer

Break problems into smaller subproblems, solve recursively, and combine results:

* **Merge Sort**: O(n log n) sorting via recursive splitting
* **Quick Sort**: Randomized partitioning with excellent average case
* **Master Theorem**: Analyzing divide-and-conquer recurrences

## Dynamic Programming

Optimize overlapping subproblems by storing intermediate results:

* **0/1 Knapsack**: Making optimal choices with indivisible items
* **Longest Common Subsequence (LCS)**: Finding shared patterns
* **Matrix Chain Multiplication**: Optimal parenthesization

## Network Flow

Model flow through networks with capacity constraints:

* **Ford-Fulkerson Algorithm**: Finding maximum flow
* **Max-Flow Min-Cut Theorem**: Fundamental duality result

## Computational Complexity

Some problems may be fundamentally intractable. You'll explore:

* **P vs NP**: The most important open problem in computer science
* **NP-Completeness**: Problems as hard as any in NP
* **Reductions**: SAT to 3-SAT transformation
* **Practical Implications**: When to seek approximations or heuristics

## Key Learning Goals

By the end of this chapter, you should be able to:

* Recognize when greedy algorithms are appropriate
* Apply divide-and-conquer with Master Theorem analysis
* Solve optimization problems using dynamic programming
* Compute maximum flow in networks
* Understand the significance of P vs NP
* Perform polynomial-time reductions between problems
* Recognize NP-complete problems and their implications

## Code

### Greedy Algorithms: Local Choices, Global Optimality

Greedy algorithms embody algorithmic optimism: make the locally best choice at each step, and trust that these choices lead to a globally optimal solution. This strategy is remarkably effective for certain problems—and catastrophically wrong for others. Understanding when greedy works requires mathematical insight into problem structure.

The greedy approach is appealingly simple: no need to explore all possibilities, no need to remember past decisions. Just scan through options and pick the best available. This simplicity translates to efficiency—greedy algorithms often run in polynomial time, while exhaustive search would be exponential.

But greedy algorithms require proof. Unlike dynamic programming, where optimal solutions clearly compose from optimal sub-solutions, greedy algorithms rely on the "greedy choice property": the locally optimal choice is part of a globally optimal solution. This property must be proved, not assumed.

Activity selection illustrates greedy algorithms at their finest. Given activities with start and finish times, select the maximum number of non-overlapping activities. The greedy strategy: always choose the activity that finishes earliest. Why? Because finishing early leaves maximum room for future activities. This intuition can be formalized into a correctness proof via exchange arguments.

Fractional knapsack extends this idea: given items with weights and values, fill a knapsack to maximize value. If items are divisible (fractional knapsack), greedy works: always take the highest value-per-weight item. But if items are indivisible (0/1 knapsack), greedy fails—this becomes an NP-hard problem requiring dynamic programming.

Huffman coding solves optimal prefix-free encoding: given character frequencies, construct a binary tree where common characters have shorter codes. The greedy strategy: repeatedly merge the two lowest-frequency nodes. This builds an optimal code tree from the bottom up, a beautiful application of greedy principles to information theory.

**Pseudocode:**
```
// Activity Selection - O(n log n)
FUNCTION activitySelection(activities):
    SORT activities by finish time (ascending)
    
    selected ← NEW LIST
    selected.ADD(activities[0])
    lastFinish ← activities[0].finish
    
    FOR i ← 1 TO length(activities) - 1 DO
        IF activities[i].start ≥ lastFinish THEN
            selected.ADD(activities[i])
            lastFinish ← activities[i].finish
    
    RETURN selected

// Fractional Knapsack - O(n log n)
FUNCTION fractionalKnapsack(items, capacity):
    // Calculate value per weight and sort
    FOR each item IN items DO
        item.ratio ← item.value / item.weight
    SORT items by ratio (descending)
    
    totalValue ← 0.0
    remaining ← capacity
    
    FOR each item IN items DO
        IF item.weight ≤ remaining THEN
            totalValue ← totalValue + item.value
            remaining ← remaining - item.weight
        ELSE
            // Take fraction of item
            totalValue ← totalValue + (item.ratio * remaining)
            BREAK
    
    RETURN totalValue

// Huffman Coding - O(n log n)
FUNCTION huffmanCoding(frequencies):
    pq ← NEW MIN PRIORITY QUEUE
    
    FOR each (char, freq) IN frequencies DO
        node ← NEW NODE(char, freq)
        pq.INSERT(node)
    
    WHILE pq.size() > 1 DO
        left ← pq.EXTRACT_MIN()
        right ← pq.EXTRACT_MIN()
        
        parent ← NEW NODE(NULL, left.freq + right.freq)
        parent.left ← left
        parent.right ← right
        
        pq.INSERT(parent)
    
    RETURN pq.EXTRACT_MIN()  // Root of Huffman tree
```

**Java Implementation:**
```java
import java.util.*;

public class GreedyAlgorithms {
    
    // Activity Selection: O(n log n)
    static class Activity implements Comparable<Activity> {
        int start, finish;
        
        Activity(int start, int finish) {
            this.start = start;
            this.finish = finish;
        }
        
        @Override
        public int compareTo(Activity other) {
            return Integer.compare(this.finish, other.finish);
        }
    }
    
    public static List<Activity> activitySelection(List<Activity> activities) {
        Collections.sort(activities);
        List<Activity> selected = new ArrayList<>();
        
        selected.add(activities.get(0));
        int lastFinish = activities.get(0).finish;
        
        for (int i = 1; i < activities.size(); i++) {
            if (activities.get(i).start >= lastFinish) {
                selected.add(activities.get(i));
                lastFinish = activities.get(i).finish;
            }
        }
        
        return selected;
    }
    
    // Fractional Knapsack: O(n log n)
    static class Item implements Comparable<Item> {
        int weight, value;
        double valuePerWeight;
        
        Item(int weight, int value) {
            this.weight = weight;
            this.value = value;
            this.valuePerWeight = (double) value / weight;
        }
        
        @Override
        public int compareTo(Item other) {
            return Double.compare(other.valuePerWeight, this.valuePerWeight);
        }
    }
    
    public static double fractionalKnapsack(List<Item> items, int capacity) {
        Collections.sort(items);
        double totalValue = 0;
        
        for (Item item : items) {
            if (capacity >= item.weight) {
                totalValue += item.value;
                capacity -= item.weight;
            } else {
                totalValue += item.valuePerWeight * capacity;
                break;
            }
        }
        
        return totalValue;
    }
    
    // Huffman Coding: O(n log n)
    static class HuffmanNode implements Comparable<HuffmanNode> {
        char character;
        int frequency;
        HuffmanNode left, right;
        
        HuffmanNode(char character, int frequency) {
            this.character = character;
            this.frequency = frequency;
        }
        
        @Override
        public int compareTo(HuffmanNode other) {
            return Integer.compare(this.frequency, other.frequency);
        }
    }
    
    public static HuffmanNode buildHuffmanTree(Map<Character, Integer> frequencies) {
        PriorityQueue<HuffmanNode> pq = new PriorityQueue<>();
        
        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
            pq.offer(new HuffmanNode(entry.getKey(), entry.getValue()));
        }
        
        while (pq.size() > 1) {
            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();
            
            HuffmanNode parent = new HuffmanNode('\0', left.frequency + right.frequency);
            parent.left = left;
            parent.right = right;
            
            pq.offer(parent);
        }
        
        return pq.poll();
    }
}
```

**Greedy Algorithm Insights:**

Activity selection sorts by finish time—O(n log n)—then scans linearly, greedily selecting non-overlapping activities. The correctness relies on a key insight: if an activity A finishes before B, choosing A never makes the solution worse than choosing B, because A leaves at least as much room for future activities.

Fractional knapsack sorts items by value-per-weight ratio—the "bang for buck." Then greedily pack items in order, taking whole items until one doesn't fit, then taking a fraction of the next. The greedy choice is obviously optimal: why take something with lower value-per-weight when higher value-per-weight is available?

Huffman coding builds a tree bottom-up. The priority queue ensures we always merge the two least-frequent nodes. The resulting tree is optimal because frequent characters end up closer to the root (shorter codes), while rare characters are deeper (longer codes). This is information theory made concrete—the expected code length is minimized.

The pattern across these problems: greedy works when the problem has optimal substructure (optimal solutions contain optimal sub-solutions) and the greedy choice property (locally optimal choices lead to global optimality). Not all problems have these properties, which is why greedy algorithms require careful analysis and proof.

### Divide and Conquer: Breaking Problems Apart

Divide and conquer embodies a powerful problem-solving paradigm: break a problem into smaller instances, solve them recursively, then combine results. This recursive decomposition often leads to efficient algorithms with elegant structure. The classic examples—merge sort, quick sort, binary search—demonstrate the paradigm's power.

The three-step pattern is universal: **divide** the problem into subproblems, **conquer** the subproblems recursively, and **combine** sub-solutions into a complete solution. The art lies in choosing how to divide (to ensure balanced subproblems) and how to combine (to do so efficiently).

Merge sort epitomizes elegant divide-and-conquer. Divide: split the array in half. Conquer: recursively sort each half. Combine: merge the two sorted halves. The merging step is linear, and the division is balanced, giving O(n log n) time. The algorithm's stability and predictable performance make it a workhorse for production systems.

Quick sort takes a different approach: choose a pivot, partition around it (elements smaller than pivot go left, larger go right), then recursively sort each partition. Unlike merge sort, quicksort's work happens during division (partitioning), not combination. Average case: O(n log n). Worst case (bad pivots): O(n²). Randomized pivot selection makes worst case vanishingly unlikely.

The Master Theorem provides a cookbook for analyzing divide-and-conquer recurrences. For T(n) = aT(n/b) + f(n), compare f(n) to n^(log_b a). If f(n) is polynomially smaller, time is Θ(n^(log_b a)). If equal, it's Θ(n^(log_b a) log n). If larger, it's Θ(f(n)). This theorem handles most divide-and-conquer algorithms, turning complex recurrence analysis into pattern matching.

**Pseudocode:**
```
// Merge Sort - O(n log n)
FUNCTION mergeSort(arr, left, right):
    IF left < right THEN
        mid ← (left + right) / 2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right)

FUNCTION merge(arr, left, mid, right):
    leftSize ← mid - left + 1
    rightSize ← right - mid
    
    L ← NEW ARRAY of size leftSize
    R ← NEW ARRAY of size rightSize
    
    COPY arr[left...mid] to L
    COPY arr[mid+1...right] to R
    
    i ← 0, j ← 0, k ← left
    WHILE i < leftSize AND j < rightSize DO
        IF L[i] ≤ R[j] THEN
            arr[k] ← L[i]
            i ← i + 1
        ELSE
            arr[k] ← R[j]
            j ← j + 1
        k ← k + 1
    
    COPY remaining L elements (if any)
    COPY remaining R elements (if any)

// Quick Sort - O(n log n) average, O(n²) worst
FUNCTION quickSort(arr, low, high):
    IF low < high THEN
        pivotIndex ← partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)

FUNCTION partition(arr, low, high):
    pivot ← arr[high]
    i ← low - 1
    
    FOR j ← low TO high - 1 DO
        IF arr[j] < pivot THEN
            i ← i + 1
            SWAP arr[i] and arr[j]
    
    SWAP arr[i + 1] and arr[high]
    RETURN i + 1

// Binary Search - O(log n)
FUNCTION binarySearch(arr, target):
    left ← 0
    right ← length(arr) - 1
    
    WHILE left ≤ right DO
        mid ← (left + right) / 2
        IF arr[mid] = target THEN
            RETURN mid
        ELSE IF arr[mid] < target THEN
            left ← mid + 1
        ELSE
            right ← mid - 1
    
    RETURN -1
```

**Java Implementation:**
```java
public class DivideAndConquer {
    
    // Merge Sort: O(n log n)
    public static void mergeSort(int[] arr) {
        if (arr.length <= 1) return;
        mergeSortHelper(arr, 0, arr.length - 1);
    }
    
    private static void mergeSortHelper(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            mergeSortHelper(arr, left, mid);
            mergeSortHelper(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        System.arraycopy(arr, left, L, 0, n1);
        System.arraycopy(arr, mid + 1, R, 0, n2);
        
        int i = 0, j = 0, k = left;
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }
        
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
    
    // Quick Sort: O(n log n) average, O(n²) worst
    public static void quickSort(int[] arr) {
        quickSortHelper(arr, 0, arr.length - 1);
    }
    
    private static void quickSortHelper(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSortHelper(arr, low, pivotIndex - 1);
            quickSortHelper(arr, pivotIndex + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        
        swap(arr, i + 1, high);
        return i + 1;
    }
    
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // Binary Search: O(log n)
    public static int binarySearch(int[] arr, int target) {
        return binarySearchHelper(arr, target, 0, arr.length - 1);
    }
    
    private static int binarySearchHelper(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            return binarySearchHelper(arr, target, left, mid - 1);
        } else {
            return binarySearchHelper(arr, target, mid + 1, right);
        }
    }
}
```

**Divide and Conquer in Practice:**

Merge sort's merge operation is the key to its efficiency. Two sorted arrays can be merged in linear time by maintaining pointers into each and always taking the smaller element. The two while loops at the end handle remaining elements after one array is exhausted. This linear merge, combined with logarithmic recursion depth, gives O(n log n) time.

Quick sort's partition operation rearranges the array so elements less than the pivot precede it, and elements greater follow. The two-pointer technique swaps elements to achieve this in a single pass—O(n) time. The pivot's final position becomes the division point for recursive calls. Choosing a good pivot (ideally the median) ensures balanced partitions.

Binary search, though simple, demonstrates divide-and-conquer elegance. Each comparison halves the search space. The midpoint calculation `mid = left + (right - left) / 2` avoids overflow that `(left + right) / 2` might cause—a subtle but important detail showing how theory meets practice.

The Master Theorem analysis: Merge sort has a=2 (two subproblems), b=2 (half size each), f(n)=O(n) (merge time). So n^(log_2 2) = n, equal to f(n), giving case 2: Θ(n log n). Quick sort's average case analysis is similar, though worst-case analysis requires more sophisticated techniques.

### Dynamic Programming: Optimal Substructure and Overlapping Subproblems

Dynamic programming (DP) is perhaps the most powerful algorithmic technique for optimization problems. Like divide-and-conquer, DP breaks problems into subproblems. But DP applies when subproblems overlap—when the same sub-problem is solved repeatedly. By storing (memoizing) solutions to subproblems, DP avoids redundant computation, often transforming exponential algorithms into polynomial ones.

The two key properties for DP are optimal substructure (optimal solutions contain optimal sub-solutions) and overlapping subproblems (subproblems recur multiple times). Optimal substructure suggests a recursive solution; overlapping subproblems suggest caching. Together, they define DP's domain.

Two approaches exist: top-down (memoization) and bottom-up (tabulation). Memoization adds caching to natural recursive code. Tabulation builds a table iteratively, solving smaller subproblems first. Both achieve the same complexity, but tabulation often has better constants (no recursion overhead) while memoization can be easier to code and skips unnecessary subproblems.

The 0/1 knapsack problem exemplifies DP's power. Given items with weights and values, maximize value without exceeding capacity. For each item, we choose: take it (if it fits) or leave it. The recurrence: `dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]])`. The 2D table stores solutions to all subproblems, enabling polynomial-time solution to what seems like an exponential problem.

LCS (Longest Common Subsequence) finds the longest sequence appearing in two strings in the same relative order. Applications include diff tools and bioinformatics. The recurrence: if characters match, include them and continue; if not, try skipping in each string and take the better result. The 2D DP table encodes all possible subsequences implicitly.

Matrix chain multiplication optimizes the order of multiplying matrices. Multiplying A×B×C can be done as (A×B)×C or A×(B×C), with different costs. The DP solution tries all possible split points, taking the minimum cost. This illustrates DP's flexibility—the recurrence considers all possibilities, but memoization ensures each is computed once.

**Pseudocode:**
```
// 0/1 Knapsack - O(n × capacity)
FUNCTION knapsack01(weights, values, capacity):
    n ← length(weights)
    dp ← NEW 2D ARRAY of size (n+1) × (capacity+1)
    
    FOR i ← 0 TO n DO
        FOR w ← 0 TO capacity DO
            IF i = 0 OR w = 0 THEN
                dp[i][w] ← 0
            ELSE IF weights[i-1] ≤ w THEN
                dp[i][w] ← MAX(values[i-1] + dp[i-1][w-weights[i-1]], 
                               dp[i-1][w])
            ELSE
                dp[i][w] ← dp[i-1][w]
    
    RETURN dp[n][capacity]

// Longest Common Subsequence - O(m × n)
FUNCTION LCS(s1, s2):
    m ← length(s1)
    n ← length(s2)
    dp ← NEW 2D ARRAY of size (m+1) × (n+1)
    
    FOR i ← 1 TO m DO
        FOR j ← 1 TO n DO
            IF s1[i-1] = s2[j-1] THEN
                dp[i][j] ← dp[i-1][j-1] + 1
            ELSE
                dp[i][j] ← MAX(dp[i-1][j], dp[i][j-1])
    
    RETURN dp[m][n]

// Matrix Chain Multiplication - O(n³)
FUNCTION matrixChainOrder(dims):
    n ← length(dims) - 1
    dp ← NEW 2D ARRAY of size n × n (all 0)
    
    FOR len ← 2 TO n DO
        FOR i ← 0 TO n - len DO
            j ← i + len - 1
            dp[i][j] ← ∞
            
            FOR k ← i TO j - 1 DO
                cost ← dp[i][k] + dp[k+1][j] + 
                       dims[i] × dims[k+1] × dims[j+1]
                dp[i][j] ← MIN(dp[i][j], cost)
    
    RETURN dp[0][n-1]

// Coin Change - O(n × amount)
FUNCTION coinChange(coins, amount):
    dp ← NEW ARRAY of size (amount+1) filled with ∞
    dp[0] ← 0
    
    FOR i ← 1 TO amount DO
        FOR each coin IN coins DO
            IF coin ≤ i THEN
                dp[i] ← MIN(dp[i], dp[i - coin] + 1)
    
    RETURN (dp[amount] = ∞) ? -1 : dp[amount]

// Edit Distance - O(m × n)
FUNCTION editDistance(s1, s2):
    m ← length(s1)
    n ← length(s2)
    dp ← NEW 2D ARRAY of size (m+1) × (n+1)
    
    FOR i ← 0 TO m DO
        dp[i][0] ← i
    FOR j ← 0 TO n DO
        dp[0][j] ← j
    
    FOR i ← 1 TO m DO
        FOR j ← 1 TO n DO
            IF s1[i-1] = s2[j-1] THEN
                dp[i][j] ← dp[i-1][j-1]
            ELSE
                dp[i][j] ← 1 + MIN(dp[i-1][j],    // delete
                                    dp[i][j-1],    // insert
                                    dp[i-1][j-1])  // replace
    
    RETURN dp[m][n]
```

**Java Implementation:**
```java
import java.util.*;

public class DynamicProgramming {
    
    // 0/1 Knapsack: O(n * capacity)
    public static int knapsack01(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(
                        values[i - 1] + dp[i - 1][w - weights[i - 1]],
                        dp[i - 1][w]
                    );
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        
        return dp[n][capacity];
    }
    
    // Longest Common Subsequence: O(m * n)
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    // Matrix Chain Multiplication: O(n³)
    public static int matrixChainMultiplication(int[] dims) {
        int n = dims.length - 1;
        int[][] dp = new int[n][n];
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + 
                              dims[i] * dims[k + 1] * dims[j + 1];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
        
        return dp[0][n - 1];
    }
    
    // Coin Change: O(n * amount)
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    // Edit Distance (Levenshtein): O(m * n)
    public static int editDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],      // Delete
                        Math.min(
                            dp[i][j - 1],  // Insert
                            dp[i - 1][j - 1] // Replace
                        )
                    );
                }
            }
        }
        
        return dp[m][n];
    }
}
```

### Network Flow - Ford-Fulkerson

**Pseudocode:**
```
// Ford-Fulkerson (Edmonds-Karp with BFS) - O(V × E²)
FUNCTION maxFlow(capacity, source, sink):
    n ← size of capacity matrix
    residual ← COPY of capacity matrix
    maxFlow ← 0
    parent ← NEW ARRAY of size n
    
    // While augmenting path exists
    WHILE BFS(residual, source, sink, parent) DO
        // Find minimum capacity along path
        pathFlow ← ∞
        v ← sink
        WHILE v ≠ source DO
            u ← parent[v]
            pathFlow ← MIN(pathFlow, residual[u][v])
            v ← u
        
        // Update residual capacities
        v ← sink
        WHILE v ≠ source DO
            u ← parent[v]
            residual[u][v] ← residual[u][v] - pathFlow
            residual[v][u] ← residual[v][u] + pathFlow
            v ← u
        
        maxFlow ← maxFlow + pathFlow
    
    RETURN maxFlow

FUNCTION BFS(residual, source, sink, parent):
    visited ← NEW BOOLEAN ARRAY of size n (all false)
    queue ← NEW QUEUE
    
    visited[source] ← true
    queue.ENQUEUE(source)
    
    WHILE queue is not empty DO
        u ← queue.DEQUEUE()
        
        FOR v ← 0 TO n - 1 DO
            IF NOT visited[v] AND residual[u][v] > 0 THEN
                visited[v] ← true
                parent[v] ← u
                queue.ENQUEUE(v)
                
                IF v = sink THEN
                    RETURN true
    
    RETURN false
```

**Java Implementation:**
```java
import java.util.*;

public class NetworkFlow {
    
    // Ford-Fulkerson with BFS (Edmonds-Karp): O(V * E²)
    public static int maxFlow(int[][] capacity, int source, int sink) {
        int n = capacity.length;
        int[][] residual = new int[n][n];
        
        // Initialize residual graph
        for (int i = 0; i < n; i++) {
            System.arraycopy(capacity[i], 0, residual[i], 0, n);
        }
        
        int maxFlow = 0;
        int[] parent = new int[n];
        
        // While there exists an augmenting path
        while (bfs(residual, source, sink, parent)) {
            // Find minimum capacity along the path
            int pathFlow = Integer.MAX_VALUE;
            for (int v = sink; v != source; v = parent[v]) {
                int u = parent[v];
                pathFlow = Math.min(pathFlow, residual[u][v]);
            }
            
            // Update residual capacities
            for (int v = sink; v != source; v = parent[v]) {
                int u = parent[v];
                residual[u][v] -= pathFlow;
                residual[v][u] += pathFlow;
            }
            
            maxFlow += pathFlow;
        }
        
        return maxFlow;
    }
    
    private static boolean bfs(int[][] residual, int source, int sink, int[] parent) {
        int n = residual.length;
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new LinkedList<>();
        
        queue.offer(source);
        visited[source] = true;
        parent[source] = -1;
        
        while (!queue.isEmpty()) {
            int u = queue.poll();
            
            for (int v = 0; v < n; v++) {
                if (!visited[v] && residual[u][v] > 0) {
                    visited[v] = true;
                    parent[v] = u;
                    queue.offer(v);
                    
                    if (v == sink) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
}
```

**Dynamic Programming in Practice:**

The knapsack implementation fills a 2D table where `dp[i][w]` represents the maximum value using items 0..i-1 with capacity w. The inner condition checks if the current item fits; if so, we choose the better of taking it or leaving it. The final answer is `dp[n][capacity]`—the maximum value using all items.

LCS fills a 2D table where `dp[i][j]` is the LCS length of text1[0..i-1] and text2[0..j-1]. Matching characters extend the LCS from position [i-1][j-1]. Mismatches take the better of skipping in each string. The table implicitly encodes which characters match, enabling path reconstruction.

Matrix chain multiplication uses a 1D array of dimensions (for n matrices, n+1 dimensions) and fills a 2D table. `dp[i][j]` is the minimum cost to multiply matrices i through j. The inner loop tries all split points k, computing cost as left-chain-cost + right-chain-cost + splitting-cost. The O(n³) complexity is far better than the exponential number of parenthesizations.

Coin change demonstrates 1D DP: `dp[i]` is the minimum coins to make amount i. For each amount, we try using each coin, taking the minimum. The recurrence `dp[i] = min(dp[i], dp[i-coin] + 1)` captures the optimal substructure: the best way to make amount i uses the best way to make i-coin, plus one more coin.

Edit distance measures how many single-character edits transform one string into another. Applications include spell-checking and DNA sequence alignment. The DP recurrence considers three operations: insert, delete, or replace. Matching characters cost nothing; mismatches take the cheapest operation. This formulation makes a complex problem tractable.

### Network Flow: Modeling Capacity Constraints

Network flow problems model scenarios where resources flow through a network with capacity constraints. Water through pipes, traffic through roads, data through networks—all fit the flow framework. The maximum flow problem asks: given a network with edge capacities, what's the maximum flow from source to sink?

The Ford-Fulkerson method is conceptually simple: while an augmenting path exists (a path from source to sink with remaining capacity), push more flow through it. The flow amount is limited by the path's minimum capacity edge—the bottleneck. Repeat until no augmenting path exists. At termination, the flow is maximum.

The implementation uses a residual graph: for each edge with flow f and capacity c, the residual capacity is c-f forward and f backward. The backward edges enable "undoing" flow, crucial for finding optimal solutions. BFS finds augmenting paths (making this the Edmonds-Karp algorithm), guaranteeing O(VE²) time.

The max-flow min-cut theorem is fundamental: the maximum flow equals the minimum cut capacity. A cut partitions vertices into two sets; its capacity is the sum of forward edge capacities crossing the cut. This duality connects flow optimization to graph partitioning, with applications from scheduling to network resilience.

**Pseudocode:**
```
// SAT Brute Force Solver - O(2ⁿ)
FUNCTION solveSAT(formula, numVars):
    // Try all 2ⁿ possible assignments
    FOR assignment ← 0 TO 2^numVars - 1 DO
        values ← NEW BOOLEAN ARRAY of size numVars
        
        // Convert assignment number to boolean array
        FOR i ← 0 TO numVars - 1 DO
            values[i] ← (assignment & (1 << i)) ≠ 0
        
        // Check if this assignment satisfies all clauses
        IF evaluateFormula(formula, values) THEN
            RETURN values  // Found satisfying assignment
    
    RETURN NULL  // No satisfying assignment exists

FUNCTION evaluateFormula(formula, assignment):
    FOR each clause IN formula DO
        satisfied ← false
        FOR each literal IN clause DO
            value ← assignment[literal.variable]
            IF literal.negated THEN
                value ← NOT value
            IF value = true THEN
                satisfied ← true
                BREAK
        
        IF NOT satisfied THEN
            RETURN false  // Clause not satisfied
    
    RETURN true  // All clauses satisfied

// Convert to 3-SAT - Polynomial time reduction
FUNCTION convertTo3SAT(clause):
    IF length(clause) ≤ 3 THEN
        RETURN clause
    
    // Split long clause into multiple 3-literal clauses
    // using auxiliary variables
    newClauses ← EMPTY LIST
    current ← clause[0], clause[1], aux₀
    newClauses.ADD(current)
    
    FOR i ← 2 TO length(clause) - 3 DO
        current ← NOT auxᵢ₋₁, clause[i], auxᵢ
        newClauses.ADD(current)
    
    final ← NOT auxₙ₋₂, clause[n-2], clause[n-1]
    newClauses.ADD(final)
    
    RETURN newClauses
```

**Java Implementation:**
```java
import java.util.*;

public class SATProblems {
    
    // Boolean Satisfiability representation
    static class Clause {
        List<Literal> literals;
        
        Clause() {
            this.literals = new ArrayList<>();
        }
        
        void addLiteral(int variable, boolean negated) {
            literals.add(new Literal(variable, negated));
        }
        
        boolean evaluate(boolean[] assignment) {
            for (Literal lit : literals) {
                boolean value = assignment[lit.variable];
                if (lit.negated) value = !value;
                if (value) return true;
            }
            return false;
        }
    }
    
    static class Literal {
        int variable;
        boolean negated;
        
        Literal(int variable, boolean negated) {
            this.variable = variable;
            this.negated = negated;
        }
    }
    
    static class SATFormula {
        List<Clause> clauses;
        int numVariables;
        
        SATFormula(int numVariables) {
            this.numVariables = numVariables;
            this.clauses = new ArrayList<>();
        }
        
        void addClause(Clause clause) {
            clauses.add(clause);
        }
        
        boolean evaluate(boolean[] assignment) {
            for (Clause clause : clauses) {
                if (!clause.evaluate(assignment)) {
                    return false;
                }
            }
            return true;
        }
        
        // Brute force SAT solver: O(2ⁿ * m) where n = variables, m = clauses
        // This is exponential - illustrating why SAT is NP-complete
        boolean solveBruteForce() {
            return tryAssignment(new boolean[numVariables], 0);
        }
        
        private boolean tryAssignment(boolean[] assignment, int varIndex) {
            if (varIndex == numVariables) {
                return evaluate(assignment);
            }
            
            // Try false
            assignment[varIndex] = false;
            if (tryAssignment(assignment, varIndex + 1)) {
                return true;
            }
            
            // Try true
            assignment[varIndex] = true;
            return tryAssignment(assignment, varIndex + 1);
        }
    }
    
    // Convert arbitrary CNF to 3-CNF (polynomial-time reduction)
    // This demonstrates that 3-SAT is NP-complete
    public static SATFormula convertTo3SAT(SATFormula original) {
        SATFormula threeSAT = new SATFormula(original.numVariables * 2);
        int nextVar = original.numVariables;
        
        for (Clause clause : original.clauses) {
            if (clause.literals.size() <= 3) {
                threeSAT.addClause(clause);
            } else {
                // Split large clauses using auxiliary variables
                // (x1 v x2 v x3 v x4) becomes:
                // (x1 v x2 v y) ^ (~y v x3 v x4)
                // This is the polynomial reduction
                int auxVar = nextVar++;
                
                Clause first = new Clause();
                first.addLiteral(clause.literals.get(0).variable, 
                               clause.literals.get(0).negated);
                first.addLiteral(clause.literals.get(1).variable, 
                               clause.literals.get(1).negated);
                first.addLiteral(auxVar, false);
                threeSAT.addClause(first);
                
                Clause second = new Clause();
                second.addLiteral(auxVar, true);
                for (int i = 2; i < clause.literals.size(); i++) {
                    second.addLiteral(clause.literals.get(i).variable,
                                    clause.literals.get(i).negated);
                }
                threeSAT.addClause(second);
            }
        }
        
        return threeSAT;
    }
}
```

**SAT and Computational Complexity:**

The Boolean Satisfiability Problem (SAT) asks: given a Boolean formula in CNF (conjunctive normal form—ANDs of ORs), does an assignment of variables exist that makes it true? SAT was the first problem proven NP-complete, establishing it as the hardest problem in NP.

The implementation demonstrates SAT's structure: clauses contain literals (variables or their negations), and the formula is satisfied if all clauses are satisfied. The `evaluate` method checks if a given assignment satisfies the formula. The brute-force solver tries all 2ⁿ possible assignments—exponential time.

3-SAT restricts clauses to exactly 3 literals. The `convertTo3SAT` method shows a polynomial-time reduction from arbitrary CNF to 3-CNF. This reduction proves 3-SAT is NP-complete: if we could solve 3-SAT in polynomial time, we could solve all CNF-SAT problems in polynomial time. This is the essence of NP-completeness: hardness flows through polynomial reductions.

The significance of NP-completeness is profound. If any NP-complete problem has a polynomial algorithm, then P = NP—all efficiently verifiable problems are efficiently solvable. Most computer scientists believe P ≠ NP, meaning these problems are inherently intractable. Recognizing NP-complete problems tells us when to abandon exact algorithms and seek approximations or heuristics.

Thousands of practical problems are NP-complete: traveling salesman, graph coloring, scheduling, circuit design. When you encounter one, you face a choice: use exponential exact algorithms for small inputs, develop approximation algorithms with provable guarantees, or use heuristics without guarantees. Understanding NP-completeness guides these decisions.

**Chapter 4 Synthesis:**

This chapter explored algorithmic paradigms—strategies for designing algorithms. Greedy algorithms make locally optimal choices, working when problems have the greedy choice property. Divide-and-conquer breaks problems recursively, effective when division is balanced and combination is efficient. Dynamic programming solves optimization through optimal substructure and overlapping subproblems, caching solutions to avoid redundant work.

Network flow models capacity-constrained optimization, connecting to graph cuts through fundamental duality. And NP-completeness theory reveals computational limits—problems that probably lack efficient algorithms, guiding us toward approximation and heuristics.

These paradigms aren't mere techniques—they're ways of thinking about problems. Recognizing a problem's structure tells you which paradigm applies. Seeing optimal substructure suggests DP. Noticing safe greedy choices suggests greedy algorithms. Observing recursive decomposition suggests divide-and-conquer. This pattern recognition, honed through practice, is the essence of algorithmic thinking.

## Bonus Videos

Greedy

{{YouTube:https://www.youtube.com/watch?v=HzeK7g8cD0Y}}

{{YouTube:https://www.youtube.com/watch?v=ARvQcqJ_-NY}}

Activity selection:

{{YouTube:https://www.youtube.com/watch?v=V0ZrLuIVzaY}}

{{YouTube:https://www.youtube.com/watch?v=Qz6D7mrxaJM}}

{{YouTube:https://www.youtube.com/watch?v=32uOuOPXBhc}}

{{YouTube:https://www.youtube.com/watch?v=tEfVXgrP6WU}}

{{YouTube:https://www.youtube.com/watch?v=tvwipsztQr4}}

Fractional Knapsack:

{{YouTube:https://www.youtube.com/watch?v=ujHQlfR3qfo}}

{{YouTube:https://www.youtube.com/watch?v=m1p-eWxrt6g}}

{{YouTube:https://www.youtube.com/watch?v=xZfmHVi7FMg}}

{{YouTube:https://www.youtube.com/watch?v=DGOwuk55xa0}}

Huffman:

{{YouTube:https://www.youtube.com/watch?v=JsTptu56GM8}}

{{YouTube:https://www.youtube.com/watch?v=co4_ahEDCho}}

{{YouTube:https://www.youtube.com/watch?v=iEm1NRyEe5c}}

{{YouTube:https://www.youtube.com/watch?v=EzADYr8b5jA}}

Divide and Conquer

Merge Sort:

{{YouTube:https://www.youtube.com/watch?v=4VqmGXwpLqc}}

{{YouTube:https://www.youtube.com/watch?v=KF2j-9iSf4Q}}

{{YouTube:https://www.youtube.com/watch?v=-3u1C1URNZY}}

{{YouTube:https://www.youtube.com/watch?v=es2T6KY45cA}}

{{YouTube:https://www.youtube.com/watch?v=3j0SWDX4AtU}}

Quick Sort:

{{YouTube:https://www.youtube.com/watch?v=XE4VP_8Y0BU}}

{{YouTube:https://www.youtube.com/watch?v=Vtckgz38QHs}}

{{YouTube:https://www.youtube.com/watch?v=Hoixgm4-P4M}}

{{YouTube:https://www.youtube.com/watch?v=MZaf_9IZCrc}}

{{YouTube:https://www.youtube.com/watch?v=aXXWXz5rF64}}

Master Theorem:

{{YouTube:https://www.youtube.com/watch?v=2H0GKdrIowU}}

{{YouTube:https://www.youtube.com/watch?v=LlFBRDO5gNQ}}

{{YouTube:https://www.youtube.com/watch?v=SLsHKh_OUEM}}

{{YouTube:https://www.youtube.com/watch?v=d-gIGFxewW4}}

{{YouTube:https://www.youtube.com/watch?v=2y0HQGd1-nA}}

{{YouTube:https://www.youtube.com/watch?v=OynWkEj0S-s}}

{{YouTube:https://www.youtube.com/watch?v=T68vN1FNY4o}}

{{YouTube:https://www.youtube.com/watch?v=09vU-wVwW3U}}

{{YouTube:https://www.youtube.com/watch?v=g87rea4FDv4}}

Network Flow

{{YouTube:https://www.youtube.com/watch?v=Tl90tNtKvxs}}

{{YouTube:https://www.youtube.com/watch?v=VbeTl1gG4l4}}

{{YouTube:https://www.youtube.com/watch?v=LdOnanfc5TM}}

{{YouTube:https://www.youtube.com/watch?v=oHy3ddI9X3o}}

{{YouTube:https://www.youtube.com/watch?v=3LG-My_MoWc}}


Dynamic Programming

{{YouTube:https://www.youtube.com/watch?v=oifN-YVlrq8}}

{{YouTube:https://www.youtube.com/watch?v=Hdr64lKQ3e4}}

{{YouTube:https://www.youtube.com/watch?v=rE5h11FwiVw}}

Knapsack:

{{YouTube:https://www.youtube.com/watch?v=cJ21moQpofY}}

{{YouTube:https://www.youtube.com/watch?v=qxWu-SeAqe4}}

{{YouTube:https://www.youtube.com/watch?v=xOlhR_2QCXY}}

{{YouTube:https://www.youtube.com/watch?v=nLmhmB6NzcM}}

LCS:

{{YouTube:https://www.youtube.com/watch?v=Ua0GhsJSlWM}}

{{YouTube:https://www.youtube.com/watch?v=sSno9rV8Rhg}}

{{YouTube:https://www.youtube.com/watch?v=Qf5R-uYQRPk}}

{{YouTube:https://www.youtube.com/watch?v=KnWorqyDSLA}}

Matrix Chain Multiplication:

{{YouTube:https://www.youtube.com/watch?v=O_G2hVZvNBg}}

{{YouTube:https://www.youtube.com/watch?v=prx1psByp7U}}

{{YouTube:https://www.youtube.com/watch?v=JOJK7-fM2JQ}}

{{YouTube:https://www.youtube.com/watch?v=GMzVeWpyTN0}}

{{YouTube:https://www.youtube.com/watch?v=vgLJZMUfnsU}}

{{YouTube:https://www.youtube.com/watch?v=_WncuhSJZyA}}


Other DP problems:

Coinage:

{{YouTube:https://www.youtube.com/watch?v=KnWorqyDSLA}}

NP-Complete / SAT / 3-SAT

{{YouTube:https://www.youtube.com/watch?v=YX40hbAHx3s}}

{{YouTube:https://www.youtube.com/watch?v=6OPsH8PK7xM}}

{{YouTube:https://www.youtube.com/watch?v=pQsdygaYcE4}}

{{YouTube:https://www.youtube.com/watch?v=GCw07nZckps}}

{{YouTube:https://www.youtube.com/watch?v=ylItc6O3A4Y}}

{{YouTube:https://www.youtube.com/watch?v=BTC3JsV_cqE}}

{{YouTube:https://www.youtube.com/watch?v=DY5oF7I_yz4}}

{{YouTube:https://www.youtube.com/watch?v=-wlUDJZb6-Q}}

SAT and proof of NP-Completeness:

{{YouTube:https://www.youtube.com/watch?v=uAdVzz1hKYY}}

{{YouTube:https://www.youtube.com/watch?v=KeLE0lar-WA}}

{{YouTube:https://www.youtube.com/watch?v=Mu5HUvIojJA}}

{{YouTube:https://www.youtube.com/watch?v=tDDHjrd3FBg}}

{{YouTube:https://www.youtube.com/watch?v=1_fbpp7CLmY}}

{{YouTube:https://www.youtube.com/watch?v=WDgkkVq5IB0}}

{{YouTube:https://www.youtube.com/watch?v=nKNd9iExRO8}}

{{YouTube:https://www.youtube.com/watch?v=WDgkkVq5IB0}}

{{YouTube:https://www.youtube.com/watch?v=nKNd9iExRO8}}

{{YouTube:https://www.youtube.com/watch?v=QwGHBX2k8Xc}}

{{YouTube:https://www.youtube.com/watch?v=sJC5mBFPKcg}}

{{YouTube:https://www.youtube.com/watch?v=g8XTGcGfxTY}}

{{YouTube:https://www.youtube.com/watch?v=2G4BeSbHEyg}}

{{YouTube:https://www.youtube.com/watch?v=a-h3HTmv214}}

{{YouTube:https://www.youtube.com/watch?v=s7MY2c8bF3M}}

{{YouTube:https://www.youtube.com/watch?v=EIFZth8NS_Q}}

{{YouTube:https://www.youtube.com/watch?v=eZIhrrYgibc}}

{{YouTube:https://www.youtube.com/watch?v=tYsQax1JXIk}}

{{YouTube:https://www.youtube.com/watch?v=9hqpVp6zGl4}}

{{YouTube:https://www.youtube.com/watch?v=7I15IN7zEsM}}

{{YouTube:https://www.youtube.com/watch?v=C2tWSssGMBs}}

{{YouTube:https://www.youtube.com/watch?v=eU_zPPBjQPk}}

{{YouTube:https://www.youtube.com/watch?v=xAQQc1_RjD8}}

{{YouTube:https://www.youtube.com/watch?v=DcgPn2FtMlo}}

{{YouTube:https://www.youtube.com/watch?v=MYorPavtyqo}}

{{YouTube:https://www.youtube.com/watch?v=rSCtkJohumA}}


