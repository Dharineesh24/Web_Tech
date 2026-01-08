// var a=10
// console.log(a);

// var a=100
// console.log(a);

// let b=20
// let b=200
// let b=300 not possible

// let b=20
//     b=200 //possible
// console.log(b);


// let d=300
//     d=400 //possible
// console.log(d);


// const c=300
//       c=400 //not possible/


// var a; //possible
// console.log(a);

// let b; //possible
// console.log(b);

// // const c; //not possible
// const c


//scope
//1.global scope
//2.block scope
//3.local scope or function scope

//global scope
var x=100 
let y=200
const z=300 
console.log("This is global scope");
console.log(x,y,z);





//block scope
{
    var a=10
    let b=20
    const c=30
    console.log("This is block scope");
    console.log(x,y,z);
    console.log(a,b,c);
}

console.log("Outside block scope");
console.log(a);





//local scope or function scope
function f1(){
    var d=1000
    let e=2000
    const f=3000
    console.log("This is function scope");
    console.log(d,e,f);
    console.log(x,y,z);
}
f1();

console.log("Outside function scope");
console.log(d);



