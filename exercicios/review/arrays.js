/* ----- TYPES OF ARRAYS ----- */


// Literal Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

let studentProfile = ['James Halbert', 27, 'Pensilvania']
console.log(studentProfile[0])


/* ----- ARRAYS METHODS ----- */

// 1 - reverse()

let arr = [1,2,3];
arr.reverse() //  [3,2,1];


// 2 - find()

arr = [5,12,8,130]
let found = arr.find(num => num > 10) // 12


// 3 - findIndex()

arr = [1,2,3,4,5]
let x = arr.findIndex(num => num === 5) // 4


// 4 - includes()

arr = [1,2,3,4,5]
let has3 = arr.includes(3) // true


// 5 - map()

arr = [1,2,3,4,5]
let square = arr.map(num => num * 2) // [2,4,6,8,10]


// 6 - filter()

arr = [1,2,3,4,5]
let even = arr.filter(num => num % 2 === 0) // [2,4]


// 7 - reduce()

arr = [1,2,3,4]
let sum = arr.reduce((acc, num) => acc + num, 0) // 10


// 8 - forEach()

let user = ['Giovana', 'Ligia']
user.forEach((user) => console.log('Olá ' + user)) // Olá Giovana, Olá Ligia


// 9 - some()

let obj = [
    {name: 'James', job: 'salesman', hired: true},
    {name: 'Ryan', job: 'temp', hired: false},
    {name: 'Kevin', job: 'accountant', hired: true}
]

let employees = obj.some(user => user.hired) // true


// 10 - every()

let salesTeam = obj.every(user => user.job === 'salesman') // false


