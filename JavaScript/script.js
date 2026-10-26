let count = 0

function incrementCounter(){
    const counter = document.getElementById("counter")
    count += 1
    counter.textContent = count

}

function decrementCounter(){
    const counter = document.getElementById("counter")
    count -= 1
    counter.textContent = count
}

function resetCounter(){
    const counter = document.getElementById("counter")
    count = 0
    counter.textContent = count
}



/* let count = 0
let counter = document.getElementById("add")
let incrementButton = document.getElementById("increment")

incrementButton.addEventListener("click", () => {
    count += 1
    counter.textContent = count
})
 */

