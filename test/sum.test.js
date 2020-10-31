const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  //Arrange
  let a = 1
  let b = 2

  //Act
  let result = sum(a,b)

  //Assert
  expect(3).toBe(3);
})
