import { exercise1, exercise2 } from "./functions-basic";

describe('Functions basic', () => {
  describe('Exercise 1', () => {
    it("increments the age property", () => {
      const obj = { name: 'A', age: 1 }
      exercise1(obj)
      expect(obj.age).toEqual(2)
    });
  })

  describe('Exercise 2', () => {
    it("indents the lines in a string", () => {
      const str = `Foo\nBar\nBaz`
      expect(exercise2(str, 4)).toEqual('    Foo\n    Bar\n    Baz')
    });

    it("indents 2 spaces by default", () => {
      const str = `Foo\nBar\nBaz`
      expect(exercise2(str)).toEqual('  Foo\n  Bar\n  Baz')
    });
  })
})