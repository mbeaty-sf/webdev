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

export class TempTracker {}

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

export class AverageTempTracker {}

export class Counter {
  /**
   * Step 1: Rewrite setting the initial state without
   * the `constructor` method.
   */
  constructor() {
    this.counter = 1
  }

  /**
   * Step 2: rewrite `this.counter` to use a private field
   *         so it can't be accessed outside the class.
   */
  tick() { return this.counter++ }
}
