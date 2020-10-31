const converter = require('../converter');

test('1 bath to equal $0.03', () => {
  //Arrange
  let a = 1

  //Act
  let result = converter(a)

  // 1 bath ---> 0.03 dollar

  //Assert
  expect("$0.03").toBe(result);
})

test('1 bath to equal $0.03 call from api', () => {
    //Arrange
    let a = 1
  
    //Act
    jest.mock('exchangeRate');
    const resp = 0.03;
    exchangeRate.mockResolvedValue(resp)

    let result = converter(a)
  
    // 1 bath ---> 0.03 dollar
  
    //Assert
    expect("$0.03").toBe(result);
  })
