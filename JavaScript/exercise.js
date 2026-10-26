let scores = [2,4,6,8]
let sum = scores.reduce((e) => e + e)
console.log(sum)

let numbers = [1,2,3,4,5,6,7,8];
let even = numbers.filter((e) => e % 2 === 0)
console.log(even)

let largestNumber = [12,4,50,8,20]
let large  = Math.max((e) => e > e)
console.log(large)

let reverseArray = [1,2,3,4]
let reverse = reverseArray.reverse()
console.log(reverse)

let positiveNumbers = [-2,5,-1,8,0,10]
let positive = positiveNumbers.filter((e) => e > 0 )
console.log(positive)

let multipleArray = [2,4,6]
let multiply = multipleArray.map((e) => e * 3)
console.log(multiply)

let studentPassed = ([30,55,80,45,90])
let answer = studentPassed.filter((e) => e >= 50)
console.log(answer)