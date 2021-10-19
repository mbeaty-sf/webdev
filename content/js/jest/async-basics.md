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
