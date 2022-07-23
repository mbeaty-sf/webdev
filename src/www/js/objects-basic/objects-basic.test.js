import { exercise1, exercise2, exercise3, exercise4 } from "./objects-basic";

describe("Basic Objects", () => {
  describe("Exercise 1", () => {
    it("returns an object", () => {
      const obj = exercise1();
      expect(obj).toBeDefined();
      expect(typeof obj.name).toEqual("string");
      expect(typeof obj.favoriteColor).toEqual("string");
      expect(obj.species).toEqual("Homo sapiens");
    });
  });

  describe("Exercise 2", () => {
    beforeEach(() => {
      jest.spyOn(console, "log").mockImplementation();
    });
    afterEach(() => {
      console.log.mockRestore();
    });

    it("iterates and prints the properties", () => {
      exercise2();
      expect(console.log.mock.calls).toEqual([
        ["Property name has value Fido"],
        ["Property type has value dog"],
        ["Property age has value 4"],
      ]);
    });
  });

  describe("Exercise 3", () => {
    it("returns the right object", () => {
      const result = exercise3();
      expect(typeof result.width).toEqual("number");
      expect(result.area).toBeDefined();
      expect(result.area()).toEqual(result.width * result.width);
    });
  });

  describe("Exercise 4 (CHALLENGE)", () => {
    it("handles the basic cases", () => {
      expect(exercise4({}, {})).toEqual(true);
      expect(exercise4({ a: 1, b: 2 }, { a: 1, b: 2 })).toEqual(true);
      expect(exercise4({ a: 1, b: 2 }, { a: 1 })).toEqual(false);
      expect(exercise4({ a: 1 }, { a: 1, b: 2 })).toEqual(false);
    });

    it("handles arrays as values", () => {
      expect(exercise4({ nums: [1, 2, 3] }, { nums: [1, 2, 3] })).toEqual(true);
      expect(exercise4({ nums: [1, 2, 3] }, { nums: [] })).toEqual(false);
      expect(exercise4({ nums: [] }, { nums: [1, 2, 3] })).toEqual(false);
    });

    it("handles objects as values", () => {
      expect(exercise4({ foo: { bar: 1 } }, { foo: { bar: 1 } })).toEqual(true);
      expect(exercise4({ foo: { bar: 1 } }, { foo: { bar: 2 } })).toEqual(false);
      expect(exercise4({ foo: { bar: 1 } }, { foo: {} })).toEqual(false);
      expect(exercise4({ foo: {} }, { foo: { bar: 1 } })).toEqual(false);
    });
  });
});