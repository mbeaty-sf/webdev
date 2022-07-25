/**
 * Exercise 1
 * ============================================
 *
 * Set a `debugger` statement inside the `setTimeout` function to investigate
 * the source of the bug in your DevTools.
 *
 * Hint: refer to the "Timers" slides again, on the slide "this darn problem strikes again"
 * if you're not clear what's going wrong.
 */

const person = {
  firstName: 'Andrew',
  lastName: 'Smith',
  fullName() { return `${this.firstName} ${this.lastName}` },
  sayName() {
    setTimeout(function () {
      console.log(`Hello my name is ${this.fullName()}`)
    }, 100)
  },
}

person.sayName()

/**
 * Exercise 2
 * ============================================
 *
 * Something is weird with the click listener, it's not updating the click count on the button
 * correctly. Use the Chrome DevTools to set a breakpoint on click events and investigate the issue.
 */

document.addEventListener('click', (e) => {
  const span = e.currentTarget.getElementsByTagName('span')[0]
  const clicks = parseInt(span.innerText)
  span.innerText = clicks + 1
})

/**
 * Exercise 3
 * ============================================
 *
 * Set up the debugger for either:
 *   1. VS Code
 *   2. Webstorm
 *
 * Once that's done, set up a breakpoint to investigate the bug, and fix it.
 *
 * Hint: https://stackoverflow.com/a/750506/2672869
 */

const exercise3 = () => {
  var i = 42

  for (var i = 0; i < 5; i++) {
    console.log('i', i)
  }

  console.assert(i === 42, 'expected i to equal 42')
}

exercise3()

/**
 * Exercise 4
 * ============================================
 *
 * Use the "Pause on exceptions" feature to pause at the place where the exception occurs.
 */

const exercise4 = () => {
  const inner = () => console.log('inner!')
  innner()
}

exercise4()
