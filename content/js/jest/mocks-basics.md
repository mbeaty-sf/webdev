## Mocks

* Mocks are functions with pre-programmed behavior
* Can be used to replace methods or module dependencies
* Why mock
  * Avoid expensive / slow calls (server calls, complex computations, etc.)
  * Avoid complex test setup (e.g. dependency requires a bunch of state)
  * You follow the "London-TDD" style (we won't at Gather)

### Mocks API

Creating a mock:

```javascript
const mock = jest.fn()
```

With behavior:

```javascript
const mock = jest.fn(() => 'yay')

mock() // 'yay'
```

### Different return values

`mockReturnValue`:
  : A value to return by default

`mockReturnValueOnce`:
  : A value to be returned only once on a call

These stack together

```javascript
it('programs return values', () => {
  const mock = jest.fn()
  mock
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValue('default')
  expect(mock()).toEqual(1)
  expect(mock()).toEqual(2)
  expect(mock()).toEqual('default')
  expect(mock()).toEqual('default')
})
```

### Different return values

You can do this with async values as well (more later):

`mockResolvedValueOnce`:
  : Resolve the value one time

`mockResolvedValue`:

  : Default resolved value

`mockRejectedValueOnce`:
  : Reject the value one time

`mockRejectedValue`:
  : Default rejected value

```javascript
it('programs promise returns', async () => {
  const mock = jest.fn()
    .mockResolvedValue('default')
  expect(await mock()).toEqual('default')
})
```

### Tracking calls

Mocks can be useful for tracking calls. This is useful for contract testing.

`.toHaveBeenCalled`:
  : The function was called at all

`.toHaveBeenCalledWith(...args)`:
  : It was called at least once with args

`.toHaveBeenCalledTimes(num)`
  : The number of times it was called

```javascript
it('tracks calls', () => {
  const mock = jest.fn()
  mock('hello', 'goodbye')
  mock([1, 2, 3, 4])
  expect(mock).toHaveBeenCalledWith('hello', 'goodbye')
  expect(mock).toHaveBeenCalledWith([1, 2, 3, 4])
  expect(mock).toHaveBeenCalledTimes(2)
})
```

### Tracking calls

**NB:** do not go wild here. Mocks are a hammer, use it wisely. Only assert calls about things we care about.

```javascript
it('should email the user on creation', () => {
  const mailer = jest.fn().mockReturnValue({
    sendWelcomeEmail: jest.fn()
  })
  createUser('user1', mailer)
  expect(mailer.sendWelcomeEmail).toHaveBeenCalled()
})
```

### Captures all arguments

Each invocation stores a tuple of the arguments in `.mock.calls`

```javascript
it('should capture all arguments', () => {
  const myMock = jest.fn()
  myMock('hello', 'world')
  myMock(1, 2, 3)
  expect(myMock.mock.calls).toEqual([
    ['hello', 'world'],
    [1, 2, 3],
  ])
})
```

### Provide Fake Behavior

You can specify static behavior of a mock function.

```javascript
const mock = jest.fn(() => 2 + 2)
mock() // 4
```

It can receive arguments as well!

```javascript
const mock = jest.fn(word => word.toUpperCase())
mock('hello') // 'HELLO'
```

Having mocks act based on params isn't super common, but it can be a useful tool to reach for. *Usually* you don't need
it.

### Resetting history

Mocks do not automatically reset their call history

```javascript
describe('with a mock', () => {
  const mock = jest.fn()
  it('calls once', () => {
    mock()
    expect(mock).toHaveBeenCalledTimes(1)
  })
  it('carries over state', () => {
    expect(mock).toHaveBeenCalledTimes(0) // FAILS
  })
})
```

### Resetting history

The easiest thing to do is create a new mock each time.

```javascript
it('test 1', () => {
  const mock = jest.fn()
  // ...
})
it('test 2', () => {
  const mock = jest.fn()
  // ...
})
```

### Resetting history

You can refer to a mock and call `mockClear`:

```javascript
describe('with a mock', () => {
  const mock = jest.fn()

  beforeEach(() => { mock.mockClear() })

  // tests...
})
```

...but it's cumbersome

### Resetting history

What we do is in the `jest.config.ts`:

```javascript
module.exports = {
  // ...
  "clearMocks": true,
}
```

This runs `mockClear` on all mocks in the system between each.
Aka `jest.clearAllMocks()`

### Overriding behavior

There's a similar conundrum with _behavior_.

```javascript
describe('with a mock', () => {
  const mock = jest.fn().mockReturnValue('foo')

  it('calls once', () => {
    mock.mockReturnValue('bar')
    expect(mock()).toEqual('bar')
  })
  it('carries over state', () => {
    expect(mock()).toEqual('foo') // FAILS
  })
})
```

### Overriding behavior

When you have a "default mock" and want to provide special behavior, use `mockXValueOnce` instead:

```javascript
describe('with a mock', () => {
  const mock = jest.fn().mockReturnValue('foo')

  it('calls once', () => {
    mock.mockReturnValueOnce('bar')
    expect(mock()).toEqual('bar')
  })
  it('carries over state', () => {
    expect(mock()).toEqual('foo') // PASSES
  })
})
```

### Resetting behavior

Setting behavior carries over, but you can reset _behavior_
with `jest.resetAllMocks`

```javascript
describe('with mocks', () => {
  beforeEach(() => { jest.resetAllMocks() })

  const mock = jest.fn()
  it('will persist state', () => {
    mock.mockReturnValue(true)
    expect(mock()).toEqual(true)
  })
  it('see here', () => {
    expect(mock()).toEqual(undefined)
  })
})
```

### Resetting behavior

We do **NOT** set this as a config option, because we often want mocks to retain their behavior across test cases.

(More later on mocking modules.)

### What Are Spies

* Spies are like mocks, but pass through to original
* You're "spying on" their calls
* You can give a spy behavior (at which point it's a mock)

### Spies API

Creating a spy:

```javascript
const spy = jest.spyOn(myObject, 'method')
```

Removing a spy:

```javascript
spy.restore()
```

### Spying on a Function or Callback (Call Tracking)

```javascript
const video = {
  play() { return true },
}

it('should play a video', () => {
  const spy = jest.spyOn(video, 'play')
  const isPlaying = video.play()

  expect(spy).toHaveBeenCalled()
  expect(isPlaying).toBe(true)

  spy.mockRestore()
})
```

### Spying on a Function or Callback (Call Fake)

```javascript
it('should allow a fake implementation', () => {
  const video = { /* ... */ }
  const spy = jest.spyOn(video, 'play')
    .mockImplementation(() => false)
  const isPlaying = video.play()

  expect(spy).toHaveBeenCalled()
  expect(isPlaying).toBe(false)

  spy.mockRestore()
})
```

### Spying on global things

Spies are great when you don't want to replace the whole object and leave the original implementation around.

Classic example: mocking time

```javascript
it('mocks time', () => {
  const currentTime = () => new Date(Date.now())

  const mockTime = new Date('2021-10-18T14:45:00')
  jest.spyOn(Date, 'now')
    .mockReturnValueOnce(mockTime.getTime())

  expect(currentTime().toString()).toMatch(
    'Mon Oct 18 2021 14:45:00 GMT-0700'
  )
  Date.now.mockRestore()
})
```

### Spies retain behavior by default

Normally spies stick around between tests, just like mocks. But we've configured Jest to always restore spies.

```javascript
// config
module.exports = { restoreMocks: true }

// test
const obj = { isTrue: () => true }
it('will not persist spies', () => {
  jest.spyOn(obj, 'isTrue')
    .mockReturnValue(false)
  expect(obj.isTrue()).toEqual(false)
})
it('see here', () => {
  expect(obj.isTrue()).toEqual(true)
})
```

### Exercise: Using Jest Spies

- Open `src/www/js/jest/__tests__/adder.spec.js`
- Complete the exercises.
- To test and debug, run

```
cd src
yarn jest adder.spec.js --watch
```

### Fancier Mocks

Use `jest-when` to tell mocks to have certain behavior based on the
parameters when invoked:


