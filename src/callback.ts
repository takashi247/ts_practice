function map<T, U>(array: T[], callback: (arg: T) => U): U[] {
  const result: U[] = [];
  for (const i of array) {
    result.push(callback(i));
  }
  return result;
}

const nums = [1, 1, 2, 3, 5, 8, 13];

const result = map(nums, (x) => x * 10);

console.log(result);

const nums2 = [1, -3, -2, 8, 0. -1];

const res2: boolean[] = map(nums2, (x) => x >= 0);

console.log(res2);