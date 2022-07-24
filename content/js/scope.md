## Variable Scope

### Variable Scope

  - **Scope**: where can we access a variable?

  - Two types of scope: **global** and **local**

  - If you don't use `const`/`let`/`function`/`var`, then variables are **global**
  
  - When you set/get global variables, explicitly use `window`

### Function Scopes

* Functions create **separate** scopes
* Variables defined inside a scope inaccessible from outside

### Function Scopes

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="function-scopes"}
~~~

### Nested Scopes

![](images/one-way-glass.png)

https://css-tricks.com/javascript-scope-closures/

### Function Scopes

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="function-scopes-answer"}
~~~

### Nested Scopes

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="nested-example"}
~~~

### Lexical Scoping

**Lexical Scoping**: scope is based on position in code. 

Inner scopes include scope of parent scopes.

### Nested Scopes

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="nested-example"}
~~~

### Nested Scopes

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="nested-answer"}
~~~

### Shadowing

Variables in inner scopes temporarily override

or **shadow** variables by the same name in outer scopes

### Shadowing

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="shadowing"}
~~~

### Shadowing

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="shadowing-answer"}
~~~

### Block Scope

`const` and `let` variables have **block scoping**.

`var` variables don't have block scoping, and hoist to the top of the nearest function.

This basically means any `{ ... }` defines a new scope.

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="block-scope-answer"}
~~~

### Block Scope

You can even use just a plain `{ }` to create a scope namespace.

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="block-scope-2"}
~~~

### Block Scope

You can even use just a plain `{ }` to create a scope namespace.

~~~ {.javascript insert="../../src/examples/js/scopes.js" token="block-scope-2-answer"}
~~~

### Top-Down Code

You can organize your functions top-down in order of calling.

Sub-functions can go below top-level functions.

```javascript
const first = () => {
  second()
}

const second = () => {
  third()
}

const third = () => {
  console.log('third')
}
```

### Top-Down code

But you must define your top-level function before calling it.

```javascript
first() // ReferenceError

const first = () => { /* ... */ }

first() // okay
```

### Exercise

#. Open `src/www/js/scopes/scopes.js`

#. Follow directions in the code

#. (There are no tests associated with this exercise)
