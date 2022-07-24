## Objects

### A Collection of Key/Value Pairs

- A dynamic, mutable collection of key value pairs:

```javascript
const person = {
  name: 'Andrew',
  favoriteFood: 'chocolate',
}
```

### Getting values

Dot notation:

```javascript
const pet = { name: 'Fido', type: 'dog' }

pet.name // 'Fido'
```

Accessing a property that isn't on the object returns `undefined`:

```javascript
pet.propThatDoesNotExist // undefined
```

Getting a dynamic property based on a variable (square bracket notation):

```javascript
const propName = 'type'

pet[propName] // 'dog', looking for key "type"
pet.propName // undefined, looking for key "propName"
```

### Setting values

Dot notation:

```javascript
const pet = { /* ... */ }

pet.name = 'Lassie'
```

Square bracket notation:

```javascript
const propName = 'type'
pet[propName] = 'dog'
```

### Removing properties

With the `delete` keyword:

```javascript
const pet = { name: 'Fido', type: 'dog' }
delete pet.name
pet // { name: 'Fido' }
```

### Property Enumeration

  - The `for...in` loop iterates over an object's properties in an **unspecified** order.

```javascript
for (let propertyName in object) {
  // propertyName is a string
  object[propertyName] // gets the value
}
```

- Includes _inherited_ properties, use `obj.hasOwnProperty(propName)` to test

```javascript
const obj1 = { color: 'red' }
const obj2 = Object.create(obj1) // inherit from 

obj2.color // 'red'
obj2.hasOwnProperty('color') // false
```

### Property Enumeration

```javascript
Object.keys(obj) // all the keys of the object

for (let key of Object.keys(obj)) { /* ... */ }

Object.values(obj) // all the values of the object

for (let value of Object.values(obj)) { /* ... */ }

Object.entries(obj) // all [key, value] pairs of the object

for (let [key, value] of Object.entries(obj)) { /* ... */ }

Object.getOwnPropertyNames(obj) // all properties, incl. non-enumerable
```

### Array vs Object Enumeration

`for...of` is for arrays

> Show me each bead OF this string of pearls

```javascript
for (let element of array) { /* ... */ }
```

`for...in` is for objects

> Show me each word IN this dictionary

```javascript
for (let property in object) { /* ... */ }
```

### Comparing objects

- `===` compares references

```js
const obj1 = {}
const obj2 = obj1 // same object in memory
const obj3 = {} // different object in memory

obj1 === obj2 // true
obj1 === obj3 // false
```

- No way to compare object contents (exactly)
- Decent workaround, works in 99% of cases:

```javascript
JSON.stringify(obj1) === JSON.stringify(obj2)
```

### Object methods

Objects can have functions as properties. We refer to them as "methods".

`this` refers to the object itself

```javascript
const person = {
  name: 'Andrew',
  sayName() {
    console.log(this.name)
    // basically the same as
    console.log(person.name)
  }
}

person.sayName()
```

There's much more detail here to get into later.

### Exercise

#. Open `src/www/js/objects-basic/objects-basic.js`

#. Follow directions in the code

#. Run tests with:

```shell
$ cd src # (from root)
$ npx jest objects-basic.test.js --watch
```