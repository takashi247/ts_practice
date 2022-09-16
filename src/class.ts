class User2 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("name should not be empty!");
    }
    this.name = name;
    this.age = age;
  }

  public getMessage(message: string): string {
    return `${this.name} (${this.age}) "${message}"`;
  }
}

const test = new User2("Takashi", 35);

console.log(test.getMessage("Hello!"));

function createUser(name: string, age: number):(message: string) => string {
  const getMessage = (message: string): string => `${name} (${age}) "${message}"`;
  return getMessage;
}

const getMessage = createUser("Takashi", 35);

console.log(getMessage("Hello, again!"));