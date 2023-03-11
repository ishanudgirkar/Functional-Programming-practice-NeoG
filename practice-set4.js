/*
Instructions: 
1. Make use of .reduce() method in this set. 
2. You can make use of basic methods such as .length, toLowerCase(), toUpperCase() if needed. 
3. Do NOT use for-loops.
*/

//Q1 Given an array, write an ES6 function that returns the total length of all the strings in an array.

const totalLength = strings => strings.reduce((acc,currVal) => acc += currVal.length ,0)

const strings = ["apple", "banana", "cherry", "date", "blueberry"];

console.log(totalLength(strings));
// Output: 30


//Q2 Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers 
// in the array

const sumSquares = numbers => numbers.reduce((acc,curVal) => acc += curVal*curVal , 0)

const numbers = [1, 2, 3, 4, 5];
// Your code here

console.log(sumSquares(numbers));
 // Output: 55 


 //Q3 Write an ES6 function that calculates and returns the total value of all items in an array of objects.

 const totalValue = arr => arr.reduce((acc,curVal) => acc+= curVal.price , 0)

 const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];
  
  console.log(totalValue(items)); 
  // Output: 60


//Q4 Write an ES6 function that takes an array of strings as input and concatenates them into a single string.


const concatStrings = arr => arr.reduce((acc,curVal) => acc += curVal ,"")

console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'


//Q5 Write an ES6 function to multiply and return all the elements of a given array.

const product = arr => arr.reduce((acc,curVal) => acc*=curVal , 1)

const numbers = [1, 2, 3, 4, 5];

console.log(product(numbers));
// Output: 120


//Q6  Write an ES6 function that takes an array of strings and returns the longest string.

const longestString = arr => arr.reduce((acc,curVal) => curVal.length > acc.length ? acc = curVal : acc, "")

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

console.log(longestString(strings)); 
// Output: 'Haule Haule'


//Q7* Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const oldestPersonName = arr => arr.reduce((acc,curVal) => curVal.age > acc.age ? curVal : acc,{name: "", age: 0}).name

// const oldestPersonName = arr => arr.reduce((acc,curVal) => curVal.age > acc ? curVal.name : acc = curVal ,0)

const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 56}, 
    {name: 'Naina', age: 45}
]

console.log(oldestPersonName(people)); 
//// Output: 'Naina'


//Q8* Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average 
// age of all the people.

// const getAverageAge = people => people.reduce((acc,curVal) =>{
//     acc["averageAge"] = (acc["averageAge"] ?? 0) + curVal.age/people.length
//     return acc
// } ,{})


const getAverageAge = people => people.reduce((acc,curVal) =>{
   acc.averageAge = 5
} ,{})/people.length


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
 
  console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }



//Q9* Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with 
// the most expensive product.  

const findMostExpensiveProduct = products => products.reduce((acc,curVal) =>  curVal.price*curVal.quantity > acc.price*acc.quantity ? curVal : acc,{name:"" , price:0, quantity:0})

const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 6},
    { name: "Slipper", price: 40, quantity: 3 }
  ];
  
  console.log(findMostExpensiveProduct(products)); 
  // { name: "Slipper", price: 40, quantity: 3 }


//Q10 Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const countStrings = arr => arr.reduce((acc,curVal) => {
    acc[curVal] = (acc[curVal] ?? 0) + 1  
    return acc
},{}) 

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

 