import { exercise1, exercise2, exercise3, exercise4 } from "./builtins";

describe("Built-In Objects", () => {
  describe("Exercise 1", () => {
    it("converts the string", () => {
      expect(exercise1("")).toEqual("");
      expect(exercise1("Foo,Bar,Baz")).toEqual("Foo|Bar|Baz");
    });
  });

  describe("Exercise 2", () => {
    beforeEach(() => {
      jest.spyOn(Math, "random")
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0.51)
        .mockReturnValueOnce(0.49);
    });
    afterEach(() => {
      Math.random.mockRestore();
    });

    it("returns head or tails", () => {
      const result = [exercise2(), exercise2(), exercise2(), exercise2()];
      expect(result[0]).not.toEqual(result[1]);
      result.sort();
      expect(result).toEqual(["Heads", "Heads", "Tails", "Tails"]);
    });
  });

  describe("Exercise 3", () => {
    it("returns a formatted date", () => {
      const [_, year, month, date] = new Date().toISOString().match(/(\d+)-(\d+)-(\d+)/);
      let now = `${year}/${month.replace(/0/, "")}/${date.replace(/0/, "")}`;
      expect(exercise3()).toEqual(now);
    });
  });

  describe('Exercise 4', () => {
    it("censors credit card info from a string", () => {
      const res = exercise4("Buying 12 flowers with 1234-1234-1234-1234")
      expect(res).toEqual("Buying 12 flowers with xxxx-xxxx-xxxx-xxxx")
    });
  })
});