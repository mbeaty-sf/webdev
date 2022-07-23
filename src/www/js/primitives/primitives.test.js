import { exercise1, exercise2, exercise3, exercise4 } from "./primitives";

describe("Primitives Exercise", () => {
  describe("Exercise 1", () => {
    it("Should return the number 3", () => {
      expect(exercise1()).toEqual(3);
    });
  });

  describe("Exercise 2", () => {
    it("Should return a string of at least 5 characters", () => {
      const result = exercise2();
      expect(result).toBeDefined();
      expect(typeof result).toEqual("string");
      expect(result.length).toBeGreaterThan(4);
    });
  });

  describe('Exercise 3', () => {
    it("returns a reasonable value when the user is not defined", () => {
      const result = exercise3();
      expect(result).toBeDefined();
      expect(result).toEqual(null)
    });
  })

  describe('Exercise 4', () => {
    it("returns two amounts of money summed in cents", () => {
      const result = exercise4()
      expect(result).toBe(30)
    });
  })
});
