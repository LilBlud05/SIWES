/* /* let age1 = 10;
let age2 = 20;
isEqualTo10 = age1 === 10;
isEqualTo20 = age2 === 20;

price1 = 5;
price2 = "5";
console.log(price1 == price2);
console.log(price1 === price2);

if (isEqualTo10) {
  console.log("age is 10");
} else if (isEqualTo20) {
  console.log("age is 20");
} else {
  console.log("error");
}

if (age1 % 2 !== 0) {
  console.log("age is even");
} else {
  console.log("age is odd");
}

switch (age1) {
  case 10:
    console.log("age is 10");

    break;

  case 20:
    console.log("age is 20");
  default:
    break;
}

result = age1 === 10 ? "The result age is 10" : "The result age is not 10";
console.log(result)

/* for ( i = 0; i < 10; i++) {
  console.log(i)
  
}

for ( i = 10; i > 0; i--) {
  console.log(i)
}
 */
/* for ( i = 10; i < 0; i += 2) {
  console.log(i)
}

x = 0
while (x < 10) {
  console.log(x)
  x = x + 1
}

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text.length;
console.log(length)

/* let x = 10;
let y = "20";
let z = x + y;
console.log(z) */

function sayHello (){
  return "Hello World";
}
let message = sayHello();

function add(a, b){
  console.log(a + b)
} 

 
function countdown() {
  for ( i = 0; i > 0; i--) 
  console.log(i)

}

let number = countdown(10)


function even(number) {
  if (number % 2 !== 0) {
  console.log("age is even");
} else {
  console.log("age is odd");
}
  }

even(10)

function max(a, b) {
  if (a > b ) {
    console.log("a is greater than b");}
  else if (a === b) {
    console.log("The numbers are equal")
  }
  else {
    console.log("a is less than b");
}
    }

max(20, 20)

function rectanglearea(l , h) {
  console.log(l * h)

}

rectanglearea(10 , 13)
/* 
function grade(x) {
  if (x >= 80) {
    console.log("Your Grade Is A")
  }
  else if (x >= 70 ) (x <= 79); {
    console.log("Your Grade Is B")
  }

  elseif (x >= 60 ) (x <= 69); {
    console.log("Your Grade Is C")
  }
  elseif (x >= 50) (x <= 59); {
    console.log("Your Grade Is D")
  }
  elseif (x >= 40) * (x <= 49); {
    console.log("Your Grade Is E")
  }
  elseif (x >= 39); {
    console.log("Your Grade Is F")
  }

} 

grade(90) */


function integer(x) {
  if (x > 0) {
    console.log("The number is positive")
  }
  else if (x < 0) {
    console.log("The number is negative")
  }
  else if (x === 0)
    console.log("The number is 0")
}

integer(3)

function multiplicationtable() {
  for (let i = 0; i <= (number); i++) {}
}



function sumFromOneToN(n) {
  let sum = 0
  for (let i = 0; i <= n; i++)
    sum += i



}

sumFromOneToN(3)
sumFromOneToN(4)
 function factorsOf(){
   for (let i = 0; i <= n; i++) {
        if(n % i == 0) {
          console.log(i)}
        
        }

  } 
  


function primeNumber(x) {
  let count = 0
  for (let i = 0; i < x; i++) {
    if (x % i === 0) {
      count += 1
    } 
  }
}


 function anglesOfTriangle(a, b, c) {
  if (a + b + c === 180) {
    console.log("The Angles Are Valid")}
    else
      console.log("The angles are not valid")
  }

  anglesOfTriangle(60, 60, 60) 


function areaOfCircle(radius){
  let area = 3.142 * (radius ** 2)
  console.log(area)
}

areaOfCircle(5)


function factorsOf(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log(i)
    }
  }
  console.log("=============")
}

function isPrime(n){
  let count = 0
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      count += 1
    }
  }
}

function multiplicationtable(number) {
  for (let i = 0; i <= number; i++) {
    console.log(number, "*", i, "=", number * i)
  }
  console.log
}

multiplicationtable(10)