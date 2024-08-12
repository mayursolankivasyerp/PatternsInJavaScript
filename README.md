# JavaScript Patterns: Star and Number Patterns

## Introduction

This repository contains examples and implementations of various star and number patterns in JavaScript. These patterns are useful for practicing loops, conditional logic, and algorithmic thinking. The patterns are organized into two main categories: star patterns and number patterns.

## Table of Contents

1. [Star Patterns](#star-patterns)
    - [Simple Square](#simple-square)
    - [Right Triangle](#right-triangle)
    - [Inverted Triangle](#inverted-triangle)
    - [Pyramid](#pyramid)
    - [Diamond](#diamond)
2. [Number Patterns](#number-patterns)
    - [Square](#square)
    - [Right Triangle](#right-triangle-1)
    - [Floyd's Triangle](#floyds-triangle)
    - [Pascal's Triangle](#pascals-triangle)

## Star Patterns

### Simple Square

Prints a square of stars.

**Example:**

```javascript
function printSquare(size) {
    for (let i = 0; i < size; i++) {
        console.log('*'.repeat(size));
    }
}

printSquare(5);
