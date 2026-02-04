# Chapter 2: Recursion, Trees, and Graphs

This chapter explores recursive algorithms and the hierarchical and networked data structures that naturally support them.

## Key Learning Goals

By the end of this chapter, you should be able to:

* Write and analyze recursive algorithms
* Solve recurrence relations using multiple techniques
* Choose appropriate tree structures for different applications
* Implement BFS and DFS traversal algorithms
* Apply Dijkstra's algorithm to find shortest paths
* Use Prim's or Kruskal's to find minimum spanning trees
* Prove correctness of greedy graph algorithms

## Understanding Recursion

Recursion is one of the most powerful problem-solving techniques in computer science. At its essence, a recursive function calls itself with a simpler version of the problem until reaching a base case. This mirrors mathematical induction: prove the base case, then show that solving a smaller problem leads to solving the larger one.

The classic example—computing factorial—demonstrates both recursion's elegance and its correspondence to mathematical definitions. But recursion also reveals a critical danger: the naive Fibonacci implementation recomputes values exponentially many times, making it impractical beyond small inputs.

{{ExamQuestions:concept-map.yml question_filter:"ch2-iterative-vs-recursive" answersOpenByDefault:false videosOpenByDefault:true title: "Question 1" maxVideos: 2}}

### Memoization: Transforming Exponential to Linear

The naive recursive Fibonacci implementation has O(2ⁿ) complexity—catastrophically inefficient. Each call spawns two more calls, creating an exponential tree of redundant computation. But adding a simple cache transforms this into O(n) by ensuring each Fibonacci number is computed exactly once.

{{ProTip:tip content:"Memoization exemplifies a crucial principle: sometimes the right data structure (here, a cache) turns an impractical algorithm into a practical one."}}

This technique—trading space for time—is fundamental to dynamic programming, which we'll explore in later chapters.

{{ExamQuestions:concept-map.yml question_filter:"ch2-fibonacci-call-tree-optimizations-and-analysis" answersOpenByDefault:false videosOpenByDefault:true title: "Question 2" maxVideos: 3}}

### Intro to Recurrence Relations 

My 3rd video walks through a proof, which (for the sake of reference) I'll write out here in a a more formal manner.

A recurrence relation expresses the running time of an algorithm in terms of its running time on smaller inputs. For the naive Fibonacci algorithm, we can write:

$$T(n) = T(n-1) + T(n-2) + c$$

where $c$ represents the constant time for the base case check and addition operation.

**Proving the O(2^n) Upper Bound:**

**Step 1: Simplify the recurrence relation**

Since $T(n-2) < T(n-1)$ for $n > 1$ (the function is monotonically increasing), we can establish an upper bound:

$$T(n) = T(n-1) + T(n-2) + c < T(n-1) + T(n-1) + c = 2T(n-1) + c$$

**Step 2: Unroll the recursion to find the pattern**

Let's expand this recursion a few times to see the pattern:

$$T(n) < 2T(n-1) + c$$

$$T(n) < 2[2T(n-2) + c] + c = 2^2T(n-2) + 2c + c = 2^2T(n-2) + (2^1 + 2^0)c$$

$$T(n) < 2^2[2T(n-3) + c] + (2^1 + 2^0)c = 2^3T(n-3) + 2^2c + 2c + c$$

$$T(n) < 2^3T(n-3) + (2^2 + 2^1 + 2^0)c$$

**Step 3: Generalize the pattern**

After $k$ iterations, we can see the pattern:

$$T(n) < 2^kT(n-k) + (2^{k-1} + 2^{k-2} + \cdots + 2^1 + 2^0)c$$

The sum of the geometric series $2^0 + 2^1 + \cdots + 2^{k-1}$ equals $2^k - 1$, so:

$$T(n) < 2^kT(n-k) + (2^k - 1)c$$

**Step 4: Set k = n to reach the base case**

When $k = n$, we reach $T(0)$, which is our base case with value $c$:

$$T(n) < 2^nT(0) + (2^n - 1)c = 2^n \cdot c + (2^n - 1)c$$

$$T(n) < c \cdot 2^n + c \cdot 2^n - c = 2c \cdot 2^n - c$$

Since $-c$ is negative (and we're establishing an upper bound), we can simplify:

$$T(n) < 2c \cdot 2^n$$

**Step 5: Apply the formal definition of Big-O**

Recall from Chapter 1 that $f(n) \in O(g(n))$ if and only if there exist positive constants $d$ and $n_0$ such that for all $n \geq n_0$:

$$0 \leq f(n) \leq d \cdot g(n)$$

In our case, we've shown that:
$$T(n) < 2c \cdot 2^n$$

Let $d = 2c$. Then for all $n \geq n_0 = 0$, we have:
$$T(n) \leq d \cdot 2^n$$

This satisfies the formal definition of Big-O. Therefore, $T(n) \in O(2^n)$. ∎

This exponential growth explains why the naive Fibonacci algorithm becomes impractical even for modest inputs: computing $F(50)$ requires over $2^{50} \approx 10^{15}$ operations!

## Binary Search Trees

Binary Search Trees (BSTs) combine the fast search of sorted arrays with efficient insertion of linked lists—at least when balanced. The BST property is elegantly simple: for every node, all values in its left subtree are smaller, and all values in its right subtree are larger.

With a balanced BST, search, insertion, and deletion all take O(log n) time. But there's a catch: insert sorted data and you get a linked list masquerading as a tree, with O(n) operations. This fragility is why self-balancing trees matter.

{{ExamQuestions:concept-map.yml question_filter:"ch2-bst-avl-redblack-comparison" answersOpenByDefault:false videosOpenByDefault:true title: "Question 3" maxVideos: 2}}

## AVL Trees: Guaranteed Balance

AVL trees enforce a strict balance invariant: for every node, the heights of its left and right subtrees differ by at most 1. This simple constraint guarantees O(log n) height regardless of insertion order. The mechanism? Tree rotations—local O(1) operations that restore balance.

{{ProTip:professor content:"The beauty of rotations is that they're local operations—O(1) time—yet they can rebalance the entire tree."}}

## Red-Black Trees: Practical Balance

Red-Black trees use node colors to maintain looser balance constraints than AVL trees. The longest path is at most twice the shortest, ensuring O(log n) height. Many insertions can be fixed by recoloring alone, making Red-Black trees the choice for production systems like Java's TreeMap.

## Graph Representation and Traversal

Graphs model networks, relationships, dependencies, maps—any scenario where entities have pairwise connections. Unlike trees, graphs embrace cycles and multiple paths, making them both more powerful and more complex.

Graph representation matters: adjacency matrices use O(V²) space with O(1) edge lookup; adjacency lists use O(V + E) space with O(degree) neighbor iteration. For sparse graphs, lists win.

{{ExamQuestions:concept-map.yml question_filter:"ch2-graph-representation" answersOpenByDefault:false videosOpenByDefault:true title: "Question 4" maxVideos: 2}}

### Breadth-First Search

BFS explores graphs layer by layer using a queue. Visit all neighbors before visiting neighbors' neighbors. This layered exploration makes BFS ideal for finding shortest paths in unweighted graphs.

DFS explores deeply before backtracking, using recursion or a stack. Each recursive call follows one edge, exploring that branch completely before trying alternatives. This makes DFS natural for detecting cycles and computing topological orderings.

{{ExamQuestions:concept-map.yml question_filter:"ch2-graph-traversal-connectivity" answersOpenByDefault:false videosOpenByDefault:true title: "Question 5" maxVideos: 2}}

## Dijkstra's Algorithm

Dijkstra's algorithm solves single-source shortest paths for graphs with non-negative edge weights. It's greedy: repeatedly select the unvisited vertex with minimum distance, then update distances to its neighbors.

{{ProTip:tip content:"Once we've selected a vertex as having minimum distance, that distance is final—we've found the shortest path to it."}}

The priority queue is crucial for efficiency, reducing complexity from O(V²) to O((V + E) log V).

{{ExamQuestions:concept-map.yml question_filter:"ch2-dijkstra-algorithm" answersOpenByDefault:false videosOpenByDefault:true title: "Question 6" maxVideos: 3}}

## Minimum Spanning Trees

A minimum spanning tree (MST) connects all vertices with minimum total edge weight using exactly V-1 edges. Two classical greedy algorithms solve this: Prim's and Kruskal's.

### Prim's Algorithm

Prim's grows a single tree from a starting vertex, always adding the minimum-weight edge that extends it. Similar to Dijkstra's but selects by edge weight rather than cumulative distance.

### Kruskal's Algorithm and Union-Find

Kruskal's takes a global view: sort all edges by weight, then add edges greedily if they don't create cycles. The Union-Find data structure efficiently detects cycles in nearly constant time.

{{ProTip:professor content:"Union-Find achieves nearly constant time per operation through path compression and union by rank—effectively O(α(n)) where α is the inverse Ackermann function."}}

{{ExamQuestions:concept-map.yml question_filter:"ch2-minimum-spanning-trees" answersOpenByDefault:false videosOpenByDefault:true title: "Question 7" maxVideos: 3}}

## Bonus Videos

{{YouTube:https://www.youtube.com/watch?v=hmSFuM2Tglw}}

{{YouTube:https://www.youtube.com/watch?v=jDM6_TnYIqE}}

{{YouTube:https://www.youtube.com/watch?v=zP2xbKerIds}}

{{YouTube:https://www.youtube.com/watch?v=qvZGUFHWChY}}

{{YouTube:https://www.youtube.com/watch?v=95s3ndZRGbk}}

{{YouTube:https://www.youtube.com/watch?v=K1a2Bk8NrYQ}}

{{YouTube:https://www.youtube.com/watch?v=-VgHk7UMPP4}}

{{YouTube:https://www.youtube.com/watch?v=DBRW8nwZV-g}}

{{YouTube:https://www.youtube.com/watch?v=ze-poffnS1E}}

{{YouTube:https://www.youtube.com/watch?v=cS-198wtfj0}}

{{YouTube:https://www.youtube.com/watch?v=HZ5YTanv5QE}}

{{YouTube:https://www.youtube.com/watch?v=TIbUeeksXcI}}

{{YouTube:https://www.youtube.com/watch?v=pcKY4hjDrxk}}

{{YouTube:https://www.youtube.com/watch?v=0u78hx-66Xk}}

{{YouTube:https://www.youtube.com/watch?v=Y40bRyPQQr0}}

{{YouTube:https://www.youtube.com/watch?v=xlVX7dXLS64}}

{{YouTube:https://www.youtube.com/watch?v=EFg3u_E6eHU}}

{{YouTube:https://www.youtube.com/watch?v=_lHSawdgXpI}}

{{YouTube:https://www.youtube.com/watch?v=GazC3A4OQTE}}

{{YouTube:https://www.youtube.com/watch?v=K_1urzWrzLs}}

{{YouTube:https://www.youtube.com/watch?v=bZkzH5x0SKU}}

{{YouTube:https://www.youtube.com/watch?v=71Z-Jpnm3D4}}

{{YouTube:https://www.youtube.com/watch?v=j0OUwduDOS0}}

{{YouTube:https://www.youtube.com/watch?v=Yldkh0aOEcg}}

{{YouTube:https://www.youtube.com/watch?v=qOv8K-AJ7o0}}

{{YouTube:https://www.youtube.com/watch?v=6LikZhGLRgU}}

{{YouTube:https://www.youtube.com/watch?v=4ZlRH0eK-qQ}}

{{YouTube:https://www.youtube.com/watch?v=cplfcGZmX7I}}

{{YouTube:https://www.youtube.com/watch?v=71UQH7Pr9kU}}

{{YouTube:https://www.youtube.com/watch?v=vmWSnkBVvQ0}}

{{YouTube:https://www.youtube.com/watch?v=EHRqQBlZAtU}}

{{YouTube:https://www.youtube.com/watch?v=jsmMtJpPnhU}}

{{YouTube:https://www.youtube.com/watch?v=eB61LXLZVqs}}

{{YouTube:https://www.youtube.com/watch?v=3fU0w9XZjAA}}