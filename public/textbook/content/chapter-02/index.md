# Chapter 1: Arrays, Lists, and a Taste of Complexity Theory

This chapter introduces fundamental data structures and gives you a first look at how we analyze algorithm efficiency.

## Big Picture

Before diving into specifics, we'll explore how data structures relate to each other—from primitive data types all the way to complex graphs. We'll also survey the landscape of algorithms, from basic search techniques to the frontiers of computational complexity.

## Arrays and Lists

We'll examine two fundamental ways of organizing sequential data:

* **Arrays**: Fixed-size, contiguous memory with O(1) random access
* **Linked Lists**: Dynamic structures with O(1) insertion/deletion at known positions

You'll learn when to choose each structure based on your application's needs.

## Basic Sorting Algorithms

We'll implement and analyze two simple sorting algorithms:

* **Insertion Sort**: Builds sorted array one element at a time
* **Selection Sort**: Repeatedly finds minimum element and places it

These algorithms demonstrate fundamental algorithmic patterns and introduce Big-O notation for analyzing time complexity.

## Key Learning Goals

By the end of this chapter, you should be able to:

* Implement basic linked list operations
* Analyze the time complexity of array vs. list operations
* Choose appropriate data structures for different scenarios
* Implement and analyze insertion sort and selection sort
* Understand when O(n²) sorting algorithms are appropriate

## Code

### Understanding Linked Lists

The linked list is one of the most fundamental data structures in computer science, yet it represents a profound shift in how we think about organizing data in memory. Unlike arrays, which demand contiguous blocks of memory, linked lists embrace the fragmented nature of memory allocation, connecting scattered pieces through the elegant mechanism of pointers.

At its heart, a linked list is a chain of nodes, where each node contains two essential components: the data it stores and a reference (or pointer) to the next node in the sequence. This simple structure gives rise to remarkable properties. Consider insertion at the beginning of the list—in an array, this operation requires shifting every element one position to the right, a linear-time operation. But in a linked list? We simply create a new node, point it to the current head, and update our head reference. Three pointer assignments, constant time, regardless of list size.

However, this flexibility comes at a cost. Random access, the ability to jump directly to the 50th element, requires traversing all preceding nodes. What takes O(1) time in an array becomes O(n) in a linked list. This trade-off—constant-time insertion and deletion versus linear-time access—is fundamental to understanding when to choose each structure.

The implementation below demonstrates a generic linked list in Java. Notice how the Node class is declared as a static inner class—this is a common pattern that keeps the node implementation encapsulated while avoiding unnecessary references to the outer class. The generic type parameter `<T>` makes our list reusable for any reference type, embodying the principle of code reusability that's central to modern software engineering.

**Pseudocode:**
```
CLASS LinkedList:
    head ← null
    size ← 0
    
    FUNCTION addFirst(data):
        newNode ← CREATE Node(data)
        newNode.next ← head
        head ← newNode
        size ← size + 1
    
    FUNCTION addLast(data):
        newNode ← CREATE Node(data)
        IF head = null THEN
            head ← newNode
        ELSE
            current ← head
            WHILE current.next ≠ null DO
                current ← current.next
            current.next ← newNode
        size ← size + 1
    
    FUNCTION removeFirst():
        IF head = null THEN
            ERROR "List is empty"
        data ← head.data
        head ← head.next
        size ← size - 1
        RETURN data
    
    FUNCTION contains(data):
        current ← head
        WHILE current ≠ null DO
            IF current.data = data THEN
                RETURN true
            current ← current.next
        RETURN false
```

**Java Implementation:**
```java
public class LinkedList<T> {
    private Node<T> head;
    private int size;
    
    private static class Node<T> {
        T data;
        Node<T> next;
        
        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }
    
    public LinkedList() {
        this.head = null;
        this.size = 0;
    }
    
    // O(1) - Insert at beginning
    public void addFirst(T data) {
        Node<T> newNode = new Node<>(data);
        newNode.next = head;
        head = newNode;
        size++;
    }
    
    // O(n) - Insert at end
    public void addLast(T data) {
        Node<T> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
        } else {
            Node<T> current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }
    
    // O(1) - Remove first element
    public T removeFirst() {
        if (head == null) {
            throw new IllegalStateException("List is empty");
        }
        T data = head.data;
        head = head.next;
        size--;
        return data;
    }
    
    // O(n) - Search for element
    public boolean contains(T data) {
        Node<T> current = head;
        while (current != null) {
            if (current.data.equals(data)) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
    // O(n) - Get element at index
    public T get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }
        Node<T> current = head;
        for (int i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }
    
    public int size() {
        return size;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
}
```

**Key Insights on Linked Lists:**

The beauty of linked lists lies in their dynamic nature. Memory allocation happens on-demand, node by node, making them ideal for situations where the size of your collection is unknown or frequently changing. The `addFirst` operation showcases this perfectly—it's always O(1), whether your list has 10 elements or 10 million.

However, notice the `get(int index)` method. It must traverse the list from the beginning, visiting each node until it reaches the target index. This sequential access pattern is the Achilles' heel of linked lists. If your algorithm requires frequent random access, a linked list will become a performance bottleneck.

The `contains` method illustrates another important consideration: searching in an unsorted linked list is inherently linear. Without the ability to jump to arbitrary positions, we must check each element in sequence. This is why sorted arrays, despite their insertion costs, often outperform linked lists for search-heavy workloads—they enable binary search.

### The Power of Dynamic Arrays

If linked lists represent freedom from contiguous memory, dynamic arrays represent the best of both worlds—the random access speed of arrays with the growth flexibility of linked lists. The key insight is amortized analysis: while occasionally we must pay the cost of resizing, these expensive operations happen so infrequently that the average cost per insertion remains constant.

Consider what happens when an ArrayList fills up. We can't simply extend the array in place—memory fragmentation might have allocated the adjacent space to another process. Instead, we allocate a new, larger array (typically double the size), copy all existing elements, and redirect our reference. This copying operation is O(n), seemingly destroying our insertion performance.

But here's the beautiful mathematics of amortization: if we double the capacity each time, we resize on inserts number 1, 2, 4, 8, 16, 32, and so on. The total cost of copying after n insertions is 1 + 2 + 4 + 8 + ... ≈ 2n operations. Distributed across n insertions, that's an average of 2 operations per insertion—constant time!

This doubling strategy creates an elegant balance. Double too aggressively (say, multiply by 10), and you waste memory. Double too conservatively (add a fixed amount), and you resize too frequently, degrading performance. The factor of 2 sits in the sweet spot, proving that sometimes the right constant matters as much as the asymptotic complexity.

**Pseudocode:**
```
CLASS DynamicArray:
    array ← new Array[10]
    size ← 0
    capacity ← 10
    
    FUNCTION add(element):
        IF size = capacity THEN
            resize()
        array[size] ← element
        size ← size + 1
    
    FUNCTION get(index):
        IF index < 0 OR index ≥ size THEN
            ERROR "Index out of bounds"
        RETURN array[index]
    
    FUNCTION remove(index):
        IF index < 0 OR index ≥ size THEN
            ERROR "Index out of bounds"
        element ← array[index]
        FOR i ← index TO size - 2 DO
            array[i] ← array[i + 1]
        array[size - 1] ← null
        size ← size - 1
        RETURN element
    
    FUNCTION resize():
        capacity ← capacity × 2
        newArray ← new Array[capacity]
        COPY array TO newArray
        array ← newArray
```

**Java Implementation:**
```java
public class DynamicArray<T> {
    private Object[] array;
    private int size;
    private int capacity;
    
    public DynamicArray() {
        this.capacity = 10;
        this.array = new Object[capacity];
        this.size = 0;
    }
    
    // O(1) amortized - Add element
    public void add(T element) {
        if (size == capacity) {
            resize();
        }
        array[size++] = element;
    }
    
    // O(1) - Get element at index
    @SuppressWarnings("unchecked")
    public T get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }
        return (T) array[index];
    }
    
    // O(1) - Set element at index
    public void set(int index, T element) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }
        array[index] = element;
    }
    
    // O(n) - Remove element at index
    @SuppressWarnings("unchecked")
    public T remove(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException();
        }
        T element = (T) array[index];
        for (int i = index; i < size - 1; i++) {
            array[i] = array[i + 1];
        }
        array[--size] = null;
        return element;
    }
    
    // O(n) - Resize array when capacity is reached
    private void resize() {
        capacity *= 2;
        Object[] newArray = new Object[capacity];
        System.arraycopy(array, 0, newArray, 0, size);
        array = newArray;
    }
    
    public int size() {
        return size;
    }
}
```

**Understanding Dynamic Arrays:**

The implementation above reveals several crucial design decisions. First, notice the use of `Object[]` rather than a generic array. Java's type erasure prevents direct creation of generic arrays (`new T[capacity]` won't compile), forcing us to use `Object[]` and cast when retrieving elements. This is a technical limitation, but one that doesn't affect the algorithmic properties we care about.

The `remove` method exposes the cost of maintaining contiguous storage. Removing an element from the middle requires shifting all subsequent elements left by one position—an O(n) operation. This stands in stark contrast to linked lists, where removal at a known position is O(1). Yet ArrayList remains the default choice for most applications because random access is simply more common than mid-list deletion in practice.

The `resize` method uses `System.arraycopy`, a native method optimized at the JVM level for fast array copying. While we could use a loop, `arraycopy` often leverages processor-specific instructions for block memory moves, demonstrating how theoretical complexity analysis meets practical performance optimization.

### Insertion Sort: The Intuitive Algorithm

Insertion sort embodies one of the most natural approaches to sorting: the way humans organize a hand of playing cards. Pick up cards one at a time, and insert each into its correct position among the already-sorted cards. This intuitive process translates directly into an algorithm of remarkable simplicity and surprising utility.

The algorithm maintains a simple invariant: at the start of iteration i, the first i elements are sorted among themselves. We then insert element i into its correct position within this sorted prefix, maintaining the invariant. When i reaches the end, the entire array is sorted—a textbook example of loop invariant reasoning.

Why study an O(n²) algorithm when we have O(n log n) alternatives? Because insertion sort has properties that sophisticated algorithms lack. It's **adaptive**—if the input is nearly sorted, insertion sort approaches O(n) time, as elements need minimal shifting. It's **online**—you can sort elements as they arrive, without knowing the full dataset upfront. And it's **stable**—equal elements maintain their relative order, crucial for multi-key sorting scenarios.

For small arrays (typically under 10-20 elements), insertion sort often outperforms merge sort and quicksort due to lower constant factors and better cache locality. This is why many optimized sorting implementations, including Java's `Arrays.sort`, switch to insertion sort for small subarrays. Understanding when a "slow" algorithm outperforms a "fast" one teaches us that big-O notation tells only part of the story.

**Pseudocode:**
```
FUNCTION insertionSort(arr):
    FOR i ← 1 TO length(arr) - 1 DO
        key ← arr[i]
        j ← i - 1
        
        // Move elements greater than key one position ahead
        WHILE j ≥ 0 AND arr[j] > key DO
            arr[j + 1] ← arr[j]
            j ← j - 1
        
        arr[j + 1] ← key
```

**Java Implementation:**
```java
public class InsertionSort {
    // O(n²) worst case, O(n) best case (already sorted)
    // Stable sort, in-place
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            
            // Move elements greater than key one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
    
    // Generic version
    public static <T extends Comparable<T>> void insertionSort(T[] arr) {
        for (int i = 1; i < arr.length; i++) {
            T key = arr[i];
            int j = i - 1;
            
            while (j >= 0 && arr[j].compareTo(key) > 0) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
}
```

**The Mechanics of Insertion Sort:**

The inner while loop performs the critical work of insertion sort. It shifts elements rightward, creating a "hole" into which we can insert the key element. This shifting happens in reverse order—starting from position i-1 and working backward—because we're inserting into an already-sorted region.

Notice the generic version uses `Comparable<T>`, Java's interface for defining natural ordering. This allows our sort to work with any type that defines a comparison operation. The `extends Comparable<T>` bound ensures type safety—we can't accidentally try to sort objects that don't know how to compare themselves.

The best case scenario occurs when the array is already sorted. Each element is already in the correct position, so the inner while loop never executes. We simply scan through the array once—O(n) time. Contrast this with many O(n log n) algorithms that take the same time regardless of input order. This adaptiveness makes insertion sort ideal for maintaining a sorted list as new elements arrive.

### Selection Sort: Systematic Minimums

Selection sort takes a different philosophical approach to sorting: rather than inserting elements into a growing sorted region, it repeatedly selects the minimum element from the unsorted region and appends it to the sorted region. This mechanical simplicity comes with interesting trade-offs.

The algorithm divides the array into two logical regions: a sorted prefix and an unsorted suffix. In each iteration, it finds the minimum element in the unsorted suffix and swaps it with the first unsorted element, effectively growing the sorted prefix by one element. After n-1 iterations, only one element remains in the unsorted region, which must be the maximum—the array is sorted.

What makes selection sort distinctive is its **consistency**. Unlike insertion sort, which varies from O(n) to O(n²) based on input order, selection sort always performs exactly the same number of comparisons: (n-1) + (n-2) + ... + 1 = n(n-1)/2. The inner loop always searches the entire unsorted region, regardless of the data's arrangement. This predictability can be valuable in real-time systems where worst-case guarantees matter more than average-case performance.

However, this consistency comes at a cost: selection sort isn't stable. When we swap the minimum element to the front, we might move it past equal elements, disrupting their original order. Consider sorting [4a, 3, 4b, 2] by value. Selection sort might produce [2, 3, 4b, 4a], reversing the 4's order. For multi-key sorting (e.g., sorting students by grade, then by name), this instability can be problematic.

The algorithm's saving grace is its minimal number of swaps: at most n-1. If swaps are expensive—perhaps you're sorting large objects or writing to slow storage—selection sort's O(n) swaps can outweigh its O(n²) comparisons. This is a perfect example of how real-world constraints can make a theoretically inferior algorithm practically superior.

**Pseudocode:**
```
FUNCTION selectionSort(arr):
    FOR i ← 0 TO length(arr) - 2 DO
        minIndex ← i
        
        // Find the minimum element in unsorted portion
        FOR j ← i + 1 TO length(arr) - 1 DO
            IF arr[j] < arr[minIndex] THEN
                minIndex ← j
        
        // Swap minimum element with first unsorted element
        IF minIndex ≠ i THEN
            SWAP arr[i] AND arr[minIndex]
```

**Java Implementation:**
```java
public class SelectionSort {
    // O(n²) in all cases
    // Not stable, in-place
    public static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            
            // Find the minimum element in unsorted portion
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap minimum element with first unsorted element
            if (minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
    
    // Generic version
    public static <T extends Comparable<T>> void selectionSort(T[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j].compareTo(arr[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            
            if (minIndex != i) {
                T temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
}
```

**Comparing the Quadratic Sorts:**

Both insertion sort and selection sort live in the O(n²) complexity class, yet they occupy different niches in the algorithmic ecosystem. Insertion sort shines with nearly-sorted data and as an online algorithm, while selection sort offers predictable performance and minimal swaps. Neither will win performance competitions on large datasets, yet both remain relevant in modern computing.

The choice between them reveals a deeper truth about algorithm design: context matters more than complexity class. In a system that sorts thousands of small arrays, insertion sort's cache-friendly access pattern and adaptive behavior likely make it the winner. In an embedded system writing to flash memory with limited write cycles, selection sort's few swaps become invaluable. And for teaching? Both illuminate fundamental concepts—loop invariants, stability, adaptiveness—that apply to all sorting algorithms.

As we progress through this course, we'll encounter faster sorting algorithms: merge sort's guaranteed O(n log n) performance, quicksort's practical speed, and heapsort's optimal worst-case behavior. Yet these simple O(n²) sorts remain our foundation. They prove that elegant code need not be complex, that slow algorithms can outperform fast ones in the right context, and that understanding trade-offs is more valuable than memorizing complexities.

## Bonus Videos

Lists vs Arrays:

{{YouTube:https://www.youtube.com/watch?v=xFMXIgvlgcY}}

{{YouTube:https://www.youtube.com/watch?v=lC-yYCOnN8Q}}

{{YouTube:https://www.youtube.com/watch?v=dMy2hq9OUMc}}

{{YouTube:https://www.youtube.com/watch?v=34ky600VTN0}}

Insertion Sort:

{{YouTube:https://www.youtube.com/watch?v=TZRWRjq2CAg}}

{{YouTube:https://www.youtube.com/watch?v=JU767SDMDvA}}

{{YouTube:https://www.youtube.com/watch?v=8mJ-OhcfpYg}}

Selection Sort:

* https://www.youtube.com/watch?v=g-PGLbMth_g
* https://www.youtube.com/watch?v=EwjnF7rFLns
* https://www.youtube.com/watch?v=Iccmrk2ZWoc
* https://www.youtube.com/watch?v=dsqsnngsoD8
