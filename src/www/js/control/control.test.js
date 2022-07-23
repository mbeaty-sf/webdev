import { exercise1, exercise2, exercise3, exercise4, exercise5, exercise6 } from "./control";

describe("Flow control exercises", () => {
  describe("Exercise 1", () => {
    it("returns true when given 42", () => {
      expect(exercise1(42)).toBeDefined();
      expect(exercise1(42)).toBe(true);
    });

    it("returns false when given 1", () => {
      expect(exercise1(1)).toBeDefined();
      expect(exercise1(1)).toBe(false);
    });

    it("returns false when given \"42\"", () => {
      expect(exercise1("42")).toBeDefined();
      expect(exercise1("42")).toBe(false);
    });
  });

  describe("Exercise 2", () => {
    it("returns fruit for apple", () => {
      expect(exercise2("apple")).toBeDefined();
      expect(exercise2("apple")).toEqual("fruit");
    });

    it("returns animal for dog", () => {
      expect(exercise2("dog")).toBeDefined();
      expect(exercise2("dog")).toEqual("dog");
    });

    it("returns null for all else", () => {
      expect(exercise2("car")).toBeDefined();
      expect(exercise2("car")).toEqual(null);
    });
  });

  describe("Exercise 3", () => {
    it("returns fruit for apple", () => {
      expect(exercise3("apple")).toBeDefined();
      expect(exercise3("apple")).toEqual("fruit");
    });

    it("returns animal for dog", () => {
      expect(exercise3("dog")).toBeDefined();
      expect(exercise3("dog")).toEqual("dog");
    });

    it("returns null for all else", () => {
      expect(exercise3("car")).toBeDefined();
      expect(exercise3("car")).toEqual(null);
    });
  });

  describe("Exercise 4", () => {
    beforeEach(() => {
      jest.spyOn(console, "log").mockImplementation();
    });
    afterEach(() => {
      console.log.mockRestore();
    });

    it("prints the statement three times", () => {
      exercise4();
      expect(console.log.mock.calls).toEqual([
        ["Hello"],
        ["Hello"],
        ["Hello"],
      ]);
    });
  });

  describe("Exercise 5", () => {
    beforeEach(() => {
      jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.2)
        .mockReturnValueOnce(0.3)
        .mockReturnValueOnce(0.6);
    });
    afterEach(() => {
      Math.random.mockRestore();
    });

    it("keeps calling Math.random until a number > 0.5 is given", () => {
      const res = exercise5();
      expect(res).toEqual(0.6);
      expect(Math.random).toHaveBeenCalledTimes(4);
    });
  });

  describe("Exercise 6", () => {
    beforeEach(() => {
      jest.spyOn(console, "log").mockImplementation();
    });
    afterEach(() => {
      console.log.mockRestore();
    });

    it("prints outs Fizz for the correct values", () => {
      exercise6();
      expect(console.log).toHaveBeenCalledWith("Fizz: 3");
      expect(console.log).toHaveBeenCalledWith("Fizz: 6");
      expect(console.log).toHaveBeenCalledWith("Fizz: 9");
      expect(console.log).toHaveBeenCalledWith("Fizz: 12");
      expect(console.log).toHaveBeenCalledWith("Fizz: 18");
    });

    it("prints out Buzz for the correct values", () => {
      exercise6();
      expect(console.log).toHaveBeenCalledWith("Buzz: 5");
      expect(console.log).toHaveBeenCalledWith("Buzz: 10");
      expect(console.log).toHaveBeenCalledWith("Buzz: 20");
    });

    it("prints out FizzBuzz for the correct values", () => {
      exercise6();
      expect(console.log).toHaveBeenCalledWith("FizzBuzz: 15");
    });

    it("prints out everything in the right order", () => {
      exercise6();
      expect(console.log.mock.calls).toEqual([
        ["Nothing: 1"],
        ["Nothing: 2"],
        ["Fizz: 3"],
        ["Nothing: 4"],
        ["Buzz: 5"],
        ["Fizz: 6"],
        ["Nothing: 7"],
        ["Nothing: 8"],
        ["Fizz: 9"],
        ["Buzz: 10"],
        ["Nothing: 11"],
        ["Fizz: 12"],
        ["Nothing: 13"],
        ["Nothing: 14"],
        ["FizzBuzz: 15"],
        ["Nothing: 16"],
        ["Nothing: 17"],
        ["Fizz: 18"],
        ["Nothing: 19"],
        ["Buzz: 20"],
      ]);
    });
  });
});
