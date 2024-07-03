// function saymyname(){
//     console.log("k");
//     console.log("a");
//     console.log("n");
//     console.log("s");
//     console.log("a");
//     console.log("g");
//     console.log("a");
//     console.log("r");
//     console.log("a");
// }
// saymyname()

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2);
// }

// function addTwoNumber(number1, number2) {
// //    let result= number1 + number2
// //    return result 
// return number1 + number2
// }

// const result = addTwoNumber(3, 4)

// console.log("result :",result);

// function logInUserMassage(username1) {
//     if (username1 === undefined) {
//         console.log("plase enter a username");
//         return
//     }
//     return `${username1} just logged In`;
// }

// console.log(logInUserMassage("darshan"));
// console.log(logInUserMassage());  // ans undifiend

function logInUserMassage(username = "sam") {
    if (!username) {
        // console.log("plase enter a username");
        // return
    }
    return `${username} just logged In`
}

// console.log(logInUserMassage("darshan"));
// console.log(logInUserMassage("yash"));  // ans undifiend


// function calculateCartPrice (val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 600, 2000));

// const user ={
//     username: "yash",
//     price: 199
// }

// function handleObejct(anyobject){
//     console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
// }

// // handleObejct(user)
// handleObejct({
//     username: "raj",
//     price: 300
// })

const myNewArray =[200, 400, 600, 100]

function returnSecondValue (getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));