## Arrays

### The Array Object

- Arrays are objects that behave like a list of elements
- Good for ordering data

### Arrays

Creating arrays:

```javascript
const arr1 = [1, 2, 3]

// can be non-homogenous
const arr2 = [1, true, 'hello', {}]

// using the array constructor (not as common)
const arr3 = new Array(1, 2, 3)
```

### Populating arrays

Create an array of specified size and fill with a value:

```javascript
const zeros = Array(5).fill(0)

zeros // [0, 0, 0, 0, 0]
```

### Getting info

```javascript
const arr = [1, 2, 3]
arr.length // 3
arr[0] // 1
arr[5] // undefined
typeof arr // "object", don't use
Array.isArray(arr) // true
```

### Setting info

```javascript
const arr = [1, 2, 3]
arr[0] = 'yo'
arr // ['yo', 2, 3]
arr[4] = 5
arr // ['yo', 2, 3, <empty>, 5]
```

### Array operations

- Insert:     `a.push(x)` **or** `a.unshift(x)`
- Remove:     `a.pop()` **or** `a.shift()`
- Combine:    `const b = a.concat([4, 5])`
- Extract:    `const b = a.slice(start, end)`
- Manipulate: `a.splice(start, deleteCount, ...items)`
- Query:      `a.includes(element) // true/false`
- Search:     `a.indexOf(element)`
- Sort:       `a.sort()`
- To string:  `a.join(separator)`

### Iterating

```javascript
// generally don't do this
for (let i = 0; i < array.length; i++) {
  const element = array[i]
}

// this is better
for (let element of array) {
  // ...
}
```
