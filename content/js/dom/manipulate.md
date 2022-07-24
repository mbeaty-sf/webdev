## Manipulating

### Creating New Nodes

`document.createElement('a')`

  : Returns a new node without inserting it into the DOM.

`document.createTextNode('hello')`

  : Returns a new text node.

Once you have an element, you can append it anywhere.
  
`parent.appendChild(newChild)`

  : Appends `newChild`.

### Creating New Nodes

Adding some text...

```javascript
const message = document.createElement('p')
message.appendChild(document.createTextNode('Hello'))
document.body.appendChild(message)
```

Adding an image...

```javascript
const image = document.createElement('img')
image.src = 'https://www.placecage.com/200/300'
document.getElementById('root').appendChild(image)
```

### Creating New Nodes

Adding children to children for a list...

```javascript
const list = document.createElement('ul')

const todo1 = document.createElement('li')
todo1.appendChild(document.createTextNode('Learn DOM'))

list.appendChild(todo1)

document.getElementById('root').appendChild(list)
```

### Appending Multiple Times

`appendChild` on existing node *moves* it.

```javascript
const moveToEnd = () => {
  const list = document.getElementsByTagName('ul')[0]
  const todo = list.children[0]
  list.appendChild(todo)
}
```

### Other Manipulations

Methods on a parent element:

`.insertBefore(newChild, existingChild)`

  : Inserts `newChild` before existing `existingChild`.

`.replaceChild(newChild, existingChild)`

  : Replaces `existingChild` with `newChild`.

`.removeChild(existingChild)`

  : Removes `existingChild`.
