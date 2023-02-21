
import { clearSessionStorage, convertToColombianPesos, calculateAge, parserPercentageDecimal, validateAddress, isValidDate, decryptPass, encriptPass, renderPercentage, cellPhoneMaked, emailMasked } from '../../utils'
import * as CryptoJS from 'crypto-js';

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
  test('valid addres', () => {
    const address = '1234 Main St';
    const result = validateAddress(address);
    expect(result).toEqual({ isError: false, message: '' });
  });
  test('address too long', () => {
    const address = '12345678901234567890123456789012345678901';
    const result = validateAddress(address);
    expect(result).toEqual({
      isError: true,
      message: 'La direccion no puede superar los 40 caracteres',
    });
  });
  test('address without number', () => {
    const address = 'Main St';
    const result = validateAddress(address);
    expect(result).toEqual({
      isError: true,
      message: 'La direccion debe contener almenos un numero',
    });
  });

  test('empty address', () => {
    const address = '';
    const result = validateAddress(address);
    expect(result).toEqual({ isError: false, message: '' });
  });
  test('number address', () => {
    const address = '9999999';
    const result = validateAddress(address);
    expect(result).toEqual({ isError: true, message: 'La direccion debe contener caracteres ' });
  });
  test('valid date', () => {
    const year = 2021;
    const month = 5;
    const day = 15;
    const result = isValidDate(year, month, day);
    expect(result).toBe(true);
  });
  test('invalid month', () => {
    const year = 2021;
    const month = 13;
    const day = 15;
    const result = isValidDate(year, month, day);
    expect(result).toBe(false);
  });
  test('invalid day', () => {
    const year = 2021;
    const month = 5;
    const day = 32;
    const result = isValidDate(year, month, day);
    expect(result).toBe(false);
  });
  it('should return decrypted password', () => {
    const password = CryptoJS.AES.encrypt('password123', 'key123').toString();
    const key = 'key123';
    const decrypted = decryptPass(password, key);
    expect(decrypted).toBe('password123');
  });
  it('should throw error with invalid credentials', () => {
    const password = 'invalidPassword';
    const key = 'invalidKey';
    expect(() => {
      decryptPass(password, key);
    }).toThrow('Invalid credentials');
  });
  it('should return encrypted password', () => {
    const password = 'password123';
    const key = 'key123';
    const encrypted = encriptPass(password, key);
    expect(encrypted).toBeTruthy();
  });
  it('should return encrypted password', () => {
    const password = 'password123';
    const key = 'key123';
    const encrypted = encriptPass(password, key);
    expect(encrypted).toBeTruthy();
  });
  it('should return the percentage as a whole number', () => {
    expect(renderPercentage(0.55)).toBe(55);
    expect(renderPercentage(0.75)).toBe(75);
  });

  it('should return "> 100" when percentage is over 100', () => {
    expect(renderPercentage(1.25)).toBe('> 100');
  });
  it('should mask a 10-digit phone number', () => {
    const number = '1234567890';
    const expected = '123●●●●●90';
    const result = cellPhoneMaked(number);
    expect(result).toEqual(expected);
  });

  it('should mask a 7-digit phone number', () => {
    const number = '1234567';
    const expected = '123●●67';
    const result = cellPhoneMaked(number);
    expect(result).toEqual(expected);
  });


  it('should mask a 0-digit phone number', () => {
    const number = '';
    const expected = '';
    const result = cellPhoneMaked(number);
    expect(result).toEqual(expected);
  });

  it('should mask a phone number with non-digit characters', () => {
    const number = '123-456-7890';
    const expected = "123●●●●●●●90";
    const result = cellPhoneMaked(number);
    expect(result).toEqual(expected);
  });

  it('should mask a regular email address', () => {
    const email = 'johndoe@example.com';
    const expected = 'joh●●●e@example.com';
    const result = emailMasked(email);
    expect(result).toEqual(expected);
  });


  it('should mask an email address with a long username', () => {
    const email = 'verylongusername@example.com';
    const expected = 'ver●●●●●●●●●●●●e@example.com';
    const result = emailMasked(email);
    expect(result).toEqual(expected);
  });

  it('should mask an email address with a one-letter username', () => {
    const email = 'aadsf8@example.com';
    const expected = 'aad●●8@example.com';
    const result = emailMasked(email);
    expect(result).toEqual(expected);
  });

  it('should mask an email address with multiple "@" symbols', () => {
    const email = 'johndo8@example.com';
    const expected = 'joh●●●8@example.com';
    const result = emailMasked(email);
    expect(result).toEqual(expected);
  });

});