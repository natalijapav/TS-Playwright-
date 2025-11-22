//Objects and arrays

var customer = {
    firstName: 'Mary',
    lastName: 'Smith',
    cars: ["volvo", "Toyota", "Citroen"]
}
console.log(customer)
console.log(customer.firstName)

//Dot notation
customer.firstName = 'Jane'
console.log(customer)

console.log(`${customer.firstName} ${customer.lastName}`)

//Array
var car = ["volvo", "Toyota", "Citroen"]
car[1]="BMW"
console.log(car[2])

console.log(customer.cars[2])
