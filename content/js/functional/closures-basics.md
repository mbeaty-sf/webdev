## Closures: Basics

### Closures: Basics

* One of most powerful concepts in JavaScript
* Concept shared by most FP languages
* Every time a function gets created, a closure is born

### Closures: Definition

A function bundled (**enclosed**) 

with surrounding state (**lexical environment**)

```javascript
const init = () => {
  const name = 'Andrew' // `name` is enclosed
  const sayName = () => { console.log(name) }
  sayName()
}
```

### Closures: Definition

Closures allow functions to refer to

surrounding state even after function has returned.

```javascript
const init = () => {
  const name = 'Andrew'
  return () => { 
    console.log(name) 
  }
}

const sayMyName = init()
sayMyName() // 'Andrew'
```

### Demonstrating Closures: An Example

~~~ {.javascript insert="../../../src/examples/js/closure.js" token="simple"}
~~~

(Open `src/examples/js/closure.html` and play in the debugger.)

### Creating Private Variables

Using closures to create truly private variables in JavaScript:

~~~ {.javascript insert="../../../src/examples/js/closure.js" token="private"}
~~~

(Open `src/examples/js/closure.html` and play in the debugger.)

### Creating Private Variables

Using closures to create truly private variables in JavaScript:

```javascript
const createContainer = () => {
  let privateVar = 42

  return {
    getPrivateVar: () => privateVar,
    setPrivateVar: (n) => { privateVar = n },
  }
}

const x = createContainer()
x.privateVar // undefined
x.getPrivateVar() // 42
```

### Objects and arrays are like data containers

* When a closure references an `Object` or `Array`...
* They refer to the *container*, not the contents at the time

(Demo)

### Exercise

  #. Open `src/www/js/functional/closure-private.test.js`
  
  #. Follow directions in the `it` statements
  
  #. All tests should keep passing 

```shell
$ cd src
$ yarn jest closure-private.test.js --watch
```
