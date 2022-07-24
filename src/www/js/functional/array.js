/******************************************************************************
 * EXERCISE 1: Write a function that takes a list of users, and invokes their
 *             `sendNotification` method with the provided `message`
 */

export function exercise1(users, message) {

  // TODO your code goes here

}

/******************************************************************************
 * EXERCISE 2: Write a function that uppercases all the strings in the
 *             array `strings` provided.
 */
export function exercise2(strings) {

  // TODO your code goes here

}

/******************************************************************************
 * EXERCISE 3: Return true if all the `nums` provided are odd. Otherwise,
 *             return false.
 */
export function exercise3(nums) {

  // TODO your code goes here

}

/******************************************************************************
 * EXERCISE 4: Take a list of `users` who have an `age` prop on them, and return
 *             a list of those users who can vote (18 or over).
 */
export function exercise4(users) {

  // TODO your code goes here

}

/******************************************************************************
 * EXERCISE 5: Take a list of `users` and return an object indexing the user
 *             objects by their id.
 *
 *             Input: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, ...]
 *             Output: {
 *               1: { id: 1, name: 'A' },
 *               2: { id: 2, name: 'B' },
 *               ...
 *             }
 */
export function exercise5(users) {

  // TODO your code goes here
  return users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})

}
