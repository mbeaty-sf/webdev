## Values and Operators

### Primitive Values vs. Objects

  - Primitive Values:

    ~~~ {.javascript}
    "Hello World" // Strings
    42            // Numbers
    true          // Boolean
    false         // Boolean
    null          // No value
    undefined     // Unset
    ~~~

  - Objects (arrays, functions, etc.)

### Variables in JavaScript

~~~ {.javascript}
let x;          // undefined
let y = "Foo";  // String
let z = 5;      // Number
~~~

### Declaring and Initializing Variables

  - Declare variables to make them local:

    ~~~ {.javascript}
    let x;
    ~~~

  - You can initialize them at the same time:

    ~~~ {.javascript}
    let n = 1;

    let x, y=1, z;
    ~~~

  - If you don't declare a variable with `var`, the first time you
    assign to an undefined identifier it will become a global variable.

  - If you don't assign a value to a new variable it will be `undefined`

### Variable Naming Conventions

  - Use camelCase: `userName`, `partsPerMillion`

  - Allowed: letters, numbers, underscore, and `$`

  - Don't use JavaScript keywords as variable names

  - Always start with a lowercase letter

(All identifiers can be made up of valid Unicode characters.  Don't go
crazy, not all [browsers support this][jsids].  Stick to UTF-8
identifiers.)

[jsids]: https://mathiasbynens.be/notes/javascript-identifiers-es6

### `undefined` and `null`

  - There are two special values: `null` and `undefined`
  - `undefined` means "unset"
  - `null` means "absent" or "no appropriate value"
  - Variables without a value when declared are `undefined`

```javascript
let foo // <- this is the "declaration"
foo // undefined
```

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

### Exercise


#. Open `src/www/js/primitives/primitives.js`

#. Follow directions in the code

#. Run tests with:

```shell
$ cd src # (from root)
$ npx jest primitives.test.js --watch
```
