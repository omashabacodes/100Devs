//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let party = ['Bulbasaur', 'Charmander', 'Metagross', 'Latios', 'Oddish'];

function reversePartyOrder(party){
  console.log(party.reverse());
}
reversePartyOrder(party);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let a = [3,3,3];
let b = [2,2,2];

function compareSquareAndCube(a,b){
  let sumOfSquares = a.reduce((acc,c)=> acc + (c**2), 0);
  console.log(sumOfSquares);

  let sumOfCubes = b.reduce((acc,c) => acc + (c**3), 0);
  console.log(sumOfCubes);

  return sumOfSquares > sumOfCubes;
}

console.log(compareSquareAndCube(a,b));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
let arr = [22, -6, 32, 82, 9, 25];
let arr2 = [68, -1, 1, -7, 10, 10];

function isMultiple(array){
  return array.filter((ele,idx)=>ele % idx === 0);
}

console.log(isMultiple(arr));
// [-6, 32, 25]

console.log(isMultiple(arr2));
// [-1, 10]


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
let mixedArr = ['1', '2', 3, '4', 5]

function sumOfValues(arr){
  return arr.reduce((acc,c)=>acc + Number(c), 0);
}

console.log(sumOfValues(mixedArr));

// Full Codewars example lol
const s = r => r.reduce((a,c)=>+a+ +c)

console.log(s(mixedArr));