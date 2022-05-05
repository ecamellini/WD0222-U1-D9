console.log("\n-------------FUNCTIONS------------\n")

// Suppose we want to greet our user.

console.log("Hello John Doe, welcome to my website.")

console.log("Hello Paul Smith, welcome to my website.")

// CONVENTION: when you name a function, use an imperative verb.
// A verb describing what the functio does. It's you give an order to JS -- please execute this.

function sayHello(name, surname) { // This function takes 2 parameters, but you can declare functions wiht how many parameters you want
  // This is the code that is going to be executed when we call the function.

  // Inside the function, the parameters are just values that we can use.
  // They're like variables, but only available here...

  console.log("Hello", name, surname, "welcome to my website.")
}


// Let's try to use this function...
sayHello("Super", "Mario")
sayHello("Cristiano", "Ronaldo")
sayHello("Lionel", "Messi")
sayHello("Barack", "Obama")


// Let's say that we want to define a function that
// 1) Given a value representig the age of a person
// 2) It will tell if the person is overage (>=18) or not
//    by returning a boolean: true if overage, false if underage

function tellMeIfOverage(age) {// We call the only parameter we need "age"
  if (age >= 18) {
    return true;
    // return stops the execution of the function
    // it takes the value you give it, return it, stop.
  }

  return false;
}

console.log("\n----------RETURNING A VALUE---------")

let result = tellMeIfOverage(20) // The result should be true
result = tellMeIfOverage(17) // The result should be false

if(tellMeIfOverage(19) === true) {
  console.log("Congrats you can access the website!")
} else {
  console.log("You cannot access the website.")
  console.log("To open a bank account you need to be more than 18 years old.")
}


console.log("\n-------------RETURNING AN OBJECT-------------\n")

// Example of a function that returns more than one value
function getUserInfo() { // This function will return the name & surname of the user

  console.log("Getting user information...") // We don't know how to do it
  return {
    name: "The Name",
    surname: "The Surname"
  }
}

let userInfo = getUserInfo()
console.log(userInfo.name)
console.log(userInfo.surname)
