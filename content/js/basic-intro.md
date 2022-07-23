## Introduction to JavaScript

### Approaching JavaScript

  - JavaScript might be an object-oriented language with "Java" in the
    title, but it's not Java.

  - I find that it's best to approach JavaScript as a functional (yet
    imperative) language with some object-oriented features.

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
  - Dynamically typed
  - Interpreted and single threaded
  - No real relationship to Java

### Not a General Purpose Language

  - JavaScript is **not** a general-purpose language

  - There are no functions for reading from or writing to files

  - I/O is heavily restricted

### But, It's Not Just for the Browser

  - Outside of the browser there are libraries that help make JavaScript
    act like a general purpose language.

  - Tools such as Node.js add missing features to JS

  - Weigh the pros and cons of using JS outside the browser

### Why JavaScript?

  - It's the language of the web
  - Runs in the browser, options to run on server
  - Easy to learn partially
  - Harder to learn completely

### JavaScript Syntax Basics

  - Part of the "C" family of languages
  - Whitespace is insignificant (including indentation)
  - Blocks of code are wrapped with curly braces: `{ ... }`

### A Note About Semicolons

  - Semicolons are used to terminate expressions.
  - They are optional in JavaScript.
  - Tools will help guide your use of semicolons.

### The Browser's JavaScript Console

  - Open your browser's debugging console:
    - Command-Option-J on a Mac
    - F12 on Windows and Linux

  - Enter the following JavaScript:

    ~~~ {.javascript}
    console.log("Hello World");
    ~~~

### Simple Console Debugging

  - The browser's "console" is a line interpreter (REPL)

  - All major browsers are converging to the same API for console
    debugging

  - Can use it to set breakpoints

  - Lets you see scoped variables and context

  - Can set a conditional breakpoint
