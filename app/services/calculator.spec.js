describe('Calculator', function() {
  var Calculator = require('./calculator.js');
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('should sum', function() {
    // arrange
    var x1 = 5;
    var x2 = 10;
    var unused = 10;
    // act
    var sum = calculator.sum(x1, x2);

    // gọi hàm chưa tồn tại (Codacy và linter sẽ bắt)
    var broken = calculator.divide(x1, x2); 

    // assert
    expect(sum).toEqual(15);
  });
});