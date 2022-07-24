
console.assert(toyota.speed === 55)

const makeCounter = () => {
  let id = 1
  return () => id++
}



// <<: instance-constructor
class Counter {
  static nextId = makeCounter()
  id = Counter.nextId()
}

const counter = new Counter()
counter.id // 1
// :>>

// <<: private-field
class Counter {
  #counter

  constructor() {
    this.#counter = 1
  }

  count() { return this.#counter++ }
}

const counter = new Counter()
counter.count() // 1
counter.count() // 2
counter.counter // undefined
// :>>

// <<: private-instance-field
class Counter {
  #counter = 1
  count() { return this.#counter++ }
}
// :>>
