import { somethingComplicated } from './mock-fn-dep'

export const weirdMath = (a, b) => (
  somethingComplicated() ? a + b : a - b
)
