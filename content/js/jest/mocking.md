## Mocking

### Mocking Modules (Basic)

Say you're testing a module, and you want to mock its dependency.

```javascript
// add.js
import { somethingComplicated } from './dependency'

export const weirdMath = (a, b) => (
  somethingComplicated() ? a + b : a - b
)

// dependency.js
export const somethingComplicated = () => (
  Math.random() < 0.5 ? true : false
)
```

### Mocking Modules (Basic)

You can mock all the exports of a module from your test file:

```javascript
jest.mock('./path/to/module/to/be/mocked')
```

This turns all exports into `jest.fn()`

### Mocking Modules (Basic)

You can even refer to it directly and it'll still 
be the mocked version!

```javascript
// add.spec.js
import { weirdMath } from '../add'
import { somethingComplicated } from '../dependency'

jest.mock('../dependency')

somethingComplicated() // undefined
```

### Mocking Modules (Basic)

So you can then control the dependency:

```javascript
import { weirdMath } from '../add'
import { somethingComplicated } from '../dependency'

jest.mock('../dependency')

it('should add or subtract', () => {
  somethingComplicated.mockReturnValue(true)
  expect(weirdMath(5, 2)).toEqual(7)

  somethingComplicated.mockReturnValue(false)
  expect(weirdMath(5, 2)).toEqual(3)
})
```

### Mocking Modules (Basic)

`jest.mock` applies to _the whole file_

```javascript
describe('this will not do what you think', () => {
  jest.mock('./do/not/do/this')
  it(/* ... */)
})
```

There are many creative ways around this limitation
but we'll leave it at this for now.

### Mocking Modules (Inline)

`jest.mock` can also take a function that returns an object to will replace the exported modules.

I call this "inline" mocks.

```javascript
jest.mock('../dependency', () => ({
  foo: jest.fn(() => 'I am a fake foo'),
  bar: jest.fn().mockReturnValue(42)
}))
```

### Mocking Modules (Inline)

It **completely replaces** what was going to be exported. If you don't provide them in the object, they will be missing.

```javascript
// dependency.js
export const somethingComplicated = () => true
export const foo = () => 'foo'

// add.spec.js
import { foo } from './dependency'

jest.mock('./dependency', () => ({
  somethingComplicated: jest.fn(),
}))

foo() // foo is not a function
```

### Mocking Modules (Manual Implementation)

Sometimes you have a more complicated mock behavior you want to provide.

1. Create a file by the same name in `__mocks__` sibling folder
1. Provide mock implementation there
1. Mock the dependency as before, it will use the definition in `__mocks__`

### Mocking Modules (Manual Implementation)

```javascript
// __mocks__/dependency.js
export const somethingComplicated = () => 'mock!'

// add.spec.js
import { somethingComplicated } from './dependency'

jest.mock('./dependency')

it('should foo', () => {
  somethingComplicated() // 'mock!'
})
```

### Mocking Within a Module

How about mocking other members within the same module?

```javascript
// add.js
const somethingComplicated = () => {/* ... */}

const add = (a, b) => {
  // how do we mock this now?
  return somethingComplicated() ? a + b : a - b
}
```

### Mocking Within a Module

Short answer: just don't. It's a path of sadness.

If you really need to mock the behavior, pull it into a separate file.

### Partially Mocking

You can bypass a module mock with `jest.requireActual('./path')`.

Handy application: partially mocking a module.

Take the actual module and spread it out as part of a mock

```javascript
jest.mock('./dependency', () => ({
  ...actualDependency,
  mockFn: jest.fn()
}))
```

### Partially Mocking

```javascript
// thing.js
import { somethingComplicated, foo } from './dependency'

export const complicatedDep = () => somethingComplicated()
export const fooDep = () => foo()

// thing.test.js
import { complicatedDep, fooDep } from './foo'

jest.mock('./dependency', () => ({
  ...jest.requireActual('./dependency'),
  foo: jest.fn().mockReturnValue('mock foo')
}))

it('should partially mock', () => {
  expect(complicatedDep()).toEqual('complicated') // real value
  expect(fooDep()).toEqual('mock foo') // mock value
})
```

### Exercise

We have to do this one locally, because Codesandbox doesn't support `jest.mock`.

1. Open `src/www/js/jest_mocks/__tests__/coin.test.js`. Follow the instructions there.
1. You can run the spec from the /src directory with:

`$ yarn jest coin.test.js --watch`
