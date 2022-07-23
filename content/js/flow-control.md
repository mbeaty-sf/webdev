## Flow Control

### Conditional Statements

~~~ {.javascript}
if (expression) { then_part; }

if (expression) {
  then_part;
} else {
  else_part;
}
~~~

### Chaining Conditionals

\columnsbegin
\column{.5\textwidth}

You can chain `if / else`'s together:

~~~ {.javascript}
if (expression) {
  then_part;
} else if (expression2) {
  second_then_part;
} else {
  else_part;
}
~~~

\column{.5\textwidth}

Nesting is possible:

~~~ {.javascript}
if (expression) {
  then_part;
} else {
  if (expression2) {
    second_then_part;
  } else {
    else_part;
  }
}
~~~

\columnsend

### Switch Statements

Cleaner conditional (using strict equality checking):

~~~ {.javascript}
switch (expression) {
  case val1:
    then_part;
    break;

  case val2:
    then_part;
    break;

  default:
    else_part;
    break;
}
~~~

Don't forget that `break;` statement!

### The Major Looping Statements

  * Traditional `for`:

    ~~~ {.javascript}
    for (let i = 0; i < 10; i++) { /* body */ }
    ~~~

  * Iterating across an array:

    ```javascript
    for (let element of array) { /* ... */ }
    ```

  * Iterating across object properties:

    ~~~ {.javascript}
    for (let prop in object) { /* body */ }
    ~~~

  * Traditional `while`:

    ~~~ {.javascript}
    while (condition) { /* body */ }
    ~~~

  * Traditional `do ... while` (VERY uncommon):

    ~~~ {.javascript}
    do { /* block */ } while (condition)
    ~~~

  - Loops can be labeled and exited with `break`.

  - Use `continue` to skip to the next iteration of the loop.

### `for` vs `while`

- Use `for` when you know how many times you want to iterate
  - "look at every element in the array"
  - "do this 10 times"
- Use `while` when you don't
  - "process the events until there are none left in the queue"

### Looping

- Loops can be labeled and exited with `break`.

```javascript
for (let i = 1; i < 10; ++i) {
  if (i % 2 === 0) break;
  console.log(i);
}
// prints 1
```

- Use `continue` to skip to the next iteration of the loop.

```javascript
for (let i = 1; i < 10; ++i) {
  if (i % 2 === 0) continue;
  console.log(i);
}
// prints 1, 3, 5, 7, etc.
```

### while Loops

~~~ {.javascript}
let i=0;

while (i<10) {
  i++;
}
~~~

### The Ternary Conditional Operator

  - Ternary operator:

    ~~~ {.example}
    const result = condition ? then : else;
    ~~~

  - Example:

    ~~~ {.javascript}
    const shirt = isWarm ? "t-shirt" : "sweater";
    ~~~
    
Unlike `if/else`, ternary operators **evaluate** the value
and can be assigned.

```javascript
const foo = if (cond) { value1 } // not allowed
const foo = cond ? value1 : value2 // allowed
```

### The Ternary Conditional Operator

They can be chained to simulate `if / else if / ... / else`:

```javascript
const res = cond1 
  ? then1
  : cond2
  ? then2
  : cond3
  ? then3
  : else1
```

### Exercise

#. Open `src/www/js/control/control.js`

#. Follow directions in the code

#. Run tests with the command below and get them to pass:

```shell
$ cd src # (from root)
$ npx jest control.test.js --watch
```