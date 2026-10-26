let cars = ["Ford"]

function displayCars(){
    let carlist = document.getElementById("carList");
    carlist.innerHTML = ""
    cars.forEach((c) => {
        let div = document.createElement("div")
        let li = document.createElement("li")
        let button = document.createElement("button")
        let edit = document.createElement("button")

        button.textContent = "🗑️"
        edit.textContent = "‼️"
        
        
        button.addEventListener("click", () =>{
            cars = cars.filter((car) => car !== c)
            displayCars()
        })

        edit.addEventListener("click", () => {
            let name = prompt("Enter Your Car...")
            if (name !== "") {
                cars[cars.indexOf(c)] = name
                displayCars()
            }
        })

        li.textContent = c

        div.append(li, button, edit)
        div.style.display = "flex"

        div.style.gap = "4px"
        carlist.appendChild(div)
    })
}

displayCars()
/* 
function addCar(){
    let carInput = document.getElementById("carInput")
    cars.push(carInput.value)
    carInput.value = ""
    displayCars()
}

function clearList(){
    cars = []
    displayCars()
}

console.log(cars) */