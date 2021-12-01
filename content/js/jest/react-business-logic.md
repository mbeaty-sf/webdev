## React Business Logic

### React Context

These are basic boxes to hold data. No need to test them directly.

```js
const CounterStepContext = createContext(1);

const FakeComponent = () => {
  const value = useContext(CounterStepContext);
  return <span>Received: {value}</span>;
};

it("does not add value to test context", () => {
  render(<FakeComponent />);
  expect(screen.getByText(/^Received:/).textContent).toEqual("Received: 1");
});
```

### Testing React Hooks

- Hooks need to be inside a React component, can't test directly

```js
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
};

it("starts with a default value", () => {
  const { count } = useCounter();
  expect(count).toEqual(0) // :-( fails
});

// Error: Invalid hook call. Hooks can only be called 
// inside of the body of a function component.
```

### Testing React Hooks

- Use `@testing-library/react-hooks`
- Refer to the current value with `result.current`

```javascript
import { renderHook } from "@testing-library/react-hooks";

it('starts with a default value', () => {
  const { result } = renderHook(() => useCounter())
  expect(result.current.count).toBe(0)
})
```

- Why would we need to refer to it as `result.current`?

### Testing React Hooks

- Interactions will give you a warning, though...

```js

it("increments the counter", () => {
  const { result } = renderHook(() => useCounter());
  result.current.increment();
  expect(result.current.count).toEqual(1);
});

// Warning: An update to TestComponent inside a test was 
// not wrapped in act(...).
```

### Testing React Hooks

- Wrap all interactions in `act`:

```js
import { act, renderHook } from "@testing-library/react-hooks";

it("increments the counter", () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toEqual(1);
});
```

### React Hooks Props

You can pass in basic data easily:

```js
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  return { count, increment };
};

it("can set a starting value", () => {
  const { result } = renderHook(() => useCounter(10));
  expect(result.current.count).toEqual(10);
});
```

### React Hooks Props

But how do you change the props after the initial render?

```js
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(initialValue)
  return { count, increment, reset };
};

it("can reset the value", () => {
  const { result } = renderHook(() => useCounter(0));
  // how to change the `initialValue` to something else
  // before calling reset?
  act(() => result.current.reset())
  expect(result.current.count).toEqual(10)
});
```

### React Hooks Props

Use the `rerender` returned from `renderHook` and pass in a variable
you mutate:

```js
it("can reset the value", () => {
  let value = 0;
  const { result, rerender } = renderHook(() => useCounter(value));
  value = 10;
  rerender();
  act(() => result.current.reset());
  expect(result.current.count).toEqual(10);
});
```

### React Hooks Props

That's a mouthful though, here's a way to not bind a bunch of variables:

```js
it("can reset the value", () => {
  const options = { initialProps: { initialValue: 0 } };
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue), 
    options,
  );
  rerender({ initialValue: 10 });
  act(() => result.current.reset());
  expect(result.current.count).toEqual(10);
});
```

### React Context with Hooks

What if we're using Context?

```js
const CounterStepContext = createContext(1);

export const CounterStepProvider = ({ step, children }) => (
  <CounterStepContext.Provider value={step}>{children}</CounterStepContext.Provider>
);

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const step = useContext(CounterStepContext);
  const increment = () => setCount(count + step);
  const reset = () => setCount(initialValue);
  return { count, increment, reset };
};
```

### React Context with Hooks

Create a `wrapper` and provide it to `renderHook`:

```js
it("uses the context", () => {
  const wrapper = ({ children }) => (
    <CounterStepProvider step={2}>{children}</CounterStepProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => result.current.increment());

  expect(result.current.count).toBe(2);
});
```

### React Context with Hooks

You can also change context values with the same `rerender` trick:

```js
it("allows context values to change", () => {
  const wrapper = ({ children, step }) => (
    <CounterStepProvider step={step}>{children}</CounterStepProvider>
  );
  const { result, rerender } = renderHook(() => useCounter(), {
    wrapper,
    initialProps: { step: 2 },
  });

  rerender({ step: 8 });
  act(() => result.current.increment());

  expect(result.current.count).toBe(8);
});
```

### React Hooks Async

Often you'll have async operations in hooks:

```js
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(initialValue);
  const incrementAsync = () => setTimeout(increment, 1000);
  return { count, increment, incrementAsync, reset };
};
```

### React Hooks Async

Use the `waitForNextUpdate` helper to flush promises / timeouts:

```js
it("handles async increments", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useCounter());

  result.current.incrementAsync();
  // this actually pauses 1 sec, use fake timers to avoid that
  await waitForNextUpdate(); 

  expect(result.current.count).toBe(1);
});
```

### React Hook Errors

Sometimes you set up your hook to throw errors sometimes:

```js
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(initialValue);
  const incrementAsync = () => setTimeout(increment, 1000);

  if (count > 999) {
    throw Error("Counter overflow");
  }

  return { count, increment, incrementAsync, reset };
};
```

### React Hook Errors

The `result.errors` captures any errors:

```js
it("handles errors when count exceeds 999", () => {
  const { result } = renderHook(() => useCounter(999));

  act(() => result.current.increment());

  expect(result.error).toEqual(Error("Counter overflow"));
});
```
