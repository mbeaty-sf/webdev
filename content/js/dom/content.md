## Node Content

### HTML

`element.innerHTML`:

  : Gets/sets HTML markup in an element

```javascript
document.body.innerHTML = '' +
  '<ul>' +
  '  <li>Learn DOM</li>' +
  '  <li>Practice innerHMTL</li>' +
  '</ul>'

console.log(document.body.innerHTML)
```

### Text

`element.innerText`:

  : Gets/sets Human-visible text content

```javascript
const title = document.getElementById('title')
console.log(title.innerText) // 'Welcome'
title.innerText = 'Goodbye'
console.log(title.innerText) // 'Goodbye'
```

(`.textContent` also works; it's more performant but less smart)

### Form Values

`inputElement.value`:

  : Gets/sets form input value

```javascript
const input = document.createElement('input')
input.value = 'I love tea'
console.log(input.value) // 'I love tea'
document.body.appendChild(input)
```

### Form Values

`inputElement.checked`:

  : Gets/sets form input checkbox/radio

```javascript
const checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.checked = true
console.log(checkbox.checked) // true
document.body.appendChild(checkbox)
```

### Attributes

Elements can have attributes that specify behavior or store information.

```html
<img src="photo.jpg"> 
```

Element methods:

* `.getAttribute(name)`
* `.setAttribute(name, value)`
* `.hasAttribute(name)`
* `.removeAttribute(name)`

### Classes

Element methods:

* `.classList.add(name)`
* `.classList.remove(name)`
* `.classList.toggle(name)`
* `.classList.contains(name)`

```javascript
const title = document.getElementById('title')
title.classList.contains('hidden') // false
title.classList.toggle('hidden')
title.classList.contains('hidden') // true
title.classList.toggle('hidden')
title.classList.contains('hidden') // false
```
