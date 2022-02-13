console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
hello();
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}`;
}
helloName('Jon')
console.log(helloName('Jon'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
addNumbers(2,3)
console.log('In add: ', addNumbers(2,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
return num1 * num2 * num3;
}
multiplyThree([2,2,2])
console.log('In multiply:', multiplyThree(2,2,2));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
isPositive(3);
isPositive(0);
isPositive(-3);
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log(isPositive(4));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

// let list =[1,2,3,4,5]
// function getLast( array ) {
// for (var i = 0; i < list.length-1; i++) {
//   list[i]
//   return list;
// }
// console.log(getLast());
// }

// function getLast( array ){
//   let ilast = array[array.length -1]
// }
// return ilast;
// getLast([1,2,3,4]);
// console.log(getLast([1,2,3,4]));

function getLast( array ) {
return[array[array.length-1]];
}
getLast(['apple', 'orange', 'watermelon', 'pear'])
console.log(getLast(['apple','orange', 'watermelon', 'pear']));
console.log(getLast([]));
//   .length -1 gives last item in array


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
for (let i = 0; i < array.length; i++) {
  if (array[i] == value) {
    return true;
    }
  }
  return false;
}
find(1, [7,8,9,1])
find(1, [6,7,8,9])
console.log('true', find(1, [7,8,9,1]));
console.log('false', find(1, [6,7,8,9]));
// for statement with if statement, if else outside of loop maybe
// set
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (letter != string[0]) {
  return false;
}else {
  return true;
}
}
isFirstLetter('a','apple')
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log(isFirstLetter('c', 'apple'));//my check 1
console.log(isFirstLetter('c', 'cat'));// my check 2
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (var i = 0; i < array.length; i++) {
  sum +=  array[i];
  }
  return sum;
}
sumAll([2,2,2])
console.log('The total is:', sumAll([2,2,2]));
console.log('The total is:', sumAll([1,2,7]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function posNum(numbers) {
  let positiveNumbers =[];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}
posNum([1,2,3])
console.log(posNum([1,2,3]));
console.log(posNum([-1,-2,-3]));
console.log(posNum([-2,-4,-6,7,8,9]));

// if i>0 add number to Array ex. [1,2,3,4]
// else if no positive Return empty array []


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// Examples
// cubes(3) ➞ 27
// cubes(5) ➞ 125
// cubes(10) ➞ 1000
//code to fix:
// function cubes(a) {
// 	retunr a ** 3
//}
function cubes(a) {
	return a ** 3;
}
