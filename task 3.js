console.log("\n=== DEFAULT PARAMETERS ===");

function greetUser(name = "Guest") {

  console.log(`Hello, ${name}!`);

}

greetUser();

greetUser("Anna");

console.log("\n=== this WITH REGULAR FUNCTION ===");

const user1 = {

  name: "Mika",

  sayHi: function () {

    console.log("Hi from regular function:", this.name);

  },

};

user1.sayHi();

console.log("\n=== this WITH ARROW FUNCTION ===");

const user2 = {

  name: "Yuki",

  // Arrow functions do NOT have their own this

  // They inherit this from surrounding scope

  sayHi: () => {

    console.log("Hi from arrow function:", this.name);

  },

};

user2.sayHi();

// In browsers this may print undefined
// because arrow functions don't bind to the object.

console.log("\n=== var SCOPE ===");

for (var i = 0; i < 3; i++) {

  console.log("Inside loop with var:", i);

}

// var is function-scoped
// Still accessible outside the loop

console.log("Outside loop with var:",
console.log("\n=== let SCOPE ===");

for (let j = 0; j < 3; j++) {

  console.log("Inside loop with let:", j);

}

try {

  console.log("Outside loop with let:", j);

} catch (error) {

  console.log("Error:", error.message);

}

