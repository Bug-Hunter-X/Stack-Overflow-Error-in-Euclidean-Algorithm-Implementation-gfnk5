# Stack Overflow Error in Euclidean Algorithm

This repository contains a JavaScript implementation of the Euclidean algorithm with a bug that causes a stack overflow error. The bug occurs when one of the inputs to the function is 0. The solution demonstrates how to fix this issue by adding a base case to handle the 0 input.

## Bug

The `bug.js` file contains the buggy implementation of the Euclidean algorithm.  The function will recursively call itself until the stack overflows. 

## Solution

The `bugSolution.js` file provides a corrected implementation of the Euclidean algorithm that handles the case where one of the inputs is 0. The solution adds a base case to check for zero inputs preventing infinite recursion.