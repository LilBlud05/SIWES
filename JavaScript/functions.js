function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}


function max(num1, num2) {
    if (num1 > num2) {
        return num1 
    } else {
        return num2
    }
}

function greeter(name) {
    return "Hello " + name;
}

let total = sum(3,5);
console.log("Total:", total);

let maximumNum = max(3,5);
console.log("Maximum Number:", maximumNum);

let greeting = greeter("John");
console.log(greeting)

function sumOfAngles(angle1, angle2, angle3) {
    let sum = angle1 + angle2 + angle3;
    console.log(sumOfAngles)
    return sum
}

let Total = (30, 50, 50);
console.log("Total:", Total)