// const tinderUser =new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "rahul"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "same@gmail.com",
    fullName: {
        userFullName: {
            firstName: "yash",
            lastName: "patel"
        }
    }
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}

// const  obj3 ={
//     obj1, obj2
// }

// const obj3 = Object.assign({} , obj1, obj2)

const obj3 ={ ...obj1, ...obj2}
// console.log(obj3);

const user =[
    {
        id : 1,
        email: "y@google.com"
    },
    {
        id : 1,
        email: "y@google.com"
    },
    {
        id : 1,
        email: "y@google.com"
    },
    {
        id : 1,
        email: "y@google.com"
    },
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"yash"
}

// course.courseInstructor

const{courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name":"yash",
//     "coursename":"js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]