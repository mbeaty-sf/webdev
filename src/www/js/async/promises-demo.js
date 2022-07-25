
const demo1 = () => {
  Promise.resolve(1)
    .then((num) => {
      console.log(num)
      return 2
    })
    .then((num) => {
      console.log(num)
      return 3
    })
    .then((num) => {
      console.log(num)
    })
}

const skippingToCatch = () => {
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
}
