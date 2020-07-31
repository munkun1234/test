import { TypescriptCalculator } from './typescript-calculator';

describe('TypescriptCalculator', () => {
  it('should sum', () => {
    // arrange
    const calculator = new TypescriptCalculator();
    var x1 = 5;
    var x2 = 10;

    // act
    const sum = calculator.sum(x1, x2);

    // assert
    expect(sum).toEqual(15);
  });
});
