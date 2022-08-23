export function fizzbuzz(number: number): string {

  if (isFizzBuzz()) {
    return 'FizzBuzz';
  }

  if (isFizz()) {
    return 'Fizz';
  }

  if (isBuzz()) {
    return 'Buzz';
  }

  return `${number}`;

  function isFizzBuzz() {
    return isFizz() && isBuzz();
  }

  function isFizz() {
    return number % 3 === 0;
  }

  function isBuzz() {
    return number % 5 === 0;
  }
}
