/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {

    if (array.length === 0) {
    return undefined; 
  }
  
  let minAmount = cb(array[0]);
  let minReturnAmount = array[0];

  for (let element of array) {
    const value = cb(element);
    if (value < minAmount) {
      minAmount = value;
      minReturnAmount = element;
    }
  }
  
  return minReturnAmount;
}

export function maxBy(array, cb) {

    if (array.length === 0) {
    return undefined; 
  }
  
  let maxAmount = cb(array[0]);
  let maxReturnAmount = array[0];

  for (let element of array) {
    const value = cb(element);
    if (value > maxAmount) {
      maxAmount = value;
      maxReturnAmount = element;
    }
  }
  
  return maxReturnAmount;
}

const people = (
  [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
    { name: "rachel", age: 25 }
  ]
);

const maxAgePerson = maxBy(people, person => person.age);

const minAgePerson = minBy(people, person => person.age);

const maxNamePerson = maxBy(people, person => person.name);

const minNamePerson = minBy(people, person => person.name);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function