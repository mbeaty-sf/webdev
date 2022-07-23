## Closures: Advanced

### Creating Specialized Behavior

Perhaps most powerful aspect of closures:

Specializing behavior of a general function.

```javascript
const prop = (key) => (obj) => obj[key]
```

### Creating Specialized Behavior

~~~ {.javascript insert="../../../src/examples/js/closure.js" token="specialization"}
~~~

### Creating Specialized Behavior

What about getting `prop` off a list of objects?

Something like...

```javascript
const getNames = pluck('name')

getNames(users) // ['Andrew', 'Billy', ...]
```

### Creating Specialized Behavior

Starting point:

```javascript
const getNames = (items) => {
  const vals = []
  for (let i = 0; i < items.length; i++) {
    vals.push(items[i].name)
  }
  return vals
}
```


### Creating Specialized Behavior

End point:

```javascript
const pluck = (key) => (
  (xs) => (
    xs.map(prop(key))
  )
)
```

### Exercise

#. Open `src/www/js/functional/closure-specialize.test.js`

#. Follow directions in the `it` statements

#. All tests should keep passing

```shell
$ cd src
$ yarn jest closure-specialize.test.js --watch
```
