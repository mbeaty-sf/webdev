import { AverageTempTracker, BoundedTempTracker, Counter, TempTracker } from './classes'

describe('Classes Exercise', () => {
  describe('TempTracker', () => {
    it('Should support temperature adjustment', () => {
      const tracker = new TempTracker()
      tracker.setTemp(42)
      expect(tracker.getTemp()).toEqual(42)

      tracker.setTemp(0)
      expect(tracker.getTemp()).toEqual(0)
    })
  })

  describe('AverageTempTracker', () => {
    it('should provide the average of temps that have been set', () => {
      const tracker = new AverageTempTracker()
      tracker.setTemp(42)
      tracker.setTemp(56)
      tracker.setTemp(90)

      expect(tracker.getAverageTemp()).toEqual((42 + 56 + 90) / 3)
    })
  })

  describe('Counter', () => {
    it('should be able to set instance state without constructor method', () => {
      const counter1 = new Counter()
      const counter2 = new Counter()
      expect(counter1.tick()).toEqual(1)
      expect(counter2.tick()).toEqual(1)
    })

    it('should keep the internal state private', () => {
      const counter = new Counter()
      expect(counter.tick()).toEqual(1)
      expect(counter.tick()).toEqual(2)
      expect(counter.counter).toEqual(undefined)
    })
  })
})
