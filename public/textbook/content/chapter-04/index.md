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

## Bonus Videos

Greedy 
* https://www.youtube.com/watch?v=HzeK7g8cD0Y
* https://www.youtube.com/watch?v=ARvQcqJ_-NY

* Activity selection
    * https://www.youtube.com/watch?v=V0ZrLuIVzaY 
    * https://www.youtube.com/watch?v=Qz6D7mrxaJM
    * https://www.youtube.com/watch?v=32uOuOPXBhc
    * https://www.youtube.com/watch?v=tEfVXgrP6WU 
    * https://www.youtube.com/watch?v=tvwipsztQr4

* Fractional Knapsack
    * https://www.youtube.com/watch?v=ujHQlfR3qfo
    * https://www.youtube.com/watch?v=m1p-eWxrt6g
    * https://www.youtube.com/watch?v=xZfmHVi7FMg
    * https://www.youtube.com/watch?v=DGOwuk55xa0

* Huffman
    * https://www.youtube.com/watch?v=JsTptu56GM8
    * https://www.youtube.com/watch?v=co4_ahEDCho
    * https://www.youtube.com/watch?v=iEm1NRyEe5c
    * https://www.youtube.com/watch?v=EzADYr8b5jA

Divide and Conquer

* Merge Sort:
    * https://www.youtube.com/watch?v=4VqmGXwpLqc
    * https://www.youtube.com/watch?v=KF2j-9iSf4Q
    * https://www.youtube.com/watch?v=-3u1C1URNZY
    * https://www.youtube.com/watch?v=es2T6KY45cA
    * https://www.youtube.com/watch?v=3j0SWDX4AtU
* Quick Sort:
    * https://www.youtube.com/watch?v=XE4VP_8Y0BU
    * https://www.youtube.com/watch?v=Vtckgz38QHs
    * https://www.youtube.com/watch?v=Hoixgm4-P4M
    * https://www.youtube.com/watch?v=MZaf_9IZCrc
    * https://www.youtube.com/watch?v=aXXWXz5rF64
* Master Theorem:
    * https://www.youtube.com/watch?v=2H0GKdrIowU
    * https://www.youtube.com/watch?v=LlFBRDO5gNQ
    * https://www.youtube.com/watch?v=SLsHKh_OUEM
    * https://www.youtube.com/watch?v=d-gIGFxewW4
    * https://www.youtube.com/watch?v=2y0HQGd1-nA
    * https://www.youtube.com/watch?v=OynWkEj0S-s
    * https://www.youtube.com/watch?v=T68vN1FNY4o
    * https://www.youtube.com/watch?v=09vU-wVwW3U
    * https://www.youtube.com/watch?v=g87rea4FDv4

Network Flow

* https://www.youtube.com/watch?v=Tl90tNtKvxs
* https://www.youtube.com/watch?v=VbeTl1gG4l4
* https://www.youtube.com/watch?v=LdOnanfc5TM
* https://www.youtube.com/watch?v=oHy3ddI9X3o
* https://www.youtube.com/watch?v=3LG-My_MoWc


Dynamic Programming

* https://www.youtube.com/watch?v=Hdr64lKQ3e4
* https://www.youtube.com/watch?v=oifN-YVlrq8
* https://www.youtube.com/watch?v=rE5h11FwiVw

* Knapsack:
  - https://www.youtube.com/watch?v=cJ21moQpofY
  - https://www.youtube.com/watch?v=qxWu-SeAqe4
  - https://www.youtube.com/watch?v=xOlhR_2QCXY
  - https://www.youtube.com/watch?v=nLmhmB6NzcM

* LCS
  - https://www.youtube.com/watch?v=Ua0GhsJSlWM
  - https://www.youtube.com/watch?v=sSno9rV8Rhg
  - https://www.youtube.com/watch?v=Qf5R-uYQRPk
  - https://www.youtube.com/watch?v=KnWorqyDSLA

* Matrix Chain Multiplication
  - https://www.youtube.com/watch?v=O_G2hVZvNBg
  - https://www.youtube.com/watch?v=prx1psByp7U
  - https://www.youtube.com/watch?v=JOJK7-fM2JQ
  - https://www.youtube.com/watch?v=GMzVeWpyTN0
  - https://www.youtube.com/watch?v=vgLJZMUfnsU
  - https://www.youtube.com/watch?v=_WncuhSJZyA


* Other DP problems
  - Coinage: https://www.youtube.com/watch?v=KnWorqyDSLA

NP-Complete / SAT / 3-SAT


* https://www.youtube.com/watch?v=YX40hbAHx3s
* https://www.youtube.com/watch?v=6OPsH8PK7xM
* https://www.youtube.com/watch?v=pQsdygaYcE4

* https://www.youtube.com/watch?v=GCw07nZckps
* https://www.youtube.com/watch?v=ylItc6O3A4Y

* https://www.youtube.com/watch?v=BTC3JsV_cqE
* https://www.youtube.com/watch?v=DY5oF7I_yz4
* https://www.youtube.com/watch?v=-wlUDJZb6-Q

SAT and proof of NP-Completeness:

* https://www.youtube.com/watch?v=uAdVzz1hKYY
* https://www.youtube.com/watch?v=KeLE0lar-WA
* https://www.youtube.com/watch?v=Mu5HUvIojJA
* https://www.youtube.com/watch?v=tDDHjrd3FBg
* https://www.youtube.com/watch?v=1_fbpp7CLmY
* https://www.youtube.com/watch?v=WDgkkVq5IB0
* https://www.youtube.com/watch?v=nKNd9iExRO8
* https://www.youtube.com/watch?v=WDgkkVq5IB0
* https://www.youtube.com/watch?v=nKNd9iExRO8
* https://www.youtube.com/watch?v=QwGHBX2k8Xc
* https://www.youtube.com/watch?v=sJC5mBFPKcg
* https://www.youtube.com/watch?v=g8XTGcGfxTY
* https://www.youtube.com/watch?v=2G4BeSbHEyg
* https://www.youtube.com/watch?v=a-h3HTmv214
* https://www.youtube.com/watch?v=s7MY2c8bF3M
* https://www.youtube.com/watch?v=EIFZth8NS_Q
* https://www.youtube.com/watch?v=eZIhrrYgibc
* https://www.youtube.com/watch?v=tYsQax1JXIk
* https://www.youtube.com/watch?v=9hqpVp6zGl4
* https://www.youtube.com/watch?v=7I15IN7zEsM
* https://www.youtube.com/watch?v=C2tWSssGMBs
* https://www.youtube.com/watch?v=eU_zPPBjQPk
* https://www.youtube.com/watch?v=xAQQc1_RjD8
* https://www.youtube.com/watch?v=DcgPn2FtMlo
* https://www.youtube.com/watch?v=MYorPavtyqo
* https://www.youtube.com/watch?v=rSCtkJohumA


