# Recap - Programming in JS

This file will be displayed automatically in a nice way on the home page of the GitHub repository.
You can write it using the markdown format (`.md` files) - more info here: https://docs.github.com/en/get-started/writing-on-github.

## 1) Representing and manipulating data

- We can store data in **variables**. Variables are like containers for our data, their value can change over time.
- Data can be represented using values that are part of a set of data types. We can have primitive data types, and "structural" data types.

### Primitive data types

1. `number`: `2`, `2.15`, `-12`, `NaN`, `Infinity`
2. `string`: `"Hello"`, `'Another one'`, ``Another string``
3. `boolean`: `true` or `false`
4. `null`
5. `undefined`

### Represing structured data

1. Objects: we use them to represent different properties all related to the same entity, to the same "thing". Properties have a name and a value, they can have different data types, you use the name access them, modify them, etc.
2. Arrays: we use them to represent a list of items, all with the same data type. We access the items using their position, their index, in the list (a number). We can use loops to iterate through the elements, to do something for each element. The order of the elements matters.

We can compose arrays, objects, and prmitives, as we want, also nesting arrays in objects, arrays in arrays, objects in objects, etc.

## 2) Controlling the flow of the program

Normally, the program is executed line-by-line, from the top to the bottom.
All lines of code are executed.
But what if we want to skip a line in case some condition holds, or do two different things based on some other condition, or repeat the same lines many times.

1. If-statement (conditional statement): you use it to do two alternative things based on a condition. If true then do this, otherwise do this other thing.
2. Loops: use loops to repeat the same block of code many times. You repeat it until a certain condition stays true. When the condition becomes false, the loop is over.

## 3) Making a block of code reusable

Sometimes you have a piece of code that does something, and you want to reuse it around the program, without having to write it again.

For example: imagine you write a piece of code that, GIVEN a string, it prints it to the console. You will use this every time you want to print. You define a reusable function and you call it `console.log`. The you can execute this code just by calling `console.log` and by giving it what you want to print inside the round brackets.

This is what the people who wrote JS did: and in fact you have `console.log` ready to use. And many other functions e.g., `parseInt`, `Object.assign`, etc. You can also write your own functions.
