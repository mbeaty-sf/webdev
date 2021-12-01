## Redux Testing

### When/how to test Redux

- Write unit tests for complex reducers or selectors
- Write integration tests for everything else, driven from React

### Action Creators

Don't test them, they don't add confidence and are testing the behavior of the library:

```js
const wordsSlice = createSlice({
  name: "words",
  initialState: [] as string[],
  reducers: { /* ... */ },
});

const { reducer, actions: { addWord } } = wordsSlice;

// DO NOT do this
it("is best to not test action creators", () => {
  expect(addWord("Foo")).toEqual({ payload: "Foo", type: "words/addWord" });
});
```

### Reducers

Redux reducers are the simplest to test; they're pure functions. Given:

```js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
  name: "words",
  initialState: [] as string[],
  reducers: {
    addWord: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      return state.concat(payload);
    },
  },
});
```

### Reducers

You can test the reducer by dispatching an action to it:

```js
import reducer, { addWord } from '../reducer'

it("works with basic reducer", () => {
  const state = reducer([], addWord("Hello"));
  expect(state).toEqual(["Hello"]);
});
```

### Reducers

Build initial state with other actions. Given:

```js
popWord: (state, _action: PayloadAction<undefined>) => {
  return dropLast(1, state);
},
```

### Reducers

It might be tempted to hard-code the state:

```js
it("pops a word -- BAD", () => {
  const state = reducer(["Foo", "Bar"], popWord());
  expect(state).toEqual(["Foo"]);
});
```

What's a downside to this approach?

### Reducers

You can run your state through a sequence of actions:

```js
it("pops a word -- GOOD", () => {
  const state = pipe(
    (x) => reducer(x, addWord("Foo")),
    (x) => reducer(x, addWord("Bar")),
    (x) => reducer(x, popWord()),
  )(undefined);
  expect(state).toEqual(["Foo"]);
});
```

### Reducers

With a helper function, it becomes even cleaner:

```js
export const runActions = (reducer, actions) => {
  const initialState = undefined;
  const states = actions.reduce((states, action, i) => {
    return [...states, reducer(i === 0 ? initialState : last(states), action)];
  }, []);
  return states[states.length - 1];
};

it("pops a word -- BEST", () => {
  const state = runActions(reducer, [addWord("Foo"), addWord("Bar"), popWord()]);
  expect(state).toEqual(["Foo"]);
});
```

### Reducers

You can compose sequences of run actions to build fixtures for initial
state, which can be reused:

```js
const { state: stateWith3Words } = runActions(reducer, [
  addWord("Foo"),
  addWord("Bar"),
  addWord("Baz"),
]);

it("does something", () => {
  const state = reducer(stateWith3Words, someAction());
  // ...
});
```

### Selectors

Avoid testing basic property accessor selectors:

```js
const selectWords = (state) => state.words;
const allWordsSelector = createSelector(selectWords, (state) => state);

it("tests super basic selectors -- BAD", () => {
  expect(allWordsSelector({ words: stateWith3Words })).toEqual(["Foo", "Bar", "Baz"]);
});
```

### Selectors

Focus testing around selector logic that does processing:

```js
const lastWordLoudSelector = createSelector(selectWords, compose(toUpper, last));

it("tests complicated selectors -- GOOD", () => {
  expect(lastWordLoudSelector({ words: stateWith3Words })).toEqual("BAZ");
});
```

### Selectors

Better yet, pull out the actual transformation and test it directly:

```js
const lastWordLoud = compose(toUpper, last);
const lastWordLoudSelector = createSelector(selectWords, lastWordLoud);

it("tests complicated selectors -- GOOD", () => {
  expect(lastWordLoud(stateWith3Words)).toEqual("BAZ");
});
```

### Sagas

Given a simple reducer and saga like this:

```js
const petSlice = createSlice({
  name: "pet",
  initialState: { name: "Tucker", age: 11 },
  reducers: {
    haveBirthday: (state, _action: PayloadAction<undefined>) => {
      return { ...state, age: state.age + 1 };
    },
  },
});

function* saga() {
  yield put(haveBirthday());
}
```

### Sagas

- Only write integration tests (use real reducers and state)
- ...unless it's prohibitively difficult
- Write with `redux-saga-test-plan`

```js
it("handles reducers and store state", async () => {
  const { storeState } = await expectSaga(saga).withReducer(reducer).run();
  expect(storeState).toEqual({ name: "Tucker", age: 12 });
});
```

### Sagas

- Focus the test on the part of state you care about
- Use selectors where possible to be more DRY

```js
const getAge = prop("age");
const getAgeSelector = createSelector(/* ... */, getAge)

it("handles reducers and store state", async () => {
  const { storeState } = await expectSaga(saga).withReducer(reducer).run();
  // okay
  expect(storeState).toEqual({ name: "Tucker", age: 12 });
  // better
  expect(getAge(storeState)).toEqual(12);
});
```

### Sagas

Say we have a slightly more complicated saga:

```js
const loadPet = createAction<string>("pet/loadPet");

const getPet = async (name) => {
  const { data } = await axios.get(`/pets/${name}`);
  return data;
};

function* watchLoadPet() {
  const action = yield take(loadPet);
  const res = yield call(() => getPet(action.payload));
  yield put(setPet(res));
}
```

### Sagas

This can be tested by dispatching specific actions:

```js
it("works with async stuff", async () => {
  when(axios.get)
    .calledWith("/pets/Fido")
    .mockResolvedValueOnce({ data: { name: "Fido", age: 3 } });
  const { storeState } = await expectSaga(watchLoadPet)
    .withReducer(reducer)
    .dispatch(loadPet("Fido"))
    .run();
  expect(storeState).toEqual({ name: "Fido", age: 3 });
});
```

### Sagas

Dealing with loops like `takeEvery` is not hard:

```js
function* watchLoadPet() {
  const action = yield takeEvery(loadPet)
  // ...
}
```

The test is the same, but now you get a timeout warning:

```js
  console.warn
    [WARNING]: Saga exceeded async timeout of 250ms
```

### Sagas

Silence it from the test:

```js
const { storeState } = await expectSaga(watchEveryLoadPet)
  .withReducer(reducer)
  .dispatch(loadPet("Fido"))
  .silentRun();
```
