// Immediately Inovoked Function Expressions [ IIFE ]

// function chai (){
//     console.log(`DB CONNECTED`);
// }

// chai()

(function chai() {

    //name IIFE
    console.log(`DB CONNECTED`);
})();

(function aurcoue(){
    console.log(`DB CONNECTED TWO`);
})();

((name) =>{
    console.log(`DB CONNECTED THREE ${name}`);
})('yash');