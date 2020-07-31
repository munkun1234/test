//import { TypescriptCalculator } from './typescript-calculator';

describe('TypescriptCalculator', function() {
  //const TypescriptCalculator = require('./typescript-calculator');
  it('should sum', function() {
    // arrange
    //const calculator = new TypescriptCalculator();
    var x1 = 5;
    var x2 = 10;

    // act
    const sum = x1 + x2; // calculator.sum(x1, x2);

    // assert
    expect(sum).toEqual(15);
  });
});
