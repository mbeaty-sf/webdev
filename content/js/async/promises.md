## Promises

### Network requests

- Making network requests takes time
- We don't want JS to block while waiting for a response
- So we say "run this function when you have a response"
- We call these **callbacks**

### Callbacks

As an example, with jQuery, you'd provide a URL, and two callbacks

```javascript
$.ajax(url, successCb, failureCb)

// looks like...
$.ajax('/api/users', (data) => {
  console.log('Success', data)
}, (err) => {
  console.error('Failure', err)
})
```

### Callbacks without Promises

But if you had a chain of calls, it got ugly:

```javascript
$.ajax('/a', (dataA) => {
  $.ajax('/b', (dataB) => {
    $.ajax('/c', (dataC) => {
      console.log('Got C: ', dataC)
    }, () => {
      console.error('Call C failed')
    })
  }, () => {
    console.error('Call B failed')
  })
}, () => {
  console.error('Call A failed')
})
```

### Callbacks without Promises

Or something like this:

```javascript
getImage('./image.png', (image, err) => {
  if (err) throw new Error(err)
  compressImage(image, (compressedImage, err) => {
    if (err) throw new Error(err)
    applyFilter(compressedImage, (filteredImage, err) => {
      if (err) throw new Error(err)
      saveImage(filteredImage, (res, err) => {
        if (err) throw new Error(err)
        console.log('Saved image')
      })
    })
  })
})
```

### Callbacks Using Promises

```javascript
getImage('./image.png')
  .then(image => compressImage(image))
  .then(compressedImage => applyFilter(compressedImage))
  .then(filteredImage => saveImage(filteredImage))
  .then(res => console.log('Saved image'))
  .catch(err => throw new Error(err))
```

### Promises

- `.then` means "run when successful (**resolved**)"
- `.catch` means "run when failed (**rejected**)"

- Creating promises is a little tricky, but here's a simple start:

```javascript
Promise.resolve(42)
  .then((num) => {
    console.log(num) // > 42
  })
```

### Network requests

Typically, the server will give a response object that you need to parse.

```javascript
// fake server call
const getUsersServerCall = () => Promise.resolve({
  data: { users: [/* ... */] }
})

const loadUsers = () => {
  getUsersServerCall()
    .then((response) => response.data.users)
    .then((users) => {
      // do something with the users, e.g. update the DOM
    })
}
```

When would you want to `return getUsersServerCall()` from `loadUsers`?

### It's promises all the way down

```javascript
// returns a promise
const getUsersServerCall = () => { /* ... */ }

const loadUsers = () => {
  return getUsersServerCall()
    .then(/* ... */)
}

const initPage = () => {
  return loadUsers()
    .then(/* ... */)
}
```

### It gets better, I promise

The key to remember: once a promise, always a promise.

The value can only be "reached" inside a `.then`

```javascript
getFooPromise() // let's say that's a promise
getFooPromise().then(/* ... */) // promise

// so this returns a promise
const otherFn = () => getFooPromise().then(/* ... */)

otherFn().then(/* ... */) // still a promise
```

### Chaining promises

The return value of each function pipes to the next

```javascript
Promise.resolve(1)
  .then((num) => {
    console.log(num) // 1
    return 2
  })
  .then((num) => {
    console.log(num) // 2
    return 3
  })
  .then((num) => {
    console.log(num) // 3
  })
```

### Catching errors

Much like `try/catch`, a **rejected** promise skips immediately to the next `catch`

```javascript
Promise.reject(1)
  .then((num) => { // skipped
    console.log(num)
    return 2
  })
  .then((num) => { // skipped
    console.log(num)
    return 3
  })
  .catch((err) => {
    console.error(err) // goes here
  })
```

### Catching errors

If you `throw` inside a `.then`, it goes to a `.catch`

```javascript
Promise.resolve(1)
  .then((num) => {
    throw new Error('Boom')
  })
  .catch((err) => {
    console.error(err) // Boom
  })
```

### Catching errors

Anything other than `throw`ing inside a `.catch` will proceed to `.then`

```javascript
Promise.reject(1)
  .catch((err) => {
    console.error(err) // 1
  })
  .then(() => {
    // goes here
  })
```

### Exercise


#. Visit <http://localhost:3000/js/async/promises.html>

#. Open `src/www/js/async/promises.js`

#. Follow the instructions there.
