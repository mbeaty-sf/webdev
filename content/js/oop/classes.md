## Inheritance: Classes

### JS Gets `class`

* `class` keyword introduced in ES2015
* Provides syntactic sugar on *actual* JS inheritance system
* More familiar to most OOP programmers

### Getting `class`-y

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

const rect = new Rectangle(10, 20)
rect.area() // 200
```


### Understanding `this`

Inside methods of a class, `this` refers to the instance of the object.

```javascript
const rect1 = new Rectangle(2, 4)
const rect2 = new Rectangle(3, 5)

rect1.area() // 8
rect2.area() // 15
```

### Inheritance

Use the `extends` keyword to inherit from another class.

```javascript
class Square extends Rectangle {
  constructor(width) {
    super(width, width)
  }

  sideSize() {
    return this.width
  }
}

const sq = new Square(10)
sq.sideSize() // 10
sq.area() // 100
```

### Static Methods

You can set values and functions on the **class** itself, instead of the instances.

```javascript
class Rectangle {
  static defaultColor = 'red'
}

Rectangle.defaultColor // 'red'
new Rectangle(1, 2).defaultColor // undefined
```

### Static Methods

Sometimes used to store **factories**.

```javascript
class Rectangle {
  // sets to 16:9 ratio
  static widescreen = width => {
    return new Rectangle(width, (width * 9) / 16)
  }

  // ...
}
const rect = Rectangle.widescreen(32)
rect.width // 32
rect.height // 18
```

### Instance Fields

Instance fields let you set a value on the instance.

If your class doesn't accept constructor arguments, you can ditch it:

```javascript
class Rectangle {
  rotated = false
  
  // instead of
  constructor() {
    this.rotated = false
  }
}

const rect = new Rectangle()
rect.rotated // false
```

### Instance Field Methods

Typically, methods are defined like this:

```javascript
  method() { /* ... */ }
```

But you can also define them as "instance field" functions:

```javascript
  method = () => { /* ... */ }
```

(Notice the `=` and using the arrow function.)

### Instance Field Methods

- They effectively do the same thing. 
- Sometimes instance fields are common for frameworks like React
- Instance fields are "better" in cases like React for very technical reasons
- You'll often see something like this:

```javascript
class Button extends React.Component {
  onClick = () => {/* ... */}
  render() {
    // ...
  }
}
```

### Instance Field Methods

They don't lose context.

```js
class Person {
  constructor(name) { this.name = name }
  getNameReg() { return this.name }
  getNameIF = () => this.name
}

const person = new Person('Andrew')
const willLoseContext = person.getNameReg
willLoseContext() // undefined
const willNotLoseContext = person.getNameIF
willNotLoseContext() // 'Andrew'
```

### Instance Fields

* Not supported out-of-the-box with JavaScript
* Supported by TypeScript
* Or via Babel with `@babel/plugin-proposal-class-properties`
* Performance implications
* Mostly matters in UI frameworks e.g. React
