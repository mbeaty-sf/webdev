## JavaScript Operators

### JS Operators

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

### What Is `true` and What Is `false`?

- Things that are `false`:

```javascript
false;
null;
undefined;
""; // The empty string
0;
NaN;
```

- Everything else is `true`, including:

```javascript
"0";      // String
"false";  // String
[];       // Empty array
{};       // Empty object
Infinity; // Yep, it's true
```

### Sloppy Equality

- The traditional equality operators in JS are sloppy

- That is, they do implicit type conversion, checking if they're both "truthy" or "falsey"

```javascript
"1" == 1;   // true
[3] == "3"; // true

0 != "0";  // false
0 != "";   // false
```

### Strict Equality

Stricter equality checking is done with the `===` operator:

```javascript
"1" === 1;   // false
[3] === "3"; // false

0 !== "0";   // true
0 !== "";    // true
```

If you need to compare truthiness, explicitly cast them:

```javascript
Boolean("1") === Boolean(1) // true
```

### Boolean Operators: `&&`

`a && b` returns either `a` or `b` and short circuits:

```javascript
if (a) {
  return b
} else {
  return a
}
```

### Boolean Operators: `||`

`a || b` returns either `a` or `b` and short circuits:

```javascript
if (a) {
  return a
} else {
  return b
}
```

### Boolean Operators: !

Boolean negation: `!`:

```javascript
const x = false
const y = !x // y is true
```

Double negation: `!!`:

```javascript
const n = 1
const y = !!n // y is true
```

Casting with `Boolean`:

```javascript
Boolean(1) // true
Boolean(0) // false
```

### Exercise

Answer these questions:

1. In which cases do "Hi" get printed out?

```javascript
0 && console.log("Hi")
1 && console.log("Hi")
0 || console.log("Hi")
1 || console.log("Hi")
```

2. What do these statements evaluate to?

```javascript
0 && 2 // ?
1 && 2 // ?
0 || 2 // ?
1 || 2 // ?
```

3. Should you use `==/!=` or `===/!==` and why?

Use the Dev Tools Console to check your work.
