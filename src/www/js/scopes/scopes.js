/******************************************************************************
 * EXERCISE 1: Fill in the ?'s with the expected values. Try to figure out
 *             the answer without running this code.
 */
export function exercise1() {
  d = 15

  function foo(b) {
    e = 42
    function myFn(f) {
      const c = 2
      return f + c + b
    }
    console.log(c) // ?
    return myFn
  }

  console.log(d) // ?
  console.log(e) // ?
  console.log(foo(2)(4)) // ?
}

/******************************************************************************
 * EXERCISE 2: Fill in the ?'s with the expected values. Try to figure out
 *             the answer without running this code.
 */
export function exercise2() {

  d = 15
  function foo() {
    const c = 10
    return d === c ? 'error' : 'yay'
  }

  console.log(foo()) // ?
  d = 10
  console.log(foo()) // ?

}

