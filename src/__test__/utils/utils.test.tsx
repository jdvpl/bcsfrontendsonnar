
import { clearSessionStorage, convertToColombianPesos, calculateAge, parserPercentageDecimal } from '../../utils'

describe('clearSessionStorage', () => {
  it('should clear all items in session storage', () => {
    // Arrange
    sessionStorage.setItem('key1', 'value1');
    sessionStorage.setItem('key2', 'value2');
    // Act
    clearSessionStorage();
    // Assert
    expect(sessionStorage.length).toEqual(0);
  });
  test('Convert to Colombian pesos', () => {
    expect(convertToColombianPesos(5000)).toBe('$ 5.000');
  });
  test('Convert to Colombian pesos with empty input', () => {
    expect(convertToColombianPesos("")).toBe('');
  });
  test('Convert to Colombian pesos with undefined input', () => {
    expect(convertToColombianPesos(undefined)).toBe('');
  });
  test('Convert to Colombian pesos with zero input', () => {
    expect(convertToColombianPesos(0)).toBe('');
  });
  test('Convert to Colombian pesos with 00 input', () => {
    expect(convertToColombianPesos("00")).toBe('');
  });
  test('calculates age correctly', () => {
    const dob = '01/01/2000';
    const age = calculateAge(dob);
    expect(age).toBe(new Date().getFullYear() - 2000);
  });
  test('should return the correct decimal number rounded to two decimal places', () => {
    const number = 0.1234;
    const decimal = parserPercentageDecimal(number);
    expect(decimal).toBe(0.12);
  });

  test('should return the correct decimal number rounded to two decimal places', () => {
    const number = 0.1299;
    const decimal = parserPercentageDecimal(number);
    expect(decimal).toBe(0.13);
  });

  test('should return the correct decimal number rounded to two decimal places', () => {
    const number = -0.1234;
    const decimal = parserPercentageDecimal(number);
    expect(decimal).toBe(-0.12);
  });
});