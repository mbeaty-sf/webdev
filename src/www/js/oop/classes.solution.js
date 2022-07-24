/**
 * Create a class `TempTracker`
 *
 * It has two methods:
 *
 *   setTemp: takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *   getTemp: returns the last temperature set by
 *            the setTemp function.
 *
 */

export class TempTracker {
  constructor() {
    this.temp = 0
  }

  getTemp() {
    return this.temp
  }

  setTemp(v) {
    this.temp = v
  }
}

/**
 * Create a class `AverageTempTracker`
 *
 * Offers the same functionality as `TempTracker`
 *
 * Additionally, it implements:
 *
 *   getAverageTemp: returns the average of temps that
 *                   have been set
 *
 */

export class AverageTempTracker extends TempTracker {
  constructor() {
    super()
    this.temps = []
  }

  setTemp(v) {
    super.setTemp(v)
    this.temps.push(v)
  }

  getAverageTemp() {
    return this.temps.reduce((acc, n) => acc + n) / this.temps.length
  }
}

export class Counter {
  #counter = 1

  tick() {
    return this.#counter++
  }
}
