// const add = (a,b) => a+b;

// console.log(add(3,2))

// let numbers =[1,2,3,4]

// let square = numbers.map(num => num*num)

// console.log(square)

// let numbers = [10,15,20,25]

// let result = numbers.filter(num => num > 15)

// console.log(result)
let numbers = [10,15,20,25]

let result = numbers.reduce((acc,num) => acc + num, 0)

console.log(result)