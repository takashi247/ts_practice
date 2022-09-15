for (let i = 1; i <= 100; ++i) {
  const message: string = getFizzBuzzString(i);
  console.log(message);
}

function getFizzBuzzString(i: number): string {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return String(i);
  }
}

for (const i of sequence(1, 100)) {
  const message: string = getFizzBuzzString(i);
  console.log(message);
}

function sequence(first: number, last: number): number[] {
  const result: number[] = [];
  for (let i = first; i <= last; ++i) {
    result.push(i);
  }
  return result;
}