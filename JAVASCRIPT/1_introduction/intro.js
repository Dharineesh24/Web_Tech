console.log("I am external javascript")


//!  how to declare variable 

//?  let , var , const

// ! let keyword

let sname = "shatish"

console.log(sname)


// let sname   

// //! re-declaration is not possible in let keyword


// !  var keyword

var age 
age = 30 

console.log(age)

var age = 40 

console.log(age)

//! re-declaration is possible in var keyword


// ! const keyword

const aadharNo = 123456789812

console.log(aadharNo)

// aadharNo = 999999999999

// console.log(aadharNo)


// const PI 

// PI= 3.14

//! in const declarion and initialization we have to do in the same line



// !   Datatypes in Js 

//?   1.  primitive    2. non-primitive 


// !  1.  number 

let phNo = 9876543210

console.log(phNo)

console.log(typeof phNo)

let salary = 20000.50

console.log(salary)
console.log(typeof salary)

// !  how to know the datatype 

// =>  by using typeof operator


// !  2.  boolean 


let isMarried = true 

console.log(isMarried)
console.log(typeof isMarried)

let hasKid = false 

console.log(typeof hasKid)


// ! 3. string 

let city = "chennai"
let state = 'tamilnadu'
let country = `India`

console.log(city)
console.log(state)
console.log(country)

console.log(typeof city)
console.log(typeof state)
console.log(typeof country)


// ! 4. undefined 

// any variable is declared but not initialized is called undefined.

let wifeName

console.log(wifeName)
console.log(typeof wifeName)

// ! 5.  null

let hasGf = null 

console.log(hasGf)
console.log(typeof hasGf)  // object 


// ! 6. bigint 

let largeNum = 2n 

console.log(largeNum)
console.log(typeof largeNum)