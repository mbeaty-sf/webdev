describe("Syntax", () => {
  describe("declarations", () => {
    it("rewrite to use const and let declarations", () => {
      /**
       * Assume the codebase uses `let` declarations only for variables
       * that are reassigned. Use `const` otherwise.
       */
      var a = 4;
      var b = [1, 2, 3];

      if (b.length < 4) b.push(a);
      expect(b).toEqual([1, 2, 3, 4]);

      var a = 2;
      var c = [1, a, 3];
      expect(c).toEqual([1, 2, 3]);
    });
  });

  describe("loops", () => {
    it("rewrite the for loop to use a let variable", () => {
      const nums = [];
      var i = "some value";
      for (var i = 0; i < 3; i++) {
        nums.push(i);
      }
      expect(i).toEqual("some value");
      expect(nums).toEqual([0, 1, 2]);
    });
  });

  describe("object shorthand", () => {
    it("rewrite using object property shorthand", () => {
      const name = "Andrew";
      const person = { name: name };
      expect(person.name).toEqual("Andrew");
    });
  });

  describe("functions", () => {
    it("rewrite the function declaration with arrow syntax", () => {
      expect(foo()).toEqual("foo");

      function foo() {
        return "foo";
      }
    });

    it("rewrite the function declaration, and use implicit return for anonymous function", () => {
      function add(a, b) {
        return a + b;
      }
      expect(add(1, 2)).toEqual(3);
    });

    it("rewrite the logic in the function to use default parameters", () => {
      const getIndexOfFoo = (str) => {
        const strDefault = str || "";
        return strDefault.indexOf("foo");
      };

      expect(getIndexOfFoo("hello foo bar")).toEqual(6);
      expect(getIndexOfFoo()).toEqual(-1);
    });
  });

  describe("array spread and destructuring", () => {
    it("rewrite using array destructuring", () => {
      const favoriteThings = ["tea", "chocolate", "bicycles", "mangoes"];
      const tea = favoriteThings[0];
      const chocolate = favoriteThings[1];
      const others = favoriteThings.slice(2);
      expect(tea).toEqual("tea");
      expect(chocolate).toEqual("chocolate");
      expect(others).toEqual(["bicycles", "mangoes"]);
    });

    it("rewrite to use rest parameters", () => {
      // takes the first number, and then adds it to each value in the remaining numbers and
      // returns an array
      const addNToNumbers = function () {
        const n = arguments[0];
        const nums = Array.prototype.slice.call(arguments, 1);
        return nums.map(val => val + n);
      };
      expect(addNToNumbers(3, 1, 2, 5)).toEqual([4, 5, 8]);
    });

    it("use spread syntax to shallow-copy an array", () => {
      const arr1 = [1, 2, 3];
      const copy = undefined; // TODO;

      expect(copy).toEqual([1, 2, 3]);
      expect(arr1 === copy).toEqual(false);
    });

    it("write a function that immutably prepends a new item to an array", () => {
      const prepend = (arr, item) => {
        arr.unshift(item);
        return arr;
      };
      const animals = ["cat", "dog", "bird"];
      const moarAnimals = prepend(animals, "alpaca");
      expect(moarAnimals).toEqual(["alpaca", "cat", "dog", "bird"]);
      expect(animals === moarAnimals).toEqual(false);
    });

    it("rewrite using spread syntax to duplicate the contents of an array", () => {
      const duplicateArrayContents = (arr) => {
        const result = [];
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < arr.length; j++) {
            result.push(arr[j]);
          }
        }
        return result;
      };

      expect(duplicateArrayContents([1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3]);
    });
  });

  describe("object spread and destructuring", () => {
    it("rewrite using object destructuring", () => {
      const person = { id: 42, name: "Andrew", location: "Seattle" };
      const id = person.id;
      const name = person.name;
      const location = person.location;
      expect(id).toEqual(42);
      expect(name).toEqual("Andrew");
      expect(location).toEqual("Seattle");
    });

    it("use object destructuring with a key rename", () => {
      const person = { id: 42, name: "Andrew", location: "Seattle" };
      const personId = person.id; // destructure this, but keep the variable name `personId`
      expect(personId).toEqual(42);
    });

    it("copy an object using the spread syntax", () => {
      const obj1 = { foo: 1, bar: 2 };
      const obj2 = undefined; // TODO
      expect(JSON.stringify(obj1)).toEqual(JSON.stringify(obj2));
      expect(obj1).not.toBe(obj2);
    });
  });

  describe("Challenges", () => {
    it("CHALLENGE: rewrite using spread syntax to duplicate and reverse contents of an array", () => {
      // HINT: You can immutably reverse an array with: `[...array].reverse()`
      const duplicateAndReverseArrayContents = (arr) => {
        const result = [];
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (i === 0) {
              result.push(arr[j]);
            } else {
              result.push(arr[arr.length - 1 - j]);
            }
          }
        }
        return result;
      };

      expect(duplicateAndReverseArrayContents([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1]);
    });

    it("CHALLENGE: rewrite using object spread and destructuring", () => {
      const withoutKey = (keyToRemove, obj) => {
        const copy = {};
        for (const [key, value] of Object.entries(obj)) {
          if (key !== keyToRemove) copy[key] = value;
        }
        return copy;
      };

      const person = { id: 42, name: "Andrew", location: "Seattle" };
      expect(withoutKey("id", person)).toEqual({ name: "Andrew", location: "Seattle" });
      expect(withoutKey("location", person)).toEqual({ id: 42, name: "Andrew" });
      // should not be mutating `person`
      expect(person).toEqual({ id: 42, name: "Andrew", location: "Seattle" });
    });

    it("CHALLENGE: write a function that immutably updates the done flag on a list of todos", () => {
      // helper function to locate a todo by its ID in an array. Returns the matched todo
      const findTodo = (id, todos) => todos.find(todo => todo.id === id);

      const setTodoDone = (id, todos) => {
        const todo = findTodo(id, todos);
        todo.done = true; // :-(
        return todos;
      };

      const todos = [{ id: 1, done: false }, { id: 2, done: false }];
      const updatedTodos = setTodoDone(2, todos);
      expect(updatedTodos).toEqual([{ id: 1, done: false }, { id: 2, done: true }]);
      expect(updatedTodos === todos).toEqual(false);
      expect(updatedTodos[0] === todos[0]).toEqual(true); // the 1st one is not changed
      expect(updatedTodos[1] === todos[1]).toEqual(false); // the 2nd one should be immutably
                                                           // updated
    });
  });
});

