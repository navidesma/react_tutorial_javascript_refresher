const condition = 10 > 9; // or true, or false

if (condition) {
  // statements
  console("10 is greater than 9");
} else {
  // other statements
  console("10 is not greater than 9");
}

const secondCondition = true;

if (condition) {
  // statements
} else if (secondCondition) {
  // other statements
} else {
  // other statements
}

// one line condition

condition
  ? console.log("condition is true")
  : console.log("condition is false");

// falsify a value

const falsify = !condition;

// truthy values

// non zero numbers, non empty string, array, object, true
const nonZeroNumber = -100; // 123, 1000, 10.125
const nonEmptyString = "0"; // "asd", "a"
const object = {};
const array = [];
const trueBoolean = true;

// falsy values

// undefined, null, empty string, zero, false
const undefinedValue = undefined;
const nullValue = null;
const emptyString = "";
const zero = 0; // NaN
const falseBoolean = false;
