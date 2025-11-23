//Loops

//for(statement1; statement2; statement3){

//}


//For loop

for(let i=0; i<5; i=i+1){
    console.log('Hello world')
}

var cars = ["volvo", "Toyota", "Citroen"]
//for of loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})