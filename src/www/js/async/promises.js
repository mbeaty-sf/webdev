/******************************************************************************
 * EXERCISE 1: Implement the button handler to call `getTodosFakeServer`. When
 *             the server returns the data, extract the text for each item
 *             and pass them as an array to `addTodos`, which is a provided
 *             helper function to add them as li's to the ul element.
 *             Expected response structure:
 *
 *                 [
 *                   { id: 1, text: '...', done: false },
 *                   { id: 2, text: '...', done: false },
 *                   ...
 *                 ]
 */

const exercise1 = () => {
  // TODO your code here, do something with getTodosFakeServer
  getTodosFakeServer()
}

const addTodos = (todoStrings) => {
  const list = document.getElementById('exercise1-todos')
  todoStrings.forEach((text) => {
    const todo = document.createElement('li')
    todo.appendChild(document.createTextNode(text))
    list.appendChild(todo)
  })
}

/******************************************************************************
 * EXERCISE 2: Call `getTodosFailedFakeServer`, which simulates a server error.
 *             When an error is encountered, update the span#exercise2-error
 *             with an error message from the server.
 *
 *             Expected response:
 *
 *                 { error: '...' }
 */
function exercise2() {

  // TODO: You code here
  getTodosFailedFakeServer()

}











/******************************************************************************
 * This is helper code below, you can ignore it.
 */

const getTodosFakeServer = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { id: 1, text: 'Foo', done: false },
        { id: 2, text: 'Bar', done: false },
        { id: 3, text: 'Baz', done: false },
      ])
    }, 500)
  })
}

const getTodosFailedFakeServer = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej({ error: 'Server unavailable, try again later.' })
    }, 500)
  })
}

