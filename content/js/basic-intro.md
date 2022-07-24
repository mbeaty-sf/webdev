## Introduction to JavaScript

### What is JavaScript

- It's the language of the web
- All browsers use JavaScript to create behavior
- JavaScript is very flexible (almost to a fault)
- Can support OOP or FP
- It's not Java

### A Little About JavaScript

  - Standardized as ECMAScript
    - 5th Edition, 2009 (ES5)
    - 6th Edition, 2015 (ES6)
    - 7th Edition, 2016 (ES7)
    - ...
    - 11th Edition, ES2020
    - 12th Edition, ES2021
    - ES.Next

  - Creator: Brendan Eich
  - Mocha -> LiveScript -> JavaScript
  - Invented in 10 days to power Netscape
  - Dynamically typed, interpreted, and single threaded

### What is JS

- JS is not a runtime binary, it's a language specification
- Each browser implements the JS spec
- Netscape needed a programming language to manipulate web pages
- Was not designed to run on backend servers or the terminal
- e.g. no functions to read/write files

### So how does it run on my terminal

- NodeJS is a backend JS runtime environment
- Basically, it lets you run JS without a browser
- We will be running JS both in the browser and in Node (when running tests)

### Syntax basics

- Looks a bit like C, and bit like Java
- Whitespace and indentation is insignificant
- Blocks of code wrapped with curlies: `{ ... }`

### Semicolons

  - Semicolons can be used to terminate expressions
  - They are optional in JavaScript 99.9% of the time
  - Tools help you catch the 0.1% of times you need them

### Running JavaScript

- You can run JS directly in your browser
- Open the "dev tools console" in Chrome:
  - Command-Option-J on macOS
  - F12 on Windows and Linux

- Enter the following line of code:

```javascript
console.log('Hello world')
```

### Dev Tools Console

- It's a REPL (Read-Eval-Print-Loop)
- Easy way to run or test JS in the context of the page you're on
