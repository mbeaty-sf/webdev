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
$ yarn jest primitives.test.js --watch
```

  #. Open the following file:

        src/www/js/primitives/primitives.js

  #. Complete the exercise.

  #. Run the tests by opening the `index.html` file in your browser.

### JavaScript Operators

  ------------ ----- ----- ----- ----- ----- ----- -----
    Arithmetic `+`   `-`   `*`   `/`   `%`   `**`
      Shortcut `+=`  `-=`  `*=`  `/=`  `%=`  `**=`
       Inc/Dec `++n` `n++` `--n` `n--`
       Bitwise `~`   `&`   `|`   `^`   `>>`  `<<`  `>>>`
    Comparison `>`   `>=`  `<`   `<=`
      Equality `==`  `!=`  `===` `!==`
         Logic `!`   `&&`  `||`
        Object `.`   `[]`
        String `+`
  ------------ ----- ----- ----- ----- -----

(Most operators have assignment shortcut versions.)

## Equality in JavaScript {#ec9075fc36c911e8bf5bdbeceee344b0}

### Sloppy Equality

  - The traditional equality operators in JS are sloppy

  - That is, they do implicit type conversion

~~~ {.javascript}
"1" == 1;   // true
[3] == "3"; // true

0 != "0";  // false
0 != "";   // false
~~~

### Strict Equality

More traditional equality checking can be done with the `===`
operator:

~~~ {.javascript}
"1" === 1;  // false
0 === "";   // false

"1" !== 1;  // true
[0] !== ""; // true
~~~

(This operator first appeared in ECMAScript Edition 3, circa 1999.)

<<(es-features/es2015.md#x4588a4c36ca11e8bffa276babc0cbbb)

## Boolean Values and Logic Operators

### What Is `true` and What Is `false`?

  - Things that are `false`:

    ~~~ {.javascript insert="../../src/examples/js/bool.js" token="false"}
    ~~~

  - Everything else is `true`, including:

    ~~~ {.javascript insert="../../src/examples/js/bool.js" token="true"}
    ~~~

### Boolean Operators: `&&` (Conjunction)

`a && b` returns either `a` or `b` and short circuits:

~~~ {.javascript insert="../../src/examples/js/bool.js" token="conjunction"}
~~~

### Boolean Operators: `||` (Disjunction)

`a || b` returns either `a` or `b` and short circuits:

~~~ {.javascript insert="../../src/examples/js/bool.js" token="disjunction"}
~~~

### Boolean Operators: !

Boolean negation: `!`:

~~~ {.javascript}
let x = false;
let y = !x; // y is true
~~~

Double negation: `!!`:

~~~ {.javascript}
let n = 1;
let y = !!n; // y is true
~~~

### Exercise: Boolean Operators

  - Experiment with `&&`:

    ~~~ {.javascript}
    0 && console.log("Yep");
    1 && console.log("Yep");
    ~~~

  - Experiment with `||`:

    ~~~ {.javascript}
    0 || console.log("Yep");
    1 || console.log("Yep");
    ~~~
