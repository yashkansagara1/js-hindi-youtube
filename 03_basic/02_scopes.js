// var c =300
let a = 300 

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER :", a);
}

// console.log(a);
// console.log(b);


function one(){
    const userName ="yash";

    function two(){
        const website ="youtube"
        console.log(userName);
    }

    two()
    // console.log(website);
}

// one()


if(true){
    const username = "yash"
    if(username === "yash"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++interesting++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num){
    return num + 2
}
