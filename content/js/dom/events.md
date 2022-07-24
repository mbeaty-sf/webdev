## DOM Events

### Events Overview

* Events can happen on click, hover, key press, form submission, etc.
* Events are received in a synchronous "event loop":
  * JS runtime hangs out, quietly waiting for events
  * Events fire and trigger registered handler functions
  * Handler functions run synchronously

### Most Common Events

* click
* change
* keydown
* submit

### Slightly More Comprehensive List

* UI: load, unload, error, resize, scroll
* Keyboard: keydown, keyup, keypress
* Mouse: click, dblclick, mousedown, mouseup, mousemove
* Touch: touchstart, touchend, touchcancel, touchleave, touchmove
* Focus: focus, blur
* Form: input, change, submit, reset, select, cut, copy, paste

### Handling Events

#. Get the element to monitor

      * `document.getElementBy...`

#. Register a function for an event on that element

      * `.addEventListener('event', handler)`

### Event Registration

```
const button = document.getElementById('greet')

button.addEventListener('click', () => {
  alert('Hello!')
})
```

(Example: <http://localhost:3000/js/dom/events-demo.html>)

### Event Bubbling

* Events propagate from the target node upwards
* Called **bubbling**

```html

<form onclick="console.log('form')">FORM
  <div onclick="console.log('div')">DIV
    <p onclick="console.log('p')">P</p>
  </div>
</form>
```

Clicking `<p>`:   `P  DIV  FORM`

Clicking `<div>`:    `DIV  FORM`

### Event Bubbling

* Bubbling can be prevented with `event.stopPropagation`

```html

<body onclick="console.log('Will not be reached')">
<button>Click me</button>
</body>
```

```javascript
button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log('button clicked')
})
```

Clicking `<button>`:  `button clicked`

### Sidenote

We're using `onclick` for terse examples

Generally **only** use `addEventListener`

### Preventing Default Behavior

* The browser has a default action for many events, e.g.
  * `submit` will `POST` to the `form` `action` url
  * Clicking an anchor link `<a>` will load a new page
* Default action prevented with `event.preventDefault`

```javascript
anchorEl.addEventListener('click', (event) => {
  event.preventDefault() // will not load the page
})

formEl.addEventListener('submit', (event) => {
  event.preventDefault() // will not submit the form and reload
})
```

### Event Delegation

```html

<ul>
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
</ul>
```

Repeated registered handlers. :-(

```javascript
Array.from(document.getElementsByTagName('li'))
  .forEach((li, i) => {
    li.addEventListener('click', () => {
      console.log(`Clicked option ${i + 1}`)
    })
  })
```

### Event Delegation

What happens if another `li` is added dynamically

and then clicked?

(Example: <http://localhost:3000/js/dom/events-demo.html>)

### Event Delegation

Event handler `event` knows two things:

* **`currentTarget`**: Where it's registered
* **`target`**: Who triggered the event

### Event Delegation

\begin{figure}
How can we use this to our advantage?
\end{figure}

### Event Delegation

Put the handler on the parent

```javascript
const ul = document.getElementsByTagName('ul')[0]
ul.addEventListener('click', (e) => {
  console.log(ul === e.currentTarget) // true
  console.log(`Clicked ${e.target.innerText}`)
})
```

### Functions Given Context of Event

Event handlers are given context of that element.

```js
document.getElementsByTagName('button')
  .addEventListener('click', function () {
    console.log(this) // the button that was clicked
  })
```

Arrow functions won't work here.

```js
document.getElementsByTagName('button')
  .addEventListener('click', () => {
    console.log(this) // window  :-(
  })
```

### Functions Given Context of Event

Easy solution is to use `event.currentTarget`.

```js
document.getElementsByTagName('button')
  .addEventListener('click', (event) => {
    console.log(event.currentTarget) // the button
  })
```

### Functions Given Context of Event

Moral of the story: `this` **can** be more expressive

...but mostly it causes confusion. Avoid it when possible.

### Exercise: Simple User Interaction

#. Open the following files in your text editor:

    - `src/www/js/dom/events-exercise.js`
    - `src/www/js/dom/events-exercise.html`

#. Open <http://localhost:3000/js/dom/events-exercise.html> file in your web browser.

#. Complete the exercise.
