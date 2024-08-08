function printName(name) {
  console.log("my name is: " + name);
}

printName("navid");

const printAge = function (age) {
  console.log("I'm " + age + "years old");
};

printAge(25);

const arr = ["asd", "dqwe", "asd"];

console.log(
  arr.map((item, index) => ({
    name: item,
    index: index,
  }))
);

// arrow function

const normalArrowFunction = (arg) => {
  // execute code
  // return something
};

const singleLineArrowFunction = (arg) => ""; // returns something

const noArgumentArrowFunction = () => {};
