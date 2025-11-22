//Logical "AND "
console.log(true&&true) 

//OR
console.log(true || false) //any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true
var isUsCit = false

var eligibilityForDriversLicence = ageIsMoreThanEighteen || isUsCit
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicence)

//NOT
console.log(!true)
console.log(6!==10)