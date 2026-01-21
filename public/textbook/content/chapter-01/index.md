# Chapter 1: Mathematics of Algorithm Complexity

This chapter develops the mathematical foundations for analyzing algorithm efficiency using asymptotic notation.

## Four Levels of Mastery

This textbook takes a different approach from traditional algorithm texts. Rather than beginning with proofs and/or implementations, each question on the final exam guides you through **four distinct levels of mastery** that mirror how experts tend to think about problems.  In a nutshell, for every algorithm or data structure on the exam, we'll cover (and you'll be assessed upon):

* **Level 0:** What is significant about this topic?  Why is this topic worth learning?
* **Level 1:** Explain the algorithm, data structure, or proof using diagrams, flow charts, psueducode, etc.  
* **Level 2:** Implement the algorithm and test it.
* **Level 3:** Give any necessary mathematical proofs of correctness or complexity (e.g. Big-O)

We'll put that into action here as we cover the various questions on the final.  

## Key Learning Goals

By the end of this chapter, you should be able to:

* Understand what Big-O, Big-Omega, and Big-Theta are
* Analyze the time complexity of various canonical algorithms
* Compare similar algorithms and predict their relative performance
* Understand when constant factors matter vs. when they don't
* Use Big-O as a tool to discuss the tradeoffs between insertion sort and selection sort

## What's this course about?

This book's final exam is carefully designed to be both 1) a learning tool and 2) an assessment tool.  We'll use the questions to sequence the content in this chapter; and I hope you'll use them to test yourself both as you read along, and after the fact to test your algorithm writing and analysis skills. 

The final exam begins with a question that tests you on the structure of the course itself, asking you to give a hierarchy of the key algorithms and data structures we cover.  

{{ExamQuestions:concept-map.yml question_filter:"course-overview" answersOpenByDefault:false videosOpenByDefault:true title: "Question 1"}}

{{ProTip:tip content:"Always watch any embedded videos (like the one above) before moving on."}}

Years after taking a class, the unfortunate reality is that you will likely forget a lot of the key ideas.  This is one reason that it's important to organize what you learn into a coherent structure.  Plus, a good structure will help you remember additional topics beyond this course.

{{ProTip:professor content:"If I could pick only one question you remember the answer to 1 year from now, it would be the one above!"}}


## What is Big-O?

Big-O is one of the key ideas in this course and an indispensable cognitive tool for any computer scientist.  If we write algorithms without understanding how they scale (or fail to scale), we are setting ourselves up for frustration, heartache, and even potential financial risk.  

> **Big-O** is a formal mathematical categorization of an algorithm's "computational complexity"; this is a synonym for "how much the algorithm slows down as the size of the input grows."  An algorithm with Big-O of O(1) is considered a "constant time" algorithm, meaning that it actually *doesn't* slow down as the input grows.  And, on the opposite end of the spectrum, a Big-O of O(2^n) is considered an "exponential time" algorithm, meaning that it slows down exponentially as the input grows.  Usually, this kind of slowdown is not good.

We embark on our quest to master this key topic with our first comparative example: a classic problem where there are two algorithmic solutions, each of which has a different "computational complexity."

{{ExamQuestions:concept-map.yml question_filter:"ch1-big-o-definition" answersOpenByDefault:false videosOpenByDefault:true title: "Question 2" maxVideos: 2}}

After you've watched the above video, consider the following pseudocode code for each solution.   Notice how reasoning about the loops (or lack of loops) is how we can classify each algorithm into its appropriate Big-O family.

  *Approach 1: Iterative (Loop)*
  ```
  FUNCTION sumToN(n):
      sum = 0
      FOR i = 1 TO n DO
          sum = sum + i
      RETURN sum
  ```
  Example: sumToN(5) = 1+2+3+4+5 = 15
  
  *Approach 2: Mathematical Formula (No Loops)*
  ```
  FUNCTION sumToN(n):
      RETURN n * (n + 1) / 2
  ```

In this next section, we'll give a few rules of thumb for how loop structures can help us classify algorithms.

### Loop "rules of thumb"

The ability to analyze loop structures is fundamental to understanding algorithm complexity. Loops and recursion are the mains way that we craft algorithms capable of processing inputs of various sizes.  So if we want to understand how an algorithm will scale with larger inputs, we often need look no further than the algorithm's loops.  Let's explore a few of the looping patterns that you're likely to see.

> **No loops?** Assuming the algorithm isn't looping by some other means (e.g. recursion), a loop-free algorithm is generally O(1).  It does the same amount of work regardless of the input size.  

```python
# O(1) - No loops
def get_first_element(arr):
    return arr[0]
```

> **Single loops?** If the loop variable increments by a constant and touches each element once, the complexity is often linear in the loop's range. But loops can be more subtle. A loop that increments by 2 still visits half the elements—but half of n is still O(n). Constants vanish in asymptotic analysis because they become negligible as n grows large.

```python
# O(n) - Single loop
def sum_array(arr):
    total = 0
    for num in arr:
        total += num
    return total
```

> **Multiplicative loops?**  When your loop variable multiplies or divides by a constant factor (like i *= 2 or i /= 2), you're often dealing with logarithmic growth. Why? Because you can only double or halve log n times before reaching n or 1. This is the mathematical foundation of binary search's efficiency.

```python
# O(log n) - Multiplicative loop
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

> **Nested loops?** This demands careful analysis. If both loops iterate over n elements, the complexity is often O(n²)—n iterations of n operations each. But if the inner loop's bound depends on the outer loop's variable (like j < i), we're counting a triangular number: 1 + 2 + 3 + ... + n = n(n+1)/2. The n² term dominates, so it's still O(n²), but the constant factor is roughly half.

```python
# O(n²) - Nested loops
def has_duplicates(arr):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j]:
                return True
    return False
```

> **Sequential loops?** Three consecutive O(n) loops give O(n) + O(n) + O(n) = O(3n) = O(n). The fastest-growing term dominates in sum, just as the largest term dominates in products.

```python
# O(n) - Sequential loops
def process_array(arr):
    # First pass: find max
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    
    # Second pass: find min
    min_val = arr[0]
    for num in arr:
        if num < min_val:
            min_val = num
    
    # Third pass: compute sum
    total = 0
    for num in arr:
        total += num
    
    return max_val, min_val, total
```

{{ProTip:tip content:"Just because you don't see a loop in the code, doesn't mean there isn't one (or many!) buried inside library calls."}}

{{ProTip:professor content:"These are just rules of thumb.  Even if you can see all of the loops, analyzing the complexity of some algorithms (especially recursive ones) can be a subtle and tricky.  More sophisticated algorithms from later in this textbook will clever mathematical techniques."}}

## Big-O, Big-Omega, and Big-Theta

If you're looking for a needle in a haystack, how long will it take?  Obviously, the answer is: It depends on how lucky you are.  Algorithms, too, can get lucky, and the mathematics of algorithm complexity handles this possibility by distinguishing between three related notions of how algorithms scale: Big-O, Big-Omega, and Big-Theta.

The following question is designed ensure that you understand this idea by asking you to understand a case where an algorithm's unlucky scenario is different from its lucky one.  Or to put it more mathematically: when the algorithm's Big-O does not equal it's Big-Omega.

{{ExamQuestions:concept-map.yml question_filter:"ch1-linear-search-complexity" answersOpenByDefault:false videosOpenByDefault:true title: "Question 3" maxVideos: 2}}

Here's a quick rundown of the difference between these three concepts.

### Understanding Big-O, Big-Ω, and Big-Θ

Although Big-O is our most common tool, when analyzing algorithms, we occasionally need two other tools in our toolbox:

**Big-O (O)** - Upper Bound (Worst Case)
- Describes the maximum time/space an algorithm will take
- "This algorithm takes **at most** O(n²) time"
- Example: Linear search is O(n) because in the worst case, you check every element

**Big-Omega (Ω)** - Lower Bound (Best Case)
- Describes the minimum time/space an algorithm requires
- "This algorithm takes **at least** Ω(1) time"
- Example: Linear search is Ω(1) because in the best case, you find the element immediately

**Big-Theta (Θ)** - Tight Bound (Average/Typical Case)
- Describes when upper and lower bounds match
- "This algorithm takes **exactly** Θ(n) time"
- Example: Finding the minimum in an array is Θ(n) because you must check every element.  In the best and worst case, the algorithm must do the same amount of work.

**How They Relate:**
- If best case = worst case, then we can use Θ (tight bound)
- If best case ≠ worst case, we use O for worst case and Ω for best case
- Think of them as: Ω ≤ Θ ≤ O

**Practical Example:**
```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```
- Best case (Ω): Target is first element → Ω(1)
- Worst case (O): Target is last or not present → O(n)
- Average case: Typically check half the array → Θ(n)

But can all algorithms sometimes get lucky even on large inputs?  Actually, no.  Some algorithms need to do the same amount of work no matter what.  This next question is designed to ensure that you can discuss at least one example of when Big-O and Big-Omega are the same. 

{{ExamQuestions:concept-map.yml question_filter:"ch1-find-minimum-complexity" answersOpenByDefault:false videosOpenByDefault:true title: "Question 4" maxVideos: 1}}

## When can we "Drop Terms"?

There's another key idea of Big-O that often trips up beginners: the idea of "ignoring things" or (as mathematicians put it) "dropping terms." 

Suppose an algorithm consists of several sequential sub-algorithms (a very common thing!).  The sub-algorithm's don't "add together" in the way you might expect -- at least not for the purposes of Big-O classification.

{{ProTip:tip content:"An algorithm with a Big-O of O(n) + O(n) + O(n) **could** be said to have Big-O of O(3n).  But believe it or not, you'll rarely see this!  Indeed we usually drop terms and 'round down' to a Big-O of O(n).  Why?  Because the purpose of Big-O notation is to classify algorithms into large families.  Linear growth is linear growth: thus O(3n) = O(n)"}}

This is a pretty good video about the topic.  The takeaway is: When we do Big-O analysis, we usually care more about the basic **shape** of the growth curve than the detailed growth behavior.

{{YouTube:https://www.youtube.com/watch?v=MyeV2_tGqvw}}

So sequential algorithms don't "add their complexity together" to make a more complex algorithm -- at least not insofar as Big-O analysis is concerned.  In fact, we can even ignore the slower sub-algorithms all together!

{{ProTip:tip content:"An algorithm with a Big-O of O(n) + O(1) is also said to have a Big-O of O(n).  We ignore the fast sub-algorithms and use the slowest ones to classify the overall algorithm."}}

For example, if your task is to find the exact **weight** of a needle in a haystack, then you must first 1) search for the needle, and 2) weigh the needle.  The sub-algorithm for weighing the needle is very quick (speed of weighing a needle doesn't depend on the size of the haystack), and although it adds some complexity to the overall algorithm, we tend to ignore such things when we do a Big-O analysis.  

{{ProTip:tip content:"An algorithm with a Big-O of O(n) + O(1) is also said to have a Big-O of O(n).  We ignore the more scalable sub-algorithms and use the least scalable ones to classify the overall algorithm."}}

What parts of an algorithm can (and should) be ignored is a key idea, and the next two questions on the exam ask you to demonstrate your knowledge of which terms can be dropped when analyzing Big-O.

{{ExamQuestions:concept-map.yml question_filter:"ch1-duplicate-detection-complexity" answersOpenByDefault:false videosOpenByDefault:true title: "Question 5" maxVideos: 1}}

{{ExamQuestions:concept-map.yml question_filter:"ch1-matrix-operations-complexity" answersOpenByDefault:false videosOpenByDefault:true title: "Question 6" maxVideos: 1}}

## Sorting Algorithms

The last two questions exam questions in this chapter are about two famous algorithms: insertion sort and selection sort.  They each solve the same problem ("sort an array") differently.  So which one is better?  This is a job for Big-O analysis!

{{ExamQuestions:concept-map.yml question_filter:"ch1-insertion-sort-implementation-and-analysis" answersOpenByDefault:false videosOpenByDefault:true title: "Question 7" maxVideos: 1}}

{{ExamQuestions:concept-map.yml question_filter:"ch1-selection-sort-implementation-and-analysis" answersOpenByDefault:false videosOpenByDefault:true title: "Question 8" maxVideos: 1}}

### Comparing Selection Sort and Insertion Sort

Both algorithms solve the sorting problem with O(n²) worst-case time complexity, but they differ in approach, stability, and practical performance.

#### Selection Sort

**Algorithm Intuition:**
Selection sort works by repeatedly finding the minimum element from the unsorted portion and placing it at the end of the sorted portion. It divides the array into sorted (left) and unsorted (right) regions, growing the sorted region one element at a time.

**Pseudocode:**
```
SELECTION_SORT(arr):
    n = length(arr)
    
    FOR i = 0 TO n-2 DO
        // Find minimum element in unsorted portion
        min_index = i
        FOR j = i+1 TO n-1 DO
            IF arr[j] < arr[min_index] THEN
                min_index = j
        
        // Swap minimum with first unsorted element
        SWAP arr[i] WITH arr[min_index]
    
    RETURN arr
```

**Complexity Analysis:**
- **Time Complexity:**
  - Best Case: O(n²) - Must scan unsorted portion every time, even if already sorted
  - Average Case: O(n²) - Always performs (n-1) + (n-2) + ... + 1 = n(n-1)/2 comparisons
  - Worst Case: O(n²) - Same as best case; input order doesn't change number of operations
  
- **Space Complexity:** O(1) - Sorts in place with only a few extra variables

- **Key Properties:**
  - **Not stable** - May change relative order of equal elements
  - **Minimizes swaps** - Exactly n-1 swaps, useful when writes are expensive
  - **Consistent performance** - Always O(n²), regardless of input


#### Insertion Sort

**Algorithm Intuition:**
Insertion sort builds the sorted array one element at a time by taking each element and inserting it into its correct position in the already-sorted portion. Like sorting playing cards in your hand.

**Pseudocode:**
```
INSERTION_SORT(arr):
    n = length(arr)
    
    FOR i = 1 TO n-1 DO
        key = arr[i]
        j = i - 1
        
        // Shift elements greater than key to the right
        WHILE j >= 0 AND arr[j] > key DO
            arr[j+1] = arr[j]
            j = j - 1
        
        // Insert key in correct position
        arr[j+1] = key
    
    RETURN arr
```

**Complexity Analysis:**
- **Time Complexity:**
  - Best Case: O(n) - Array already sorted, only n-1 comparisons needed
  - Average Case: O(n²) - On average, shift half the sorted elements for each insertion
  - Worst Case: O(n²) - Reverse sorted array, shift all elements each time
  
- **Space Complexity:** O(1) - Sorts in place with only a few extra variables

- **Key Properties:**
  - **Stable** - Preserves relative order of equal elements
  - **Adaptive** - Performs better on partially sorted data (best case O(n))
  - **Efficient for small arrays** - Low overhead makes it practical for small n
  - **Online** - Can sort data as it arrives


#### Which Is Better?

{{ProTip:tip content:"In computer science, the answer to 'Which is better?' is almost always 'It depends...'  But space and time complexity are always key factors to consider.  Thus, Big-O analysis is an indispensable tool for an in-depth look beneath the surface of 'It depends...'"}}

**Selection Sort Wins:**
- When writes/swaps are expensive (exactly n-1 swaps vs up to n²/2 shifts)
- When you want consistent, predictable performance
- When stability doesn't matter

**Insertion Sort Wins:**
- When data is nearly sorted (adaptive: O(n) best case vs O(n²))
- When you need a stable sort
- For small arrays in practice (better cache locality, fewer writes on average)
- When data arrives over time (online sorting)

**In Practice:** Most modern sorting libraries use insertion sort for small subarrays (typically n < 10-20) within more sophisticated algorithms like quicksort or mergesort. Its simplicity, low overhead, and adaptivity make it practical despite O(n²) worst case.


## Bonus Videos

{{YouTube:https://www.youtube.com/watch?v=XMUe3zFhM5c}}

{{YouTube:https://www.youtube.com/watch?v=BgLTDT03QtU}}

{{YouTube:https://www.youtube.com/watch?v=__vX2sjlpXU}}

{{YouTube:https://www.youtube.com/watch?v=Q_1M2JaijjQ}}

{{YouTube:https://www.youtube.com/watch?v=MyeV2_tGqvw}} 