import { exercise1, exercise2 } from './exceptions'

describe('Exceptions', () => {
  describe('Exercise 1', () => {
    it('does not throw the error', () => {
      expect(() => exercise1(2)).not.toThrow()
      expect(exercise1(1)).toEqual(true)
      expect(exercise1(2)).toEqual(false)
    })
  })

  describe('Exercise 2', () => {
    beforeEach(() => {
      jest.spyOn(console, "log").mockImplementation();
    });
    afterEach(() => {
      console.log.mockRestore();
    });

    const validPhone = '123-123-1234'
    const invalidPhone = '1'

    it('does not throw with a valid phone number', () => {
      expect(() => exercise2({ phoneNumber: validPhone })).not.toThrow()
    })

    it('prints a message when an invalid phone is provided', () => {
      expect(() => exercise2({ phoneNumber: invalidPhone })).not.toThrow()
      expect(console.log).toHaveBeenCalledWith('Invalid phone number')
    })

    it('rethrows other errors', () => {
      expect(() => exercise2(null)).toThrow(TypeError)
    })
  })
})