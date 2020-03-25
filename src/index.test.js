const add = require('./index')

describe('add', () => {
  test('should work', () => {
    expect(add(1,2)).toEqual(3)
  })
})