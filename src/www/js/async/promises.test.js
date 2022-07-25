export const fakeServerCall = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('ok')
    }, 50)
  })
}

export const fakeFailedServerCall = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej('kaboom')
    }, 50)
  })
}

