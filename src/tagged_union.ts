type Option<T> =
  | {
    type: "yes";
    data: T;
  }
  | {
    type: "no";
  };

function isSome<T>(obj: Option<T>): obj is {type: "yes"; data: T} {
  return obj.type === "yes";
}

function showNumberIfExists(value: Option<number>): void {
  if (isSome(value)) {
    console.log(value.data);
  }
}

const Yes: Option<number> = {
  type: "yes",
  data: 42
}

const No: Option<number> = {
  type: "no"
}

showNumberIfExists(Yes);
showNumberIfExists(No);

function doubleOption(obj: Option<number>) {
  return mapOption(obj, x => x * 2);
}

const four: Option<number> = {type: "yes", data: 4};
const nothing: Option<number> = {type: "no"};

console.log(doubleOption(four));
console.log(doubleOption(nothing));

function mapOption<T, U>(obj: Option<T>, f: (x: T) => U): Option <U> {
  if (isSome(obj)) {
    return {
      type: "yes",
      data: f(obj.data),
    };
  }
  return {
    type: "no"
  };
}