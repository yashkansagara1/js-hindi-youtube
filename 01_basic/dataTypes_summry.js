// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scrreValue = 100.3

const isLoggedId = false
const outSideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 51454517247147821414n

// Reference (Non-primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"] //Array

let myObj = {    //Object
    name: "yash",
    age: 27,
}

const myFunction = function () {
    console.log("hello World");
}


console.log(typeof(bigNumber) )