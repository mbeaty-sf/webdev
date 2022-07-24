### What is the DOM?

- The browser's API for the HTML document
- Allows you to read and manipulate a website
- Browser parses HTML and builds a tree data structure

### Structure

- The `document` object provides access to the document
- Two primary node types:
  - Element
  - Text

### HTML Tree

```html
<html>
<body>
  <h1 id="title">Welcome</h1>
  <p>Cool <span class="loud">Site!</span></p>
</body>
</html>
```

### Parsed HTML Tree

![](../../../diagrams/html/tree.dot)

### Element Nodes

When you write HTML like this:

```html
<p id="name" class="banner">
  My name is <span>Andrew</span>
</p>
```

* Maps to:

```javascript
const element = {
  tagName:    "P",
  childNodes: NodeList,
  className:  "banner",
  innerHTML:  "My name is <span>Andrew</span>",
  id:         "name",
  // ...
}
```

### Element Nodes

You can select an element and inspect it with `$0` in the browser.

Demo here ([link](http://localhost:3000/js/dom/manipulate.html))
