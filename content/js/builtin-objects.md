## Builtin Objects

### String Properties and Methods

  - `str.length`
  - `str.charAt(i)`
  - `str.concat()`
  - `str.indexOf(needle)`
  - `str.slice(iStart, [iEnd])`
  - `str.split(delimiter)`
  - `str.substring(iStart, [iEnd])`
  - `str.replace(regex|substr, newSubStr|function)`
  - `str.toLowerCase()`
  - `str.toUpperCase()`
  - `str.trim()`
    
Full reference ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))

### The Number Object

  * Constants:
    - `Number.MAX_VALUE`
    - `Number.NaN`
    - `Number.POSITIVE_INFINITY`
    - etc.

  * Static Methods:
    - `Number.isInteger(n)`
    - `Number.isFinite(n)`
    - `Number.parseFloat(s)`
    - `Number.parseInt(s)`

  * Prototype Methods:
    - `num.toString()`
    - `num.toFixed()`
    - `num.toExponential()`

### The Math Object

  * Generic Functions:
    - `Math.random()` 
    - `Math.floor(n)`
    - `Math.abs(n)`
    - `Math.pow(n, e)`
    - `Math.sqrt(n)`
    - etc.
  * Constants:
    - `Math.E`
    - `Math.LOG2E`
    - `Math.PI`
    - etc.

### The Date Object

  - Represents a moment in time

```javascript
new Date() // current date
new Date("Wed, 28 Jan 2015 13:30:00 MST")
```

  - Standardized date format as a string (ISO-8601):

```javascript
d.toISOString() // '2022-07-23T23:00:23.224Z'
```

### The Date Object

  * Generic Methods:
    - `Date.now()`
    - `Date.UTC()`
    - `Date.parse("March 7, 2014") // unreliable`

  * Prototype Methods:

```javascript
const d = new Date()

d.getFullYear() // Don't use d.getYear, deprecated
d.getMonth() // starts with 0, it's weird
d.getDate() // starts with 1
d.getHours() // 24-hr
d.getMinutes()
d.getTime() // unix timestamp, e.g. 1422477000000

d.setFullYear(year, month, date)
d.setMonth(month, date)
d.setHours(hours, mins, sec, ms)
```

### RegExp object

Matches text using a pattern:

```javascript
/foo/ // literal notation
new RegExp('foo') 
```

### Checking for presence of a match

Search for matching letters inside a string:

```javascript
const str = 'This has the word foo in it'
const str2 = 'This does not have that word'
const regex = /foo/

regex.test(str) // true
regex.test(str2) // false
```

### Replacing text

Commonly used to replace matching text patterns

```javascript
const str = 'My favorite pet is a dog'
const res = str.replace(/dog/, 'cat')
res // 'My favorite bet is a cat'
```

### Special functionality

You can do all sorts of wild things with RegExp. Here's an easy reference ([link](https://rubular.com/)).

```
.    any single character
.*   zero or more of any character
\d   any digit
\D   any non-digit
\w   any word character
\W   any non-word character
\s   any whitespace character
\S   any non-whitespace character
```

### Special functionality

```javascript
const str = 'This is a sentence'
const withoutSpaces = str.replace(/\s/g, '')
withoutSpaces // 'Thisisasentence'

const name = 'Andrew Smith'
const reversedName = name.replace(/(\w+)\s(\w+)/, '$2, $1')
reversedName // "Smith, Andrew"
```

### Parsing input

Regexes are commonly used to parse input:

```javascript
const input = 'My name is Andrew and I love JavaScript'
const regex = /My name is (\w*) and I love (\w*)/

const match = input.match(regex)
const name = match[1] // first "capture group" (in parens)
const topic = match[2] // second "capture group"
```
