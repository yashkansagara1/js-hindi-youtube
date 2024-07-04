const user = {
    username: "yash",
    price: 999,

    Welcomemessage: function () {
        // console.log(`${this.username} , Welcome to website`);
        // console.log(this);
    }

}

// user.Welcomemessage()
// user.username = "sam"
// user.Welcomemessage()

// console.log(this)

// function chai(){
// let username = "yash"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "yash"
//     console.log(this.username);
// }
// chai()


// Arrow function

// const chai =  () => {      
//     let username = "yash"
//     console.log(this);
// }
// chai()


// const addTwo =(num1, num2)=>{
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// const addTwo =(num1, num2)=>  num1 + num2

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "yash"})

console.log(addTwo(3, 4));