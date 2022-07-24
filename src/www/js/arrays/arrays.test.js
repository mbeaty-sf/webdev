import { exercise1, exercise2 } from './arrays'

describe('Arrays basics', () => {
  describe('Exercise 1', () => {
    it("checks for all odd numbers", () => {
      expect(exercise1([1, 3, 5])).toEqual(true)
      expect(exercise1([1, 2, 5])).toEqual(false)
    });
  })

  describe('Exercise 2', () => {
    it("combines a list of words into a sentence", () => {
      expect(exercise2(["a"])).toEqual("a")
      expect(exercise2(["a", "b"])).toEqual("a and b")
      expect(exercise2(["a", "b", "c"])).toEqual("a, b, and c")
    });
  })
})