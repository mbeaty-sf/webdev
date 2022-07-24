/******************************************************************************
 * EXERCISE 1: Run the `assertOdd` function, and wrap it so that it doesn't
 *             propagate an error. If an error is thrown, return false, otherwise
 *             return true.
 */
export function exercise1(input) {

  // TODO: You code here
  assertOdd(input)

}

/******************************************************************************
 * EXERCISE 2: Write a custom error class, PhoneNumberUSValidationError, which
 *             is thrown when an invalid phone number is reported. Then,
 *             implement this function, which takes a `user` and verifies their
 *             `phoneNumber` property is valid, matching the format 123-123-1234.
 *             If it's invalid, it should console.log a message:
 *
 *                 "Invalid phone number"
 *
 *             Other errors should be re-thrown.
 *
 *             Hint: you can use a regex like this one: https://regex101.com/r/e1XODC/1
 */
export function exercise2(user) {

  // TODO: You code here

}

/******************************************************************************
 * Helper code, you can ignore below here.
 */
const assertOdd = (input) => {
  if (input % 2 === 0) {
    throw new Error('Boom')
  }
}