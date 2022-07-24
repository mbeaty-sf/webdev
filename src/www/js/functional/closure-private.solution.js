/**
 * The function below should return an object with two
 * properties:
 *
 *   setTemp: A function that takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *            Store the current temperature in a closure variable.
 *
 *   getTemp: A function that returns the last temperature set by
 *            the setTemp function.
 */
export function createTempTracker() {
  let temp
  return {
    setTemp(val) { temp = val },
    getTemp() { return temp }
  }
}
