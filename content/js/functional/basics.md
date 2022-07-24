## Functions

### Defining a Function

Function statement

```javascript
    function foo() {}
```

Function expression

```javascript
    const foo = function() {}
```

Named function expression

```javascript
    const foo = function myFooFn() {}
```

Arrow function (MOST COMMON)

```javascript
    const foo = () => {}
```

### Function Invocation

Parentheses are mandatory in JavaScript for function invocation. 

Otherwise, you're looking at the function.

```javascript
const foo = (a, b, c) => {
  console.log(a, b, c)
}

foo(1, 2, 3) // 1, 2, 3
foo // [Function: foo]
```

### Function Invocation

Extra arguments won't be bound to a name

Missing arguments will be `undefined`

```javascript
const foo = (a, b, c) => {
  console.log(a, b, c)
}

foo(1, 2, 3, 4, 5) // 1, 2, 3
foo(1) // 1, undefined, undefined
```

### Parameter passing

You may hear that JS does **call by sharing**:

- Primitives (string, number, boolean) are **call by value**
- Objects (objects, arrays, functions) are **call by reference**

**call by sharing**: basically "copies" the value
**call by reference**: edits will affect the "original" value

### Parameter passing

That's pretty confusing. Here's a simpler way:

- **Reassignment** in functions do not affect outside variables

```javascript
const number = 42
const obj = { name: 'Andrew' }
const doThing = (a, b) => {
  a = 43
  b = { name: 'Billy' }
  return a
}
doThing(number, obj) // 43
number // 42
obj // { name: 'Andrew' }
```

### Parameter passing

- **Mutation** in functions do affect outside variables

```javascript
const obj = { name: 'Andrew' }
const arr = [1]
const changeName = (obj, arr) => {
  obj.name = 'Billy'
  arr[1] = 2
}
changeName(obj, arr)
obj // { name: 'Billy' }
arr // [1, 2]
```

### Default Parameters

Parameters can have default values

```javascript
const add = (a, b = 2) => a + b

add(1, 3)  // 4
add(1)  // 3 
```

When argument is `undefined`, it gets the default value

```javascript
add(1, undefined)  // 3
add(1, null)  // 1
```

### Function Arity

A function's *arity* is the number of arguments it expects.  

Accessed via `length` property.

```javascript
const foo = (x, y, z) => { /* ... */ }
foo.length // 3
```

### Function Arity

Optional arguments aren't considered "expected"

```javascript
const foo = (x, y, z = 42) => { /* ... */ }
foo.length // 2
```

### Function Arity

Rest arguments also aren't considered "expected"

```javascript
const foo = (x, y, ...remaining) => { /* ... */ }
foo.length // 2
```

### Functions as Data

Functions can be passed **into other functions**

```javascript
const repeatThreeTimes = (action) => {
  action()
  action()
  action()
}

const sayHello = () => { 
  console.log('Hello') 
}

repeatThreeTimes(sayHello)
//  'Hello'  'Hello'  'Hello'
```

The passed-in function is sometimes referred to as a **callback**.

### Exercise

#. Open `src/www/js/functions-basic/functions-basic.js`

#. Follow directions in the code

#. Run tests with:

```shell
$ cd src # (from root)
$ npx jest functions-basic.test.js --watch
```
