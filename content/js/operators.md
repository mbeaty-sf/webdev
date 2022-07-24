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

### The truth of the matter

- Things that are `false` (falsey):

```javascript
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean("");
Boolean(0);
Boolean(NaN);
```

- Everything else is `true` (truthy), including:

```javascript
Boolean(1)   // non-zero number
Boolean("0") // non-empty string
Boolean([])  // any array
Boolean({})  // any object
Boolean(Infinity)
```

### Equality

- JS `==` and `!=` are "abstract equality operators", do implicit type conversions
- They do implicit type versions, very confusing

```javascript
Boolean(false) == Boolean(null) // true
false == null // false

[3] == "3"; // true

"0" == 0;   // true
0 == "";    // true
"0" == "";  // false

true == []  // false
true == ![] // false
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
