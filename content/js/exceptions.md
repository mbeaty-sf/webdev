## Exceptions

### Exceptions

- Errors are propagated as exceptions, similar to many languages
- Keywords:
  - `throw`: Trigger an exception
  - `try`: Wraps code that might throw exceptions
  - `catch`: Capture an exception that has been thrown
  - `finally`: Code that runs regardless of success/failure

### Error types

There are many types of error, here's the most common:

- `Error`: generic type
- `ReferenceError`: the referenced variable does not exist
- `TypeError`: typically from null-reference mistakes
- `SyntaxError`: usually caught before runtime

Full list here ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types))

### Error types

`ReferenceError` means you're referring to something that isn't a variable or hasn't been declared yet.

```javascript
const thisWillErrorWhenRun = () => {
  asdf
}

thisWillErrorWhenRun() // ReferenceError

foo // ReferenceError
const foo = 1
```

### Error types

`TypeError` covers many cases, you're most likely to encounter it when trying to access a property on something that is `undefined` or `null`.

```javascript
const getLength = (input) => {
  return input.length
}

getLength(undefined) // TypeError: Cannot read properties 
                     // of undefined (reading 'length')
```

### Error types

`SyntaxError` typically is encountered in development. It means your syntax is invalid.

```javascript
const thisWillErrorImmediately = () => {
  const 1asdf // SyntaxError
}
```

### `throw` keyword

`throw` halts execution, and immediately walks up the call stack with the error thrown

```javascript
const assertLengthGreaterThan4 = (input) => {
  if (input.length <= 4) {
    throw new Error('Length not > 4')
  }
  return true
}
```

### `try/catch`

A `catch` block catches a thrown error and stops its propagation.

```javascript
try {
  assertLengthGreaterThan4('foo')
} catch (error) {
  console.log('The error is handled here')
}
// code resumes regular execution here
```

### `throw` keyword

Technically you can throw _anything_, but you should generally throw an `Error`:

```javascript
throw 'This technically works'
throw new Error('But this is better')
```

This is because `Error` has other properties on it like `message` and `stack` which systems may expect.

### Re-throwing

You can re-throw an error if you want to do some special handling at this step before passing the error along.

```javascript
try {
  assertLengthGreaterThan4('foo')
} catch (error) {
  sendErrorReport('Length insufficient')
  throw error
}
```

### Custom errors

Writing custom errors are easy:

```javascript
class LengthInsufficientError extends Error {}

const assertLengthGreaterThan4 = (input) => {
  if (input.length <= 4) {
    throw new LengthInsufficientError('Length not > 4')
  }
  return true
}
```

### Custom errors

This allows you to distinguish your special error case from other general errors:

```javascript
try {
  assertLengthGreaterThan4('foo')
} catch (error) {
  if (error instanceof LengthInsufficientError) {
    // do one thing
  } else {
    // for all other error types
  }
}
```

### Custom errors

Custom errors can also have custom behavior or data fields.

```javascript
class LengthInsufficientError extends Error {
  constructor(requiredLength, options) {
    super(`Length not > ${requiredLength}`, options)
    this.requiredLength = requiredLength
  }
}

const error = new LengthInsufficientError(4)
error.message // Length not > 4
error.requiredLength // 4
```
