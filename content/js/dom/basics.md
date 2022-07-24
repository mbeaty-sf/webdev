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

### Running JS

JavaScript can be run in a web page a few different ways:

1. In HTML, inside certain attributes, e.g. `button onclick`:

    ```html
    <button onclick="console.log('Clicked!')"/>
    ```

2. An inline `script` tag

    ```html
    <script>
      console.log("This is JS directly in HTML files")
    </script>
    ```

3. A `script` tag that loads a JS file

    ```html
    <script src="path-to-file.js" />
    ```

### Running JS

- The browser will block further execution until a JS file has been downloaded and parsed
- Sometimes that can take a long time
- So we put the JS files at the end, allowing the HTML to load and be parsed first
- A lot of work goes into making JS files smaller ("JS optimization")

### Running JS from script file

When loading JS from a `script` file, all variables are exposed to the webpage.

```html
<script src="path-to-file.js" />
```

```js
const foo = 42

// you can access foo from the console
```

This is obviously very bad, and tools like webpack or `script type="module"` help prevent this from happening.
