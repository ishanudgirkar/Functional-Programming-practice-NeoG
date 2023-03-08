//Q1 Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. 
//Return the first car object that is a Toyota and the year is after 2010.

const findToyotaCar = cars => cars.find(car => car.make === `Toyota` && car.year > 2010)


const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
 
  const toyotaCar = findToyotaCar(cars);
  console.log(toyotaCar); 
  // Output: { make: "Toyota", model: "Camry", year: 2015 }


//Q2 Write an ES6 function that takes an array of objects containing car information (make, model, year) and 
// returns an array with only the cars that were made after the year 2012.  

const getCarDetails = cars => cars.filter(car => car.year > 2012)

const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
  
  const getCars = getCarDetails(cars);
  console.log(getCars);
  // Output: [{ make: "Toyota", model: "Camry", year: 2015 }, { make: "Ford", model: "Mustang", year: 2018 }]



// Q3 Write an ES6 function that takes an array of objects representing products with properties name, price, and 
// category. Return the first product object that is in the category "electronics".  

const findElectronicsProduct = products => products.find(product => product.category === "electronics")

const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  const electronicsProduct = findElectronicsProduct(products);
  console.log(electronicsProduct); 
  // Output: { name: "iPad", price: 799, category: "electronics" }


//Q4 Write an ES6 function that takes an array of objects representing products with properties name, price and category.
// Return all the products object that are in the category "electronics".  


const getAllElectronicProducts = products => products.filter(product => product.category === "electronics")

const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  const electronicProducts = getAllElectronicProducts(products);
  console.log(electronicProducts); 


//Q5 Write an ES6 function that takes an array of objects containing student information (name, age, grade) and 
//returns an array with only the students who have a grade above a certain value.

const filterStudentsByGrade = (students,reqGrade) => students.filter((student,reqGrade) => student.grade > reqGrade) 

const filterStudentsByGrade = (students,reqGrade) => students.filter(student => student.grade > reqGrade) 

const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
  ];
  
  const highGradeStudents = filterStudentsByGrade(students, 85);
  console.log(highGradeStudents); 


//Q6 Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. 
// Return the first book object that has more than 500 pages. 

const findBookWithMoreThan500Pages = books => books.find(book => book.pageCount > 500)

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
  console.log(bookWithMoreThan500Pages); 
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }



//Q7 Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and 
// returns an array with only the customers who are of gender Male.  

const getMaleCustomers = customers => customers.filter(customer => customer.gender === "Male")

const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
  ];

  
  const maleCustomers = getMaleCustomers(customers);
  console.log(maleCustomers); 
  // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]



//Q8 Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and 
// returns an array with all the games of a certain genre.  

const filterByGenre = (games,reqGenre) => games.filter(game => game.genre === reqGenre)

const games = [
    {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
    {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
    {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
    {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
  ];
  
  const filteredGames = filterByGenre(games, "Puzzle");
  console.log(filteredGames);
  // Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]


//Q9 Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an
// array with only the car model that were made after the year 2012.

const getCarModel = cars => cars.filter(car => car.year > 2012).map(car => car.model)

const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
 
  
  const carModels = getCarModel(cars);
  console.log(carModels);
  // Output: ["Camry", "Mustang"]


//Q10 Write an ES6 function that takes an array of objects representing books with properties title, author
// and pageCount. Return the all book titles that have more than 700 pages.  

const getTitlesWithMoreThan500Pages = books => books.filter(book => book.pageCount > 700).map(book => book.title)

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
   
  const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books);
  console.log(booksWithMoreThan500Pages); 
  // Output: ["The Lord of the Rings"]

// Q11 Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers
// in the array using the reduce function.  

const sumOfEvenNumbers = numbers => numbers.reduce(sumEven,0)

const sumEven = (acc,currValue,initIndex) => currValue % 2 === 0 ? acc + currValue : acc

const numbers = [12, 23, 4, 2, 11, 21] 

console.log(sumOfEvenNumbers(numbers))
// Output: 18



//Q12 Write an ES6 function that takes an array of objects representing students with properties name and score, 
// and returns the average score of all the students using the reduce function.

const getAverageScore = students => students.reduce(getAverage,0)

// const getTotal = (acc,currValue) => acc + currValue.score 

const getAverage = (acc,currValue) => acc + currValue.score/students.length

const students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];

  console.log(getAverageScore(students)); 
  // Output: 82.5