console.log("\n=== CLOSURE WITH REGULAR FUNCTION ===");

function createCounter(start) {

  let count = start;

  return function () {

    console.log("Current count:", count);

    count++;

  };

}

const counter1 = createCounter(5);

counter1();

counter1();

counter1();

// The inner function remembers the value of count

// even after createCounter has finished running.

console.log("\n=== CLOSURE WITH ARROW FUNCTION ===");

function createArrowCounter(start) {

  let count = start;

  return () => {

    console.log("Current count:", count);

    count++;

  };

}

const counter2 = createArrowCounter(10);

counter2();

counter2();

counter2();

// Arrow functions also create closures.

// In this example, behavior is the same because

// both functions remember the outer variable
