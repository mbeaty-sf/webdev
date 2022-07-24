import { createTempTracker } from './closure-private'

describe('Closures: Private variables', () => {
  it('Should support temperature adjustment', () => {
    const tracker = createTempTracker()
    tracker.setTemp(42)
    expect(tracker.getTemp()).toEqual(42)
  })

  it('should not be accessible on the object', () => {
    const tracker = createTempTracker()
    expect(Object.keys(tracker)).toEqual(expect.arrayContaining(['getTemp', 'setTemp']))
  })

  it('Should use a unique closure', () => {
    const trackerA = createTempTracker()
    const trackerB = createTempTracker()

    trackerA.setTemp(42)
    trackerB.setTemp(43)

    expect(trackerA.getTemp()).toEqual(42)
    expect(trackerB.getTemp()).toEqual(43)
  })
})
