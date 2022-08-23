import { fizzbuzz } from "../src/fizzbuzz";

describe('Fizzbuzz', () => {
  it.each([
    [4, '4'],
    [7, '7'],
    [1, '1']
  ])("should return %s as string", (number: number, expectedResult: string) => {
        expect(fizzbuzz(number)).toBe(expectedResult);
    })

  it.each([
    3, 6, 9
  ])("should return 'Fizz' if the number is multiple of three. Number: %s", (number) => {
    expect(fizzbuzz(number)).toBe('Fizz');
  })

  it.each([
    5, 10, 20
  ])("should return 'Buzz' if the number is multiple of five. Number: %s", (number) => {
    expect(fizzbuzz(number)).toBe('Buzz');
  })

  it.each([
    15, 30, 45
  ])("should return 'FizzBuzz' if the number is multiple of five and three. Number: %s", (number) => {
    expect(fizzbuzz(number)).toBe('FizzBuzz');
  })
})

