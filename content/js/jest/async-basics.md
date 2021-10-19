## Jest: Async

### Write async functions like regular code

Include `async` for the cb to `it` function:

```javascript
it('retrieves data from server', async () => {
  const data = await getUser('user1')
  expect(data.name).toEqual('Andrew')
})
```

### Mock functions

Use `mockResolvedValueOnce` / `mockRejectedValueOnce`
to stub 3rd party or complicated library interactions.

```javascript
// billing.ts
const payment = await stripe.charge(user, amount)
// logic...

// billing.test.ts
jest.mock('stripe-js')
it('does something on successful payment', async () => {
  stripe.mockResolvedValueOnce({ status: 'success' })
  // assert behavior
})
it('does something else on error', async () => {
  stripe.mockRejectedValueOnce({ status: 'failure' })
  // assert behavior
})
```

### Network calls

So, given what we know, how could we mock server calls
using `axios`?

### Network calls

```javascript
import axios from 'axios'

jest.mock('axios')
it('mocks network calls', async () => {
  const getUserName = async (id) => {
    const { data } = await axios.get(`/users/${id}`)
    return data.name
  }

  axios.get
    .mockResolvedValueOnce({ data: { name: 'Andrew' } })
  const name = await getUserName(1)
  expect(name).toEqual('Andrew')
})
```

### Async + Fake Timers

You can control timers (`setTimeout`, etc.) in Jest.

However, it has weird interactions with `async` / `await` logic.

For now, just avoid testing stuff that involves timers.
