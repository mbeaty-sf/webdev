## Values and Operators

### JavaScript Comments

- Single-line comments:

  ```javascript
  // Starts with two slashes
  ```  

- Multiple-line comments:

  ```javascript
  /**
   * Pretty common style for block comments.
   * This is a second line.
   */
  ```

- Multiple-line comments (less common):

  ```javascript
  /* Begins with a slash and asterisk.
  Second line.
  Ends with an asterisk slash. */
  ```

### Primitive Values vs. Objects

- Primitive values

```javascript
"Hello World" // String
42            // Number
true          // Boolean
false         // Boolean
null          // "No value"
undefined     // "Unset"
```

- Objects

```javascript
[1, 2, 3]          // array
{ name: 'Andrew' } // object
function myFn() {} // function
```

(we call these different names, but they're all Object type)

### Variables

You **declare** a variable

```javascript
let x
```

You can **assign** a value to a variable

```javascript
x = 1
```

You can do **both** at the same time:

```javascript
let x = 1
```

### Variables

Not assigning a value when declaring gives it `undefined`

```javascript
let x
x // undefined
```

### Variables: const, let, var

Use `const` most of the time. Prevents assignment:

```javascript
const x = 1
x = 2 // error
```

Use `let` when you must reassign something:

```javascript
let result
result = 'Hello'
result = 'Goodbye'
```

Don't use `var` ever, it's an old keyword and causes chaos

```javascript
var x = 1 // bad times
```

### Conventions

- Use camel case: `userName`, `favoriteFood`
- Can start with letters, underscore, or `$`

```javascript
const _foo
const $foo
```

- Can have numbers (but not to start)

```javascript
const foo1 // yes
const 1foo // syntax error
```

- Fun fact: all Unicode characters are accepted ([link](https://mathiasbynens.be/notes/javascript-identifiers-es6)):

```javascript
const ಠ_ಠ = 'cool, but do not do this'
```

### `undefined` and `null`

  - There are two special values: `null` and `undefined`
  - `undefined` means "unset"
  - `null` means "absent" or "no appropriate value"
  - Variables without a value when declared are `undefined`

### Numbers

  - All numbers are 64-bit floating point
  - Keep an eye on [number precision](http://0.30000000000000004.com/):

    ~~~ {.javascript}
    0.1 + 0.2 == 0.3; // false
    ~~~

  - Special numbers: `NaN` and `Infinity`

    ~~~ {.javascript}
    NaN == NaN; // false
    1 / 0;      // Infinity
    ~~~

  - Use a special data type like [Big
    Decimal](https://github.com/dtrebbien/BigDecimal.js).
  - Only use integers, e.g. money in cents

### Strings

  - Single quotes (`'Hello'`)) or double quotes (`"Hello"`)
  - Typical escaped characters works (e.g., `\n` and `\t`)
  - Concatenate strings:

```javascript
'Hello' + ' World' // 'Hello World'
```

- Variable substitution using template strings with backticks:

```javascript
const name = 'Andrew'
const greeting = `Hello my name is ${name}`
```

### Objects

Dynamic collections of key-value pairs.

```javascript
const emptyObj = {}
const pet = { name: 'Fido' }
pet.name // 'Fido'
```

More on this later!

### Arrays

An iterable collection of elements, representing a list.

```javascript
const emptyArr = []
const oddNumbers = [1, 3, 5]
const mixed = [1, true, 'hello']
```

More on this later!

### Functions

Runs the code inside the block and returns a value.

```javascript
function sayHello() {
  console.log("Hello world")
}

sayHello() // runs the function
```

Parameters can be passed in order to change behavior.

```javascript
function add(a, b) {
  return a + b
}

add(1, 2) // 3
add(5, 4) // 9
```

### Value Coercion

  - JavaScript is weakly typed, can implicitly convert:
  - Usually unexpected:

```javascript
8 * null; // 0

null > 0;  // false
null == 0; // false
null >= 0; // true
```

([Link](https://www.destroyallsoftware.com/talks/wat) @ 1:24)

### The typeof Operator

Sometimes useful for determining a variable's type:

~~~ {.javascript}
typeof "Hello";      // "string"    
typeof 42;           // "number"
typeof console.log;  // "function"
typeof undefined;    // "undefined"
~~~

But many are not what you would expect:

```javascript
typeof NaN;       // "number"
typeof [1, 2, 3]; // "object"
typeof null;      // "object"
```

So use it sparingly.

### Exercise

#. Open `src/www/js/primitives/primitives.js`

#. Follow directions in the code

#. Run tests with:

```shell
$ cd src # (from root)
$ npx jest primitives.test.js --watch
```
