# Chapter 1: Mathematics of Algorithm Complexity

This chapter develops the mathematical foundations for analyzing algorithm efficiency using asymptotic notation.

## This Book's Unique Approach: The Four Levels of Mastery

This textbook takes a different approach from traditional algorithm texts. Rather than beginning with proofs and/or implementations, each question on the final exam guides you through **four distinct levels of mastery** that mirror how expert tend to think about problems.  In a nutshell, for every algorithm or data structure on the exam, you'll be asked:

* Level 0: What is significant about this topic?  Why is this topic worth learning?
* Level 1: Explain the algorithm, data structure, or proof using diagrams, flow charts, psueducode, etc.  
* Level 2: Implement the algorithm and test it.
* Level 3: Give any necessary mathematical proofs of correctness or complexity (e.g. Big-O)

We'll put that into action here as we cover the various questions on the final.  

## Key Learning Goals

By the end of this chapter, you should be able to:

* Use Big-O, Big-Omega, and Big-Theta notation correctly
* Determine tight asymptotic bounds for functions
* Analyze the time complexity of code with loops and conditionals
* Compare algorithms and predict their relative performance
* Understand when constant factors matter vs. when they don't

## The Table of Contents

This book's final exam is carefully designed to be both 1) an assessment tool, and 2) a learning tool.  The questions have been selected from the algorithms and data structures canon and sequenced in what is often considered the most appropriate order in which to study the concepts.

The final exam begins with a question that tests you on the structure of the course itself, asking you to give a hierarchy of the key algorithms and data structures we cover.  

{{ExamQuestions:concept-map.yml question_filter:"course-overview" answersOpenByDefault:false videosOpenByDefault:true title: "Question 1"}}

{{ProTip:tip content:"Always watch any embedded videos (like the one above) before moving on."}}

Years after taking a class, the unfortunate reality is that you will likely forget a lot of the key ideas.  This is one reason that it's important to organize what you learn into a coherent structure.  Plus, a good structure will help you remember additional topics beyond this course; and the one given in the answer above is designed with this in mind.

{{ProTip:professor content:"If I could pick only one question you remember the answer to 1 year from now, it would be the one above!"}}


## What is Big-O

Big-O is one of the key ideas in this course and an indispensable cognitive tool for any computer scientist.  If we write algorithms without understanding how they scale (or fail to scale), we are setting ourselves up for frustration, heartache, and even potential financial risk.  

**Big-O** is a formal mathematical categorization of an algorithm's "computational complexity"; this is a synonym for "how much the algorithm slows down as the size of the input grows."  An algorithm with Big-O of O(1) is considered a "constant time" algorithm, meaning that it actually *doesn't* slow down as the input grows.  And, on the opposite, end of the spectrum a Big-O of O(2^n) is considered an "exponential time" algorithm, meaning that it slows down exponentially as the input grows.

We embark on our quest to master this key topic with our first comparative example: a classic problem where there are two possible algorithms, each of which has a different "computational complexity."

{{ExamQuestions:concept-map.yml question_filter:"ch1-big-o-definition" answersOpenByDefault:false videosOpenByDefault:true title: "Question 2" maxVideos: 2}}



>>More questions here.



### Decoding Loops: Patterns of Complexity

The ability to analyze loop structures is fundamental to understanding algorithm efficiency. Loops are the primary mechanism by which we repeat operations, and the structure of these loops directly determines an algorithm's complexity class. Let's explore the patterns that emerge.

Single loops are straightforward: if the loop variable increments by a constant and touches each element once, the complexity is linear in the loop's range. But loops can be more subtle. A loop that increments by 2 still visits half the elements—but half of n is still O(n). Constants vanish in asymptotic analysis because they become negligible as n grows large.

Multiplicative loops tell a different story. When your loop variable multiplies or divides by a constant factor (like i *= 2 or i /= 2), you're dealing with logarithmic growth. Why? Because you can only double or halve log n times before reaching n or 1. This is the mathematical foundation of binary search's efficiency.

Nested loops demand careful analysis. If both loops iterate over n elements, the complexity is clearly O(n²)—n iterations of n operations each. But if the inner loop's bound depends on the outer loop's variable (like j < i), we're counting a triangular number: 1 + 2 + 3 + ... + n = n(n+1)/2. The n² term dominates, so it's still O(n²), but the constant factor is roughly half.

Sequential loops don't nest—they follow each other. Three consecutive O(n) loops give O(n) + O(n) + O(n) = O(3n) = O(n). The fastest-growing term dominates in sum, just as the largest term dominates in products.


## Bonus Videos

Big O

{{YouTube:https://www.youtube.com/watch?v=XMUe3zFhM5c}}

{{YouTube:https://www.youtube.com/watch?v=BgLTDT03QtU}}

{{YouTube:https://www.youtube.com/watch?v=__vX2sjlpXU}}

{{YouTube:https://www.youtube.com/watch?v=Q_1M2JaijjQ}}

{{YouTube:https://www.youtube.com/watch?v=MyeV2_tGqvw}} 