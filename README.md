# FizzBuzz Implementations (TypeScript and JavaScript)

This repository contains two implementations of the classic FizzBuzz algorithm, each illustrating a different approach:

- `fizzbuzz.ts`: An object-oriented, extensible implementation written in TypeScript.
- `fizzbuzz.js`: A simple, functional implementation written in plain JavaScript.

## File: fizzbuzz.ts (TypeScript - Class-based)

This version defines a `FizzBuzz` class that supports dynamic rule configuration.

Features:
- Type-safe using TypeScript
- Clean, modular design
- Allows rules to be added at runtime
- Easily testable and reusable in larger projects

Example usage:
```ts
const fizzBuzz = new FizzBuzz();
console.log(fizzBuzz.run(15)); // [1, 2, 'Fizz', 4, 'Buzz', ..., 'FizzBuzz']

fizzBuzz.addRule(7, 'Bazz');
console.log(fizzBuzz.run(21)); // Includes 'Bazz' at multiples of 7