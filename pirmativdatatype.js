let car = "car"
console.log(car) 
car.toUpperCase()
console.log(car) 
car[0] = "b"
console.log(car) 


car = car.toUpperCase()
console.log(car) 



let cars = ["bmw", "toyota"]
console.log(cars) 
cars.push("corola")
console.log(cars) 

let car = { brand: "corola" }
car.year = 2021
console.log(car) 



let year = 2021
function getYearWithoutCovid (freeYear) {
    freeYear = 2022
    return freeYear
}

const newYear = getYearWithoutCovid(year)
console.log(year) 
console.log(newYear) 

let person = { name: "khan", status: "unemployeed" }
function getAJob (person) {
    person.status = "employeed"
    return person
}

const newPerson = getAJob(person)
console.log(person)
console.log(newPerson)