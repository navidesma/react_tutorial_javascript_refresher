const obj = { name: "navid", lastName: "esma", age: 25 };

const arr = ["navid", "ali", "hamid", "ali"];

const name = "majid";

const { lastName, name: myName } = obj;

console.log(myName);

const [, , myCousinsName] = arr;

console.log(myCousinsName);
