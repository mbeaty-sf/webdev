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

### Referring to mocked exports

Do this:

```javascript
import { foo } from '../dependency'
jest.mock('../dependency')
```

Not this:

```javascript
import { foo } from '../__mocks__/dependency'
jest.mock('../dependency')
```

### Why is this module being required?

Use `throw new Error(...)` to trace the imports for
a file that blows up during test initialization.

(See example with Firebase)

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
