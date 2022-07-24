### Getters and Setters

You can apply custom behavior when getting/setting properties.

```javascript
class Car {
  constructor() {
    this._speed = 0
  }

  get speed() { return this._speed }

  set speed(x) {
    if (x > 100) throw new Error('Too fast')
    this._speed = x
  }
}

const toyota = new Car()
toyota.speed = 101 // Error: 'Too fast'
toyota.speed = 50
```

### Private Fields

Privacy used to be indicated by convention:

```javascript
class Message {
  constructor(msg) {
    this._message = msg
  }
}
```

### Private Fields

Stage 3 syntax now supports private fields:

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="private-field"}
~~~

### Private Instance Fields

You can even make private instance fields!

~~~ {.javascript insert="../../../src/examples/es-features/es2015/class.js" token="private-instance-field"}
~~~
