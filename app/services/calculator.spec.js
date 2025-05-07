// calculator.spec.js
import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should sum', () => {
    // arrange
    const calculator = new Calculator();
    const x = 5;
    const y = 10;

    // act
    const sum = calculator.sum(x, y);

    // assert
    expect(sum).toBe(15);
  });

  it('should subtract', () => {
    // arrange
    const calculator = new Calculator();
    const x = 10;
    const y = 5;

    // act
    const subtract = calculator.subtract(x, y);

    // assert
    expect(subtract).toBe(5);
  });

  it('should multiply', () => {
    // arrange
    const calculator = new Calculator();
    const x = 5;
    const y = 10;

    // act
    const multiply = calculator.multiply(x, y);

    // assert
    expect(multiply).toBe(50);
  });

  it('should divide', () => {
    // arrange
    const calculator = new Calculator();
    const x = 10;
    const y = 2;

    // act
    const divide = calculator.divide(x, y);

    // assert
    expect(divide).toBe(5);
  });

  it('should handle division by zero', () => {
    // arrange
    const calculator = new Calculator();
    const x = 10;
    const y = 0;

    // act and assert
    expect(() => calculator.divide(x, y)).toThrowError('Cannot divide by zero');
  });
});