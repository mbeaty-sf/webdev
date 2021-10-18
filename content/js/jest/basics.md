## Jest: Basics

### What is Jest? ###

  * JS testing framework

  * Focus on simplicity and easy configuration

  * Easy mocking of modules

  * Good for unit and integration tests

### Example: Writing Jest Tests ###

```
const add = (x, y) => x + y

describe('#add', () => {
  it('adds two numbers together', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
```

### Running Jest Tests

  - `yarn add jest`
  - Make a `__tests__/*.test.ts` file
  - Run `yarn jest`, you're done!
  - Continuously watch: `yarn jest --watch`

### Most Common Matchers

`toEqual(val)`:
  : Most common equality matcher. Compares objects or arrays by comparing contents, not identity.

`toMatch(/hello/)`:
  : Tests against regular expressions or strings.

`toMatchObject(val)`:
  : Match a subset of the object

```javascript
it('has common matchers', () => {
  const obj = { a: 1, b: 2 }
  expect(obj).toEqual({ a: 1, b: 2 })
  expect(obj).toMatchObject({ a: 1 })
  const str = 'My very long message'
  expect(str).toMatch('long message')
})
```

### Expecting an Error

`toThrow(message)`:
  : Tests the function will throw an error.

```
describe('#findById', () => {
  it('should throw if not a number', () => {
    expect(() => findById('invalid'))
      .toThrow('Must provide a number')
  })
})
```

### Expecting the Opposite

You can chain `not` to test the opposite

```
it('tests the opposite', () => {
  expect(0).not.toEqual(1)
})
```

### Other Matchers Sometimes Used

`toContainEqual(x)`:
  : Expect an array to contain `x` using `toEqual`.

`toBe(x)`:
  : Compares with `x` using `===`.

`arrayContaining(array)`:
  : Checks it's a subset (order doesn't matter).

### The whole list

https://jestjs.io/docs/expect

TODO add exercise
