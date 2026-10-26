let cars = ["benz", "bmw", "honda", "suzuki", "toyota", "audi", "volvo", "lexus"]

console.log(cars[0])

let car1 = cars[0]

cars[1] = "mazda"

console.log(cars[cars.length])

console.log(cars.sort())

let ages = [5, 2, 3, 1, 4]
console.log(ages.sort())
console.log(cars.indexOf("honda"))
console.log(cars[cars.length - 1])

function LastValueArray(array){
    return array[array.length - 1]
}

let value = ["benz", "bmw", "honda", "suzuki", "toyota", "audi", "volvo", "lexus"]

console.log(value)
console.log(LastValueArray(value))


for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log("A car:", element)
}

cars.push("mazda")
console.log(cars)