# Chapter 2: Recursion, Trees, and Graphs

This chapter explores recursive algorithms and the hierarchical and networked data structures that naturally support them.

## Recursion

Recursion is a powerful problem-solving technique where functions call themselves. You'll learn:

* How recursion relates to iteration
* Writing and solving recurrence relations
* Analyzing recursive algorithms (including the Fibonacci sequence)
* Optimization techniques like memoization

## Tree Data Structures

Trees provide hierarchical organization with efficient search and modification. We'll compare:

* **Binary Search Trees (BSTs)**: Simple but potentially unbalanced
* **AVL Trees**: Strict balance guarantees faster lookups
* **Red-Black Trees**: Looser balance, fewer rotations
* **B-Trees**: Multi-way trees optimized for disk access

## Graph Algorithms

Graphs model relationships and networks. You'll master:

* **Representation**: Adjacency matrices vs. adjacency lists
* **Traversal**: BFS and DFS for exploring graphs
* **Shortest Paths**: BFS for unweighted graphs, Dijkstra for weighted
* **Minimum Spanning Trees**: Prim's and Kruskal's algorithms

## Key Learning Goals

By the end of this chapter, you should be able to:

* Write and analyze recursive algorithms
* Solve recurrence relations using multiple techniques
* Choose appropriate tree structures for different applications
* Implement BFS and DFS traversal algorithms
* Apply Dijkstra's algorithm to find shortest paths
* Use Prim's or Kruskal's to find minimum spanning trees
* Prove correctness of greedy graph algorithms

## Code

### The Power and Peril of Recursion

Recursion is perhaps the most elegant and the most dangerous tool in a programmer's arsenal. At its essence, recursion is a function calling itself—a seemingly circular definition that, through the magic of base cases, produces correct results. Recursion transforms complex problems into simpler versions of themselves, building solutions from the ground up through the call stack.

The beauty of recursion lies in its correspondence to mathematical induction. To prove a property holds for all natural numbers, we prove it for 0 (base case) and show that if it holds for n, it holds for n+1 (inductive step). Recursive functions follow the same pattern: handle the base case, then reduce the problem toward the base case. This mathematical foundation gives recursive solutions an almost proof-like quality.

But recursion's elegance masks danger. Each recursive call consumes stack space, and the call stack is finite. Deeply recursive algorithms can exhaust stack memory, causing runtime errors. Moreover, naive recursion can perform redundant computation—calculating the same values repeatedly without remembering previous results.

The Fibonacci sequence perfectly illustrates both recursion's beauty and its pitfalls. The mathematical definition is inherently recursive: F(n) = F(n-1) + F(n-2). A direct translation into code seems natural, even obvious. Yet this naive implementation is catastrophically inefficient, recomputing the same values exponentially many times.

Enter memoization: the technique of caching results to avoid redundant computation. By storing each Fibonacci number when we first compute it, we transform an exponential algorithm into a linear one. This isn't just an optimization—it's a fundamental transformation of the algorithm's complexity class. Memoization exemplifies a crucial principle: sometimes the right data structure (here, a cache) turns an impractical algorithm into a practical one.

**Pseudocode:**
```
// Factorial - O(n) time, O(n) space
FUNCTION factorial(n):
    IF n ≤ 1 THEN
        RETURN 1
    RETURN n * factorial(n - 1)

// Naive Fibonacci - O(2ⁿ) time, O(n) space
FUNCTION fibonacciNaive(n):
    IF n ≤ 1 THEN
        RETURN n
    RETURN fibonacciNaive(n - 1) + fibonacciNaive(n - 2)

// Memoized Fibonacci - O(n) time, O(n) space
memo ← EMPTY MAP
FUNCTION fibonacciMemo(n):
    IF n ≤ 1 THEN
        RETURN n
    IF memo CONTAINS n THEN
        RETURN memo[n]
    result ← fibonacciMemo(n - 1) + fibonacciMemo(n - 2)
    memo[n] ← result
    RETURN result
```

**Java Implementation:**
```java
public class RecursionExamples {
    
    // Factorial: O(n) time, O(n) space (call stack)
    public static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
    // Fibonacci - Naive: O(2ⁿ) time, O(n) space
    public static int fibonacciNaive(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
    }
    
    // Fibonacci - Memoized: O(n) time, O(n) space
    public static int fibonacciMemo(int n) {
        return fibonacciMemo(n, new int[n + 1]);
    }
    
    private static int fibonacciMemo(int n, int[] memo) {
        if (n <= 1) {
            return n;
        }
        if (memo[n] != 0) {
            return memo[n];
        }
        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        return memo[n];
    }
}
```

**Recursion in Practice:**

The factorial function demonstrates recursion at its simplest: a single recursive call that makes the problem smaller. Each call to `factorial(n)` becomes `n * factorial(n-1)`, reducing n by 1 until reaching the base case. The call stack grows to depth n, then unwinds, multiplying values as it collapses.

The naive Fibonacci implementation reveals recursion's dark side. To compute fibonacci(5), we compute fibonacci(4) and fibonacci(3). But fibonacci(4) recomputes fibonacci(3), and both recompute fibonacci(2) multiple times. The recursion tree has exponential nodes, even though there are only n unique values to compute. This explosion of redundant work makes the algorithm impractical beyond tiny inputs.

The memoized version changes everything. The memo array acts as a cache—before computing fibonacci(n), we check if we've already computed it. If so, return the cached value. If not, compute it, cache it, then return it. This simple addition means each Fibonacci number is computed exactly once. The call tree's redundant branches are pruned away, leaving a linear chain of unique computations. We've transformed O(2ⁿ) into O(n) by adding O(n) space—a classic space-time tradeoff.

### Binary Search Trees: Elegant but Fragile

The binary search tree (BST) is one of computer science's foundational data structures. It combines the fast search of sorted arrays with the efficient insertion of linked lists—at least in theory. The BST property is elegantly simple: for every node, all values in its left subtree are smaller, and all values in its right subtree are larger. This recursive structure enables recursive algorithms of corresponding elegance.

With a balanced BST, search, insertion, and deletion all take O(log n) time. The tree's height is logarithmic, and each operation descends one level per comparison, giving logarithmic performance. This is the promise that makes BSTs attractive: logarithmic operations without the complexity of array-based structures.

But there's a catch—a potentially devastating one. BSTs only achieve O(log n) performance when balanced. Insert sorted data into a BST, and you get a linked list masquerading as a tree: every node has only a right child, creating a degenerate tree of height n. Now every operation is O(n), worse than a simple array.

This fragility is why we need self-balancing trees: AVL trees, Red-Black trees, B-trees. These structures guarantee balance through strategic rotations and recoloring, ensuring that even adversarial insertion patterns maintain logarithmic height. The simple BST is beautiful and instructive, but production systems demand the guarantees that self-balancing trees provide.

**Pseudocode:**
```
// BST Insert - O(log n) average, O(n) worst case
FUNCTION insert(root, value):
    IF root = NULL THEN
        RETURN NEW NODE(value)
    IF value < root.data THEN
        root.left ← insert(root.left, value)
    ELSE IF value > root.data THEN
        root.right ← insert(root.right, value)
    RETURN root

// BST Search - O(log n) average, O(n) worst case
FUNCTION search(root, value):
    IF root = NULL THEN
        RETURN false
    IF root.data = value THEN
        RETURN true
    IF value < root.data THEN
        RETURN search(root.left, value)
    RETURN search(root.right, value)

// Inorder Traversal - O(n) time
FUNCTION inorder(root):
    IF root ≠ NULL THEN
        inorder(root.left)
        PRINT root.data
        inorder(root.right)
```

**Java Implementation:**
```java
public class BinarySearchTree {
    private Node root;
    
    private static class Node {
        int data;
        Node left, right;
        
        Node(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
    
    // O(log n) average, O(n) worst case
    public void insert(int data) {
        root = insertRec(root, data);
    }
    
    private Node insertRec(Node node, int data) {
        if (node == null) {
            return new Node(data);
        }
        
        if (data < node.data) {
            node.left = insertRec(node.left, data);
        } else if (data > node.data) {
            node.right = insertRec(node.right, data);
        }
        
        return node;
    }
    
    // O(log n) average, O(n) worst case
    public boolean search(int data) {
        return searchRec(root, data);
    }
    
    private boolean searchRec(Node node, int data) {
        if (node == null) {
            return false;
        }
        
        if (data == node.data) {
            return true;
        }
        
        return data < node.data 
            ? searchRec(node.left, data)
            : searchRec(node.right, data);
    }
    
    // In-order traversal: O(n)
    public void inorder() {
        inorderRec(root);
    }
    
    private void inorderRec(Node node) {
        if (node != null) {
            inorderRec(node.left);
            System.out.print(node.data + " ");
            inorderRec(node.right);
        }
    }
}
```

**BST Operations:**

The insertion operation showcases recursion's elegance in tree algorithms. We recursively descend, comparing values at each node. When we find a null child (the proper location), we create and return a new node. As the recursion unwinds, these returned nodes are assigned to parent.left or parent.right, correctly linking the new node into the tree.

The search operation exhibits the BST's fundamental property: at each node, we decide whether to search left or right based on comparison. In a balanced tree, each comparison eliminates roughly half the remaining nodes. This binary choice, repeated logarithmically many times, finds the target or determines its absence.

In-order traversal (left-root-right) visits nodes in sorted order—a remarkable property. This is no coincidence: the BST property guarantees that left-subtree values precede the root, which precedes right-subtree values. This makes BSTs ideal for maintaining sorted data with efficient insertion, though the balance problem still looms.

### AVL Trees: The Mathematics of Perfect Balance

AVL trees, named for inventors Adelson-Velsky and Landis, enforce a strict balance invariant: for every node, the heights of its left and right subtrees differ by at most 1. This constraint seems simple, but it has profound implications. It guarantees that the tree's height is always O(log n), regardless of insertion order. This mathematical guarantee transforms the BST's average-case promise into a worst-case guarantee.

The key mechanism is tree rotations. When an insertion violates the balance property, we perform one or two rotations to restore it. A rotation restructures three nodes and four subtrees, changing the tree's shape while preserving the BST property. The beauty of rotations is that they're local operations—O(1) time—yet they can rebalance the entire tree.

AVL trees recognize four imbalance cases: left-left, left-right, right-right, and right-left. Each case has a corresponding fix: single or double rotations. The implementation tracks each node's height and balance factor (left height minus right height). After insertion, we check balance factors climbing back up the tree, rotating when necessary.

The cost of this perfect balance is complexity. AVL tree implementation is intricate, requiring careful attention to height updates and rotation logic. Moreover, AVL trees can be overly aggressive in maintaining balance, performing rotations even when slight imbalance would be acceptable. This leads to our next structure: Red-Black trees.

**Pseudocode:**
```
// AVL Insert with Balancing - O(log n)
FUNCTION insert(root, value):
    // Standard BST insertion
    IF root = NULL THEN
        RETURN NEW NODE(value, height=1)
    
    IF value < root.data THEN
        root.left ← insert(root.left, value)
    ELSE IF value > root.data THEN
        root.right ← insert(root.right, value)
    ELSE
        RETURN root  // Duplicates not allowed
    
    // Update height
    root.height ← 1 + MAX(height(root.left), height(root.right))
    
    // Get balance factor
    balance ← getBalance(root)
    
    // Left-Left Case
    IF balance > 1 AND value < root.left.data THEN
        RETURN rotateRight(root)
    
    // Right-Right Case
    IF balance < -1 AND value > root.right.data THEN
        RETURN rotateLeft(root)
    
    // Left-Right Case
    IF balance > 1 AND value > root.left.data THEN
        root.left ← rotateLeft(root.left)
        RETURN rotateRight(root)
    
    // Right-Left Case
    IF balance < -1 AND value < root.right.data THEN
        root.right ← rotateRight(root.right)
        RETURN rotateLeft(root)
    
    RETURN root

FUNCTION rotateRight(y):
    x ← y.left
    T2 ← x.right
    
    x.right ← y
    y.left ← T2
    
    y.height ← 1 + MAX(height(y.left), height(y.right))
    x.height ← 1 + MAX(height(x.left), height(x.right))
    
    RETURN x

FUNCTION rotateLeft(x):
    y ← x.right
    T2 ← y.left
    
    y.left ← x
    x.right ← T2
    
    x.height ← 1 + MAX(height(x.left), height(x.right))
    y.height ← 1 + MAX(height(y.left), height(y.right))
    
    RETURN y
```

**Java Implementation:**
```java
public class AVLTree {
    private Node root;
    
    private static class Node {
        int data, height;
        Node left, right;
        
        Node(int data) {
            this.data = data;
            this.height = 1;
        }
    }
    
    // Get height of node
    private int height(Node node) {
        return node == null ? 0 : node.height;
    }
    
    // Get balance factor
    private int getBalance(Node node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    // Update height of node
    private void updateHeight(Node node) {
        node.height = 1 + Math.max(height(node.left), height(node.right));
    }
    
    // Right rotation
    private Node rotateRight(Node y) {
        Node x = y.left;
        Node T2 = x.right;
        
        // Perform rotation
        x.right = y;
        y.left = T2;
        
        // Update heights
        updateHeight(y);
        updateHeight(x);
        
        return x;
    }
    
    // Left rotation
    private Node rotateLeft(Node x) {
        Node y = x.right;
        Node T2 = y.left;
        
        // Perform rotation
        y.left = x;
        x.right = T2;
        
        // Update heights
        updateHeight(x);
        updateHeight(y);
        
        return y;
    }
    
    // Insert: O(log n) guaranteed
    public void insert(int data) {
        root = insertRec(root, data);
    }
    
    private Node insertRec(Node node, int data) {
        // Standard BST insertion
        if (node == null) {
            return new Node(data);
        }
        
        if (data < node.data) {
            node.left = insertRec(node.left, data);
        } else if (data > node.data) {
            node.right = insertRec(node.right, data);
        } else {
            return node; // Duplicate keys not allowed
        }
        
        // Update height
        updateHeight(node);
        
        // Get balance factor
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return rotateRight(node);
        }
        
        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return rotateLeft(node);
        }
        
        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = rotateLeft(node.left);
            return rotateRight(node);
        }
        
        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = rotateRight(node.right);
            return rotateLeft(node);
        }
        
        return node;
    }
    
    // Delete: O(log n) guaranteed
    public void delete(int data) {
        root = deleteRec(root, data);
    }
    
    private Node deleteRec(Node node, int data) {
        // Standard BST deletion
        if (node == null) {
            return node;
        }
        
        if (data < node.data) {
            node.left = deleteRec(node.left, data);
        } else if (data > node.data) {
            node.right = deleteRec(node.right, data);
        } else {
            // Node with one child or no child
            if (node.left == null || node.right == null) {
                node = (node.left != null) ? node.left : node.right;
            } else {
                // Node with two children: get inorder successor
                Node temp = minValueNode(node.right);
                node.data = temp.data;
                node.right = deleteRec(node.right, temp.data);
            }
        }
        
        if (node == null) {
            return node;
        }
        
        // Update height
        updateHeight(node);
        
        // Get balance factor
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && getBalance(node.left) >= 0) {
            return rotateRight(node);
        }
        
        // Left Right Case
        if (balance > 1 && getBalance(node.left) < 0) {
            node.left = rotateLeft(node.left);
            return rotateRight(node);
        }
        
        // Right Right Case
        if (balance < -1 && getBalance(node.right) <= 0) {
            return rotateLeft(node);
        }
        
        // Right Left Case
        if (balance < -1 && getBalance(node.right) > 0) {
            node.right = rotateRight(node.right);
            return rotateLeft(node);
        }
        
        return node;
    }
    
    private Node minValueNode(Node node) {
        Node current = node;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }
    
    // Search: O(log n) guaranteed
    public boolean search(int data) {
        return searchRec(root, data);
    }
    
    private boolean searchRec(Node node, int data) {
        if (node == null) {
            return false;
        }
        if (data == node.data) {
            return true;
        }
        return data < node.data 
            ? searchRec(node.left, data)
            : searchRec(node.right, data);
    }
    
    // In-order traversal
    public void inorder() {
        inorderRec(root);
        System.out.println();
    }
    
    private void inorderRec(Node node) {
        if (node != null) {
            inorderRec(node.left);
            System.out.print(node.data + " ");
            inorderRec(node.right);
        }
    }
}
```

**AVL Tree Balance:**

The AVL implementation's heart lies in the four cases of imbalance. Left-Left occurs when we insert into the left subtree of a left child—fixed with a single right rotation. Right-Right is symmetric: insert right-right, rotate left. Left-Right and Right-Left require double rotations: first rotate the child, then rotate the parent.

Each rotation takes O(1) time, and we perform at most two rotations per insertion. The height updates are equally crucial—after any structural change, we recalculate heights bottom-up. The balance factor (left height minus right height) tells us if rotation is needed: |balance| ≤ 1 means balanced, |balance| > 1 means rebalancing required.

Deletion is more complex than insertion, potentially requiring multiple rotations as imbalance propagates up the tree. Yet even with these complexities, AVL trees guarantee O(log n) operations. This guarantee is their superpower: no matter what sequence of operations you perform, worst-case performance is assured.

The trade-off is rotations. AVL trees perform more rotations than Red-Black trees, making them better for search-heavy workloads (where strict balance helps) but potentially worse for insertion-heavy ones. This is why understanding both structures matters—one size doesn't fit all problems.

### Red-Black Trees: Practical Balance

Red-Black trees take a different approach to balance. Instead of strictly limiting height differences, they use node colors (red and black) to maintain looser balance constraints. These constraints still guarantee O(log n) height, but with fewer rotations required. The result is a structure that's slightly less balanced than AVL trees but requires less rebalancing work.

The Red-Black properties are:
1. Every node is either red or black
2. The root is black
3. All null leaves are black
4. Red nodes have black children (no consecutive red nodes)
5. All paths from root to null have the same number of black nodes

These properties ensure that the longest path (alternating black-red) is at most twice the shortest path (all black). This factor-of-two difference means height is at most 2 log n—still O(log n), but slightly less balanced than AVL's guarantee.

The genius of Red-Black trees lies in their rebalancing strategy. Many insertions can be fixed by recoloring alone, without structural changes. When rotations are necessary, they're often simpler than AVL's cases. This makes Red-Black trees the choice for many production systems, including Java's TreeMap and C++'s std::map.

Understanding Red-Black trees requires thinking about color as a form of metadata that encodes balance information. Black height (black nodes on any root-to-leaf path) acts as a balance measure. Violations get fixed by strategically rotating and recoloring, propagating fixes up the tree until the root.

**Pseudocode:**
```
// Red-Black Tree Insert - O(log n)
FUNCTION insert(tree, value):
    // Standard BST insertion
    newNode ← NEW NODE(value, color=RED)
    IF tree.root = NULL THEN
        newNode.color ← BLACK
        tree.root ← newNode
        RETURN
    
    parent ← NULL
    current ← tree.root
    WHILE current ≠ NULL DO
        parent ← current
        IF value < current.data THEN
            current ← current.left
        ELSE IF value > current.data THEN
            current ← current.right
        ELSE
            RETURN  // Duplicate
    
    newNode.parent ← parent
    IF value < parent.data THEN
        parent.left ← newNode
    ELSE
        parent.right ← newNode
    
    fixViolation(tree, newNode)

FUNCTION fixViolation(tree, node):
    WHILE node ≠ tree.root AND node.parent.color = RED DO
        parent ← node.parent
        grandparent ← parent.parent
        
        IF parent = grandparent.left THEN
            uncle ← grandparent.right
            
            // Case 1: Uncle is red (recolor)
            IF uncle ≠ NULL AND uncle.color = RED THEN
                parent.color ← BLACK
                uncle.color ← BLACK
                grandparent.color ← RED
                node ← grandparent
            ELSE
                // Case 2: Node is right child (left rotation)
                IF node = parent.right THEN
                    node ← parent
                    rotateLeft(tree, node)
                    parent ← node.parent
                
                // Case 3: Node is left child (right rotation + recolor)
                parent.color ← BLACK
                grandparent.color ← RED
                rotateRight(tree, grandparent)
        ELSE
            // Mirror cases for right side
            uncle ← grandparent.left
            IF uncle ≠ NULL AND uncle.color = RED THEN
                parent.color ← BLACK
                uncle.color ← BLACK
                grandparent.color ← RED
                node ← grandparent
            ELSE
                IF node = parent.left THEN
                    node ← parent
                    rotateRight(tree, node)
                    parent ← node.parent
                parent.color ← BLACK
                grandparent.color ← RED
                rotateLeft(tree, grandparent)
    
    tree.root.color ← BLACK
```

**Java Implementation:**
```java
public class RedBlackTree {
    private Node root;
    private static final boolean RED = true;
    private static final boolean BLACK = false;
    
    private static class Node {
        int data;
        Node left, right, parent;
        boolean color;
        
        Node(int data) {
            this.data = data;
            this.color = RED; // New nodes are always red
        }
    }
    
    // Insert: O(log n) guaranteed
    public void insert(int data) {
        Node newNode = new Node(data);
        
        if (root == null) {
            root = newNode;
            root.color = BLACK;
            return;
        }
        
        // Standard BST insertion
        Node parent = null;
        Node current = root;
        
        while (current != null) {
            parent = current;
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return; // Duplicate keys not allowed
            }
        }
        
        newNode.parent = parent;
        if (data < parent.data) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
        
        // Fix Red-Black Tree properties
        fixInsert(newNode);
    }
    
    private void fixInsert(Node node) {
        Node parent, grandparent;
        
        while (node != root && node.color == RED && node.parent.color == RED) {
            parent = node.parent;
            grandparent = parent.parent;
            
            // Case A: Parent is left child of grandparent
            if (parent == grandparent.left) {
                Node uncle = grandparent.right;
                
                // Case 1: Uncle is red - recolor
                if (uncle != null && uncle.color == RED) {
                    grandparent.color = RED;
                    parent.color = BLACK;
                    uncle.color = BLACK;
                    node = grandparent;
                } else {
                    // Case 2: Node is right child - left rotation
                    if (node == parent.right) {
                        rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    
                    // Case 3: Node is left child - right rotation
                    rotateRight(grandparent);
                    boolean temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            } 
            // Case B: Parent is right child of grandparent
            else {
                Node uncle = grandparent.left;
                
                // Case 1: Uncle is red - recolor
                if (uncle != null && uncle.color == RED) {
                    grandparent.color = RED;
                    parent.color = BLACK;
                    uncle.color = BLACK;
                    node = grandparent;
                } else {
                    // Case 2: Node is left child - right rotation
                    if (node == parent.left) {
                        rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    
                    // Case 3: Node is right child - left rotation
                    rotateLeft(grandparent);
                    boolean temp = parent.color;
                    parent.color = grandparent.color;
                    grandparent.color = temp;
                    node = parent;
                }
            }
        }
        
        root.color = BLACK;
    }
    
    private void rotateLeft(Node node) {
        Node rightChild = node.right;
        node.right = rightChild.left;
        
        if (node.right != null) {
            node.right.parent = node;
        }
        
        rightChild.parent = node.parent;
        
        if (node.parent == null) {
            root = rightChild;
        } else if (node == node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        
        rightChild.left = node;
        node.parent = rightChild;
    }
    
    private void rotateRight(Node node) {
        Node leftChild = node.left;
        node.left = leftChild.right;
        
        if (node.left != null) {
            node.left.parent = node;
        }
        
        leftChild.parent = node.parent;
        
        if (node.parent == null) {
            root = leftChild;
        } else if (node == node.parent.left) {
            node.parent.left = leftChild;
        } else {
            node.parent.right = leftChild;
        }
        
        leftChild.right = node;
        node.parent = leftChild;
    }
    
    // Search: O(log n) guaranteed
    public boolean search(int data) {
        Node current = root;
        
        while (current != null) {
            if (data == current.data) {
                return true;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        return false;
    }
    
    // Delete: O(log n) guaranteed
    public void delete(int data) {
        Node node = findNode(root, data);
        if (node == null) return;
        
        deleteNode(node);
    }
    
    private Node findNode(Node node, int data) {
        while (node != null) {
            if (data == node.data) {
                return node;
            } else if (data < node.data) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return null;
    }
    
    private void deleteNode(Node node) {
        Node replacement;
        Node child;
        
        // Node has two children
        if (node.left != null && node.right != null) {
            Node successor = minimum(node.right);
            node.data = successor.data;
            node = successor;
        }
        
        // Node has at most one child
        child = (node.left != null) ? node.left : node.right;
        
        if (node.color == BLACK) {
            node.color = (child != null) ? child.color : BLACK;
            fixDelete(node);
        }
        
        replaceNode(node, child);
    }
    
    private void fixDelete(Node node) {
        while (node != root && node.color == BLACK) {
            if (node == node.parent.left) {
                Node sibling = node.parent.right;
                
                // Case 1: Sibling is red
                if (sibling.color == RED) {
                    sibling.color = BLACK;
                    node.parent.color = RED;
                    rotateLeft(node.parent);
                    sibling = node.parent.right;
                }
                
                // Case 2: Sibling's children are black
                if ((sibling.left == null || sibling.left.color == BLACK) &&
                    (sibling.right == null || sibling.right.color == BLACK)) {
                    sibling.color = RED;
                    node = node.parent;
                } else {
                    // Case 3: Sibling's right child is black
                    if (sibling.right == null || sibling.right.color == BLACK) {
                        if (sibling.left != null) {
                            sibling.left.color = BLACK;
                        }
                        sibling.color = RED;
                        rotateRight(sibling);
                        sibling = node.parent.right;
                    }
                    
                    // Case 4: Sibling's right child is red
                    sibling.color = node.parent.color;
                    node.parent.color = BLACK;
                    if (sibling.right != null) {
                        sibling.right.color = BLACK;
                    }
                    rotateLeft(node.parent);
                    node = root;
                }
            } else {
                // Symmetric cases for right child
                Node sibling = node.parent.left;
                
                if (sibling.color == RED) {
                    sibling.color = BLACK;
                    node.parent.color = RED;
                    rotateRight(node.parent);
                    sibling = node.parent.left;
                }
                
                if ((sibling.right == null || sibling.right.color == BLACK) &&
                    (sibling.left == null || sibling.left.color == BLACK)) {
                    sibling.color = RED;
                    node = node.parent;
                } else {
                    if (sibling.left == null || sibling.left.color == BLACK) {
                        if (sibling.right != null) {
                            sibling.right.color = BLACK;
                        }
                        sibling.color = RED;
                        rotateLeft(sibling);
                        sibling = node.parent.left;
                    }
                    
                    sibling.color = node.parent.color;
                    node.parent.color = BLACK;
                    if (sibling.left != null) {
                        sibling.left.color = BLACK;
                    }
                    rotateRight(node.parent);
                    node = root;
                }
            }
        }
        
        node.color = BLACK;
    }
    
    private void replaceNode(Node node, Node child) {
        if (node.parent == null) {
            root = child;
        } else if (node == node.parent.left) {
            node.parent.left = child;
        } else {
            node.parent.right = child;
        }
        
        if (child != null) {
            child.parent = node.parent;
        }
    }
    
    private Node minimum(Node node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }
    
    // In-order traversal
    public void inorder() {
        inorderRec(root);
        System.out.println();
    }
    
    private void inorderRec(Node node) {
        if (node != null) {
            inorderRec(node.left);
            System.out.print(node.data + "(" + (node.color ? "R" : "B") + ") ");
            inorderRec(node.right);
        }
    }
}
```

**Red-Black Tree Implementation:**

The `fixInsert` method handles the complex cases of rebalancing after insertion. New nodes start red (to avoid increasing black height). If the parent is also red, we have a violation. The uncle's color determines our fix: if the uncle is red, recolor grandparent, parent, and uncle; if black, perform rotations.

The symmetry in the code reflects the symmetry of the tree structure: cases for left children mirror cases for right children. This duplication is unavoidable—left and right rotations are mirror operations, and balance violations on opposite sides require opposite fixes.

Deletion is notoriously complex in Red-Black trees. Removing a black node can violate the black-height property, requiring cascading fixes up the tree. The `fixDelete` method handles four cases per side, combining rotations and recoloring to restore properties. This complexity is why many textbooks skim deletion—but understanding it reveals the full depth of the data structure.

The in-order traversal prints colors (R or B) alongside values, making tree structure visible. This is invaluable for debugging and understanding how operations affect balance. In production code, you wouldn't print colors, but during development, this visibility is essential.

### Graphs: Modeling Relationships

Graphs are perhaps the most versatile data structure in computer science. They model networks, relationships, dependencies, maps, social connections, web links—any scenario where entities have pairwise connections. Unlike trees, graphs embrace cycles and multiple paths, making them both more powerful and more complex.

A graph consists of vertices (nodes) connected by edges. Edges can be directed (one-way) or undirected (bidirectional), weighted (with associated costs) or unweighted (binary connections). This flexibility makes graphs applicable to countless domains, from GPS navigation to social network analysis to compiler optimization.

Graph representation matters. Adjacency matrices use O(V²) space but provide O(1) edge lookup. Adjacency lists use O(V + E) space (where E is edge count) and iterate over neighbors in O(degree) time. For sparse graphs (E << V²), adjacency lists win. For dense graphs (E ≈ V²), matrices are competitive. The implementation below uses adjacency lists—the more common choice.

Graph traversal algorithms explore the graph systematically. Breadth-First Search (BFS) explores by layers: visit all neighbors before visiting neighbors' neighbors. Depth-First Search (DFS) explores by diving deep: follow a path until it ends, then backtrack. These simple strategies solve surprisingly complex problems: connected components, shortest paths in unweighted graphs, topological sorting, cycle detection.

**Pseudocode:**
```
// BFS - O(V + E) time
FUNCTION BFS(graph, start):
    visited ← NEW BOOLEAN ARRAY of size V (all false)
    queue ← NEW QUEUE
    
    visited[start] ← true
    queue.ENQUEUE(start)
    
    WHILE queue is not empty DO
        vertex ← queue.DEQUEUE()
        PRINT vertex
        
        FOR each neighbor IN graph.adjacencyList[vertex] DO
            IF NOT visited[neighbor] THEN
                visited[neighbor] ← true
                queue.ENQUEUE(neighbor)

// DFS - O(V + E) time
FUNCTION DFS(graph, start):
    visited ← NEW BOOLEAN ARRAY of size V (all false)
    DFSUtil(graph, start, visited)

FUNCTION DFSUtil(graph, vertex, visited):
    visited[vertex] ← true
    PRINT vertex
    
    FOR each neighbor IN graph.adjacencyList[vertex] DO
        IF NOT visited[neighbor] THEN
            DFSUtil(graph, neighbor, visited)

// Check Connectivity - O(V + E) time
FUNCTION isConnected(graph):
    visited ← NEW BOOLEAN ARRAY of size V (all false)
    DFSUtil(graph, 0, visited)
    
    FOR i ← 0 TO V - 1 DO
        IF NOT visited[i] THEN
            RETURN false
    RETURN true
```

**Java Implementation:**
```java
import java.util.*;

public class Graph {
    private int vertices;
    private List<List<Integer>> adjacencyList;
    
    public Graph(int vertices) {
        this.vertices = vertices;
        adjacencyList = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++) {
            adjacencyList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int source, int dest) {
        adjacencyList.get(source).add(dest);
        adjacencyList.get(dest).add(source); // For undirected graph
    }
    
    // Breadth-First Search: O(V + E)
    public void bfs(int start) {
        boolean[] visited = new boolean[vertices];
        Queue<Integer> queue = new LinkedList<>();
        
        visited[start] = true;
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            int vertex = queue.poll();
            System.out.print(vertex + " ");
            
            for (int neighbor : adjacencyList.get(vertex)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
    }
    
    // Depth-First Search: O(V + E)
    public void dfs(int start) {
        boolean[] visited = new boolean[vertices];
        dfsRec(start, visited);
    }
    
    private void dfsRec(int vertex, boolean[] visited) {
        visited[vertex] = true;
        System.out.print(vertex + " ");
        
        for (int neighbor : adjacencyList.get(vertex)) {
            if (!visited[neighbor]) {
                dfsRec(neighbor, visited);
            }
        }
    }
    
    // Check if graph is connected: O(V + E)
    public boolean isConnected() {
        boolean[] visited = new boolean[vertices];
        dfsRec(0, visited);
        
        for (boolean v : visited) {
            if (!v) return false;
        }
        return true;
    }
}
```

**Graph Traversal Insights:**

BFS uses a queue (FIFO) to process vertices in order of discovery. This ensures we visit vertices layer by layer: first the start vertex, then all vertices one edge away, then all vertices two edges away, and so on. This layered exploration makes BFS ideal for finding shortest paths in unweighted graphs—the first time we reach a vertex is necessarily via the shortest path.

DFS uses recursion (or explicitly, a stack) to explore deeply before backtracking. Each recursive call follows one edge, exploring that branch completely before trying alternatives. This depth-first strategy makes DFS natural for problems requiring exhaustive exploration: finding all paths, detecting cycles, or computing topological orderings.

The `isConnected` method demonstrates how simple graph traversals solve complex questions. Connectivity—whether all vertices are reachable from a given start—is answered by a single DFS. If we mark n vertices as visited, the graph is connected. If fewer, it's disconnected. This is the power of graph algorithms: complex questions often have surprisingly simple algorithmic answers.

Both BFS and DFS run in O(V + E) time—linear in the graph's size. We visit each vertex once and examine each edge once (or twice for undirected graphs). This linearity makes them fundamental building blocks for more complex graph algorithms.

### Dijkstra's Algorithm: Shortest Paths with Weights

Dijkstra's algorithm solves the single-source shortest path problem for graphs with non-negative edge weights. From a starting vertex, it computes the shortest path to every other vertex. The algorithm is greedy: repeatedly select the unvisited vertex with minimum distance, then update distances to its neighbors.

The key insight is that once we've selected a vertex as having minimum distance, that distance is final—we've found the shortest path to it. Why? Because all edges have non-negative weights. Any path through unvisited vertices would have at least the same distance (since we chose the minimum), plus additional positive weight. This greedy choice property makes Dijkstra's algorithm correct.

The priority queue is crucial for efficiency. Selecting the minimum-distance vertex naively takes O(V) time; with V iterations, that's O(V²). But a min-heap priority queue reduces vertex selection to O(log V), and we perform E distance updates, each taking O(log V) to update the heap. Total complexity: O((V + E) log V), often simplified to O(E log V) for connected graphs.

**Pseudocode:**
```
// Dijkstra's Algorithm - O((V + E) log V)
FUNCTION dijkstra(graph, source):
    dist ← NEW ARRAY of size V (all ∞)
    dist[source] ← 0
    
    pq ← NEW MIN PRIORITY QUEUE
    pq.INSERT(source, 0)
    
    WHILE pq is not empty DO
        u ← pq.EXTRACT_MIN()
        
        FOR each edge (u, v, weight) IN graph.adjacencyList[u] DO
            // Relaxation step
            IF dist[u] + weight < dist[v] THEN
                dist[v] ← dist[u] + weight
                pq.INSERT(v, dist[v])
    
    RETURN dist
```

**Java Implementation:**
```java
import java.util.*;

public class DijkstraAlgorithm {
    
    private static class Edge {
        int target;
        int weight;
        
        Edge(int target, int weight) {
            this.target = target;
            this.weight = weight;
        }
    }
    
    private static class Node implements Comparable<Node> {
        int vertex;
        int distance;
        
        Node(int vertex, int distance) {
            this.vertex = vertex;
            this.distance = distance;
        }
        
        @Override
        public int compareTo(Node other) {
            return Integer.compare(this.distance, other.distance);
        }
    }
    
    // Dijkstra's Algorithm: O((V + E) log V) with priority queue
    public static int[] dijkstra(List<List<Edge>> graph, int source) {
        int n = graph.size();
        int[] distances = new int[n];
        Arrays.fill(distances, Integer.MAX_VALUE);
        distances[source] = 0;
        
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(source, 0));
        
        boolean[] visited = new boolean[n];
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            int u = current.vertex;
            
            if (visited[u]) continue;
            visited[u] = true;
            
            for (Edge edge : graph.get(u)) {
                int v = edge.target;
                int weight = edge.weight;
                
                if (distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                    pq.offer(new Node(v, distances[v]));
                }
            }
        }
        
        return distances;
    }
    
    // Reconstruct shortest path
    public static List<Integer> reconstructPath(int[] parent, int target) {
        List<Integer> path = new ArrayList<>();
        for (int v = target; v != -1; v = parent[v]) {
            path.add(v);
        }
        Collections.reverse(path);
        return path;
    }
}
```

**Dijkstra in Practice:**

The algorithm maintains a distance array initialized to infinity (represented by `Integer.MAX_VALUE`), except the source which starts at 0. The priority queue orders vertices by distance, ensuring we always process the minimum-distance unvisited vertex next.

The relaxation step is key: for each edge (u, v) with weight w, if distance[u] + w < distance[v], we've found a shorter path to v. Update distance[v] and add v to the priority queue with its new distance. The priority queue naturally handles vertices being added multiple times with different distances—we ignore outdated entries using the visited array.

Path reconstruction requires augmenting the algorithm with a parent array. When we relax an edge, we also store parent[v] = u. After the algorithm completes, we can trace back from any vertex to the source, reconstructing the shortest path tree.

Dijkstra's algorithm fails with negative edge weights. A shorter path might appear after we've marked a vertex as final, violating the algorithm's invariant. For graphs with negative weights (but no negative cycles), the Bellman-Ford algorithm handles this at the cost of O(VE) time.

### Minimum Spanning Trees: Connecting Everything Efficiently

A spanning tree of a graph connects all vertices with the minimum number of edges (V-1 edges for V vertices) while avoiding cycles. A minimum spanning tree (MST) does this with minimum total edge weight. MSTs solve problems like network design: connecting cities with minimum cable length, or connecting computers with minimum cost.

Two classical algorithms solve the MST problem: Prim's and Kruskal's. Both are greedy, repeatedly making locally optimal choices that lead to a globally optimal solution. Both produce the same total weight (the MST is unique if all edge weights are distinct), though the actual trees might differ.

Prim's algorithm grows a single tree from an arbitrary starting vertex, always adding the minimum-weight edge that connects a tree vertex to a non-tree vertex. It's similar to Dijkstra's but selects edges by weight rather than cumulative distance. The priority queue contains edges from the growing tree to unexplored vertices.

Kruskal's algorithm considers edges in order of increasing weight, adding each edge unless it would create a cycle. This requires a data structure to detect cycles efficiently—enter the Union-Find (disjoint set) structure. Union-Find maintains connected components, allowing O(α(n)) (effectively constant) time to check if two vertices are connected and to merge components.

**Pseudocode:**
```
// Prim's MST Algorithm - O(E log V)
FUNCTION primMST(graph, vertices):
    visited ← NEW BOOLEAN ARRAY of size V (all false)
    mstWeight ← 0
    pq ← NEW MIN PRIORITY QUEUE
    
    // Start from vertex 0
    visited[0] ← true
    FOR each edge IN graph.adjacencyList[0] DO
        pq.INSERT(edge)
    
    WHILE pq is not empty DO
        edge ← pq.EXTRACT_MIN()
        target ← edge.target
        
        IF visited[target] THEN
            CONTINUE  // Skip edges to already-visited vertices
        
        visited[target] ← true
        mstWeight ← mstWeight + edge.weight
        
        FOR each nextEdge IN graph.adjacencyList[target] DO
            IF NOT visited[nextEdge.target] THEN
                pq.INSERT(nextEdge)
    
    RETURN mstWeight
```

**Java Implementation:**
```java
import java.util.*;

public class PrimsAlgorithm {
    
    private static class Edge implements Comparable<Edge> {
        int target;
        int weight;
        
        Edge(int target, int weight) {
            this.target = target;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }
    
    // Prim's Algorithm: O(E log V)
    public static List<int[]> primMST(List<List<Edge>> graph) {
        int n = graph.size();
        List<int[]> mst = new ArrayList<>();
        boolean[] inMST = new boolean[n];
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        
        // Start from vertex 0
        inMST[0] = true;
        for (Edge edge : graph.get(0)) {
            pq.offer(edge);
        }
        
        while (!pq.isEmpty() && mst.size() < n - 1) {
            Edge edge = pq.poll();
            int v = edge.target;
            
            if (inMST[v]) continue;
            
            inMST[v] = true;
            mst.add(new int[]{v, edge.weight});
            
            for (Edge nextEdge : graph.get(v)) {
                if (!inMST[nextEdge.target]) {
                    pq.offer(nextEdge);
                }
            }
        }
        
        return mst;
    }
}
```

**Prim's Algorithm Insights:**

Prim's maintains a clear invariant: at each step, we have a connected tree, and we add the minimum-weight edge that extends it. The priority queue holds edges from tree vertices to non-tree vertices. When we extract the minimum-weight edge and its target isn't yet in the tree, we add both to the MST.

The `inMST` array tracks which vertices are already in the tree—crucial for avoiding cycles. When we add vertex v, we explore all its edges. For each edge to a non-tree vertex, we add it to the priority queue. The queue naturally sorts these edges, ensuring we always select the minimum-weight extension.

The algorithm completes after adding V-1 edges (a tree on V vertices always has exactly V-1 edges). The complexity O(E log V) comes from E edge insertions into the priority queue, each taking O(log V) time. For dense graphs where E ≈ V², this matches the Fibonacci heap-optimized version's O(E + V log V).

Prim's works well for dense graphs represented as adjacency matrices. Starting from any vertex guarantees we find an MST—unlike Kruskal's, which processes edges globally. This local growth property also makes Prim's easier to visualize and understand.

### Kruskal's Algorithm and Union-Find

Kruskal's takes a global view: sort all edges by weight, then add edges greedily if they don't create cycles. This edge-centric approach contrasts with Prim's vertex-centric growth. The challenge is cycle detection—naively checking for cycles after each edge addition would be expensive.

The Union-Find data structure solves this elegantly. It maintains a partition of vertices into disjoint sets (connected components). Two operations suffice: `find(x)` returns x's component representative, and `union(x, y)` merges their components. Initially, each vertex is its own component. Adding an edge (u, v) is valid only if find(u) ≠ find(v)—they're in different components, so no cycle forms.

Union-Find achieves nearly constant time per operation through two optimizations. Path compression flattens trees during find operations: after finding the root, make all visited nodes point directly to it. Union by rank keeps trees shallow by always attaching the shorter tree to the taller one. Together, these give O(α(n)) time per operation, where α is the inverse Ackermann function—effectively constant.

**Pseudocode:**
```
// Kruskal's MST Algorithm - O(E log E)
FUNCTION kruskalMST(edges, vertices):
    // Sort edges by weight
    SORT edges by weight (ascending)
    
    // Initialize Union-Find
    parent ← NEW ARRAY of size V
    rank ← NEW ARRAY of size V
    FOR i ← 0 TO V - 1 DO
        parent[i] ← i
        rank[i] ← 0
    
    mstWeight ← 0
    edgesAdded ← 0
    
    FOR each edge IN edges DO
        IF edgesAdded = V - 1 THEN
            BREAK  // MST complete
        
        rootU ← find(edge.source, parent)
        rootV ← find(edge.target, parent)
        
        // If in different components, add edge
        IF rootU ≠ rootV THEN
            mstWeight ← mstWeight + edge.weight
            edgesAdded ← edgesAdded + 1
            union(rootU, rootV, parent, rank)
    
    RETURN mstWeight

// Union-Find with Path Compression
FUNCTION find(x, parent):
    IF parent[x] ≠ x THEN
        parent[x] ← find(parent[x], parent)  // Path compression
    RETURN parent[x]

// Union-Find with Union by Rank
FUNCTION union(x, y, parent, rank):
    IF rank[x] < rank[y] THEN
        parent[x] ← y
    ELSE IF rank[x] > rank[y] THEN
        parent[y] ← x
    ELSE
        parent[y] ← x
        rank[x] ← rank[x] + 1
```

**Java Implementation:**
```java
import java.util.*;

public class KruskalsAlgorithm {
    
    private static class Edge implements Comparable<Edge> {
        int source, target, weight;
        
        Edge(int source, int target, int weight) {
            this.source = source;
            this.target = target;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }
    
    // Union-Find data structure
    private static class UnionFind {
        int[] parent, rank;
        
        UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }
        
        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }
        
        boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) return false;
            
            // Union by rank
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
            return true;
        }
    }
    
    // Kruskal's Algorithm: O(E log E)
    public static List<Edge> kruskalMST(int vertices, List<Edge> edges) {
        Collections.sort(edges);
        UnionFind uf = new UnionFind(vertices);
        List<Edge> mst = new ArrayList<>();
        
        for (Edge edge : edges) {
            if (uf.union(edge.source, edge.target)) {
                mst.add(edge);
                if (mst.size() == vertices - 1) break;
            }
        }
        
        return mst;
    }
}
```

**Kruskal's Algorithm in Practice:**

The sorting step dominates Kruskal's complexity: O(E log E). Processing edges with Union-Find adds O(E α(V)), effectively O(E). Since log E ≈ log V² = 2 log V for connected graphs, Kruskal's is O(E log V)—the same as Prim's asymptotically.

Kruskal's shines for sparse graphs: fewer edges mean faster sorting. It's also conceptually simpler than Prim's and naturally parallelizes (independent edges can be processed concurrently). The Union-Find structure is a general-purpose tool useful far beyond MST algorithms—it solves connectivity problems across computer science.

The greedy choice in both algorithms—always select the minimum-weight edge that's safe—is remarkable. Not all optimization problems admit greedy solutions. That MST does is a deep mathematical property: the matroid structure of forests. This greedy correctness is why we can solve MST efficiently, while many other graph optimization problems are NP-hard.

**Chapter 3 Synthesis:**

Recursion, trees, and graphs form a hierarchy of complexity. Recursion is the foundation—a way of thinking that makes complex problems tractable. Trees add structure, organizing data hierarchically. Balanced trees like AVL and Red-Black guarantee efficiency through clever invariants. Graphs generalize trees, allowing cycles and multiple paths, modeling the complex relationships in real systems.

The algorithms we've explored—DFS, BFS, Dijkstra's, Prim's, Kruskal's—are foundational to computer science. They appear in operating systems (file system traversal), networks (routing protocols), compilers (dependency resolution), and databases (query optimization). Mastering them means understanding not just code, but the mathematical principles that make them correct and efficient.

## Bonus Videos

Search Trees (BST / AVL / Red-Black / B-Trees)

{{YouTube:https://www.youtube.com/watch?v=hmSFuM2Tglw}}

AVL Trees:

{{YouTube:https://www.youtube.com/watch?v=jDM6_TnYIqE}}

{{YouTube:https://www.youtube.com/watch?v=zP2xbKerIds}}
Red/Black Trees:

{{YouTube:https://www.youtube.com/watch?v=qvZGUFHWChY}}

{{YouTube:https://www.youtube.com/watch?v=95s3ndZRGbk}}
B-Trees:

{{YouTube:https://www.youtube.com/watch?v=K1a2Bk8NrYQ}}

Graph representations:

{{YouTube:https://www.youtube.com/watch?v=-VgHk7UMPP4}}

{{YouTube:https://www.youtube.com/watch?v=DBRW8nwZV-g}}

{{YouTube:https://www.youtube.com/watch?v=ze-poffnS1E}}

Graph traversal:

{{YouTube:https://www.youtube.com/watch?v=cS-198wtfj0}}

{{YouTube:https://www.youtube.com/watch?v=HZ5YTanv5QE}}

{{YouTube:https://www.youtube.com/watch?v=TIbUeeksXcI}}

{{YouTube:https://www.youtube.com/watch?v=pcKY4hjDrxk}}

{{YouTube:https://www.youtube.com/watch?v=0u78hx-66Xk}}

{{YouTube:https://www.youtube.com/watch?v=Y40bRyPQQr0}}

{{YouTube:https://www.youtube.com/watch?v=xlVX7dXLS64}}

Dijkstras:

{{YouTube:https://www.youtube.com/watch?v=EFg3u_E6eHU}}

{{YouTube:https://www.youtube.com/watch?v=_lHSawdgXpI}}

{{YouTube:https://www.youtube.com/watch?v=GazC3A4OQTE}}

{{YouTube:https://www.youtube.com/watch?v=K_1urzWrzLs}}

{{YouTube:https://www.youtube.com/watch?v=bZkzH5x0SKU}}

{{YouTube:https://www.youtube.com/watch?v=71Z-Jpnm3D4}}

{{YouTube:https://www.youtube.com/watch?v=j0OUwduDOS0}}

MST / Prim and Kruskal

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