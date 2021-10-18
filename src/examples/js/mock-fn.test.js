const { compose, map, prop } = require('ramda')

// <<: dynamic-imp
const getUserNames = (ids, lookupUser) => (
  map(compose(prop('name'), lookupUser), ids)
  // aka: ids.map(lookupUser).map(user => user.name)
)
// :>>

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

it('has common matchers', () => {
  const obj = { a: 1, b: 2 }
  expect(obj).toEqual({ a: 1, b: 2 })
  expect(obj).toMatchObject({ a: 1 })
  const str = 'My very long message'
  expect(str).toMatch('long message')
})

it('tracks calls', () => {
  const mock = jest.fn()
  mock('hello', 'goodbye')
  mock([1, 2, 3, 4])
  expect(mock).toHaveBeenCalledWith('hello', 'goodbye')
  expect(mock).toHaveBeenCalledWith([1, 2, 3, 4])
  expect(mock).toHaveBeenCalledTimes(2)
})

it('programs promise returns', async () => {
  const mock = jest.fn()
    .mockResolvedValueOnce(1)
    .mockResolvedValueOnce(2)
    .mockResolvedValue('default')
  expect(await mock()).toEqual(1)
  expect(await mock()).toEqual(2)
  expect(await mock()).toEqual('default')
})

it('should foo', () => {
  const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
      callback(items[i])
    }
  }

  const mockCb = jest.fn()
  mockCb.mock
  forEach([0, 1], mockCb)

  expect(mockCb.mock.calls.length).toEqual(2)
  expect(mockCb.mock.calls).toEqual([[0], [1]])
  expect(mockCb).toHaveBeenCalledWith()
})

describe('mock functions', () => {
  // <<: dynamic-test
  it('should handle dynamic behavior', () => {
    const mockUsers = {
      1: { id: 1, name: 'Andrew' },
      2: { id: 2, name: 'Billy' },
      3: { id: 3, name: 'Charlie' },
    }
    const mockLookup = jest.fn((id) => mockUsers[id])

    expect(getUserNames([1, 3], mockLookup))
      .toEqual(['Andrew', 'Charlie'])
  })
  // :>>

  // <<: mock-return
  it('should mock return values', () => {
    const mock = jest.fn()
      .mockReturnValueOnce(42)
      .mockReturnValueOnce('hello')
      .mockReturnValue('default')

    expect(mock()).toEqual(42)
    expect(mock()).toEqual('hello')
    expect(mock()).toEqual('default')
  })
  // :>>
})

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

describe('with mocks', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  const mock = jest.fn()
  it('will persist state', () => {
    mock.mockReturnValue(true)
    expect(mock()).toEqual(true)
  })
  it('see here', () => {
    expect(mock()).toEqual(undefined)
  })
})
describe('with spies', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  const obj = { isTrue: () => true }
  it('will not persist spies', () => {
    jest.spyOn(obj, 'isTrue')
      .mockReturnValue(false)
    expect(obj.isTrue()).toEqual(false)
  })
  it('see here', () => {
    expect(obj.isTrue()).toEqual(true)
  })
})
