import { exercise1, exercise2, exercise3, exercise4, exercise5 } from './array'
import { pluck } from 'ramda'

class User {
  constructor(age, id) {
    this.age = age
    this.id = id
  }

  sendNotification() {}
}

describe('Array higher order functions', () => {
  describe('Exercise 1', () => {
    it('invokes the sendNotification method of the users', () => {
      jest.spyOn(User.prototype, 'sendNotification')
      const users = [new User(), new User(), new User()]
      exercise1(users, 'hello')
      expect(User.prototype.sendNotification.mock.calls).toEqual([['hello'], ['hello'], ['hello']])
    })
  })

  describe('Exercise 2', () => {
    it('turns all the strings into uppercase', () => {
      const strs = ['foo', 'bar', 'baz']
      expect(exercise2(strs)).toEqual(['FOO', 'BAR', 'BAZ'])
    })
  })

  describe('Exercise 3', () => {
    it('returns whether all the numbers are odd', () => {
      expect(exercise3([1, 3, 5])).toEqual(true)
      expect(exercise3([1, 2, 5])).toEqual(false)
    })
  })

  describe('Exercise 4', () => {
    it('filters the users who are voting age', () => {
      const users = [new User(10), new User(18), new User(30)]
      const res = exercise4(users)
      expect(res).toBeDefined()
      expect(pluck('age', res)).toEqual([18, 30])
    })
  })

  describe('Exercise 5', () => {
    it('indexes the users by their id', () => {
      const users = [new User(10, 1), new User(18, 2), new User(30, 3)]
      const res = exercise5(users)
      expect(res).toBeDefined()
      expect(res).toEqual({
        '1': { id: 1, age: 10 },
        '2': { id: 2, age: 18 },
        '3': { id: 3, age: 30 },
      })
    })
  })
})
