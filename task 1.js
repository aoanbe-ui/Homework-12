console.log("=== HOISTING TEST BEFORE DEFINITIONS ===");

try {
  // getCalculation is a function declaration
  // Function declarations are hoisted completely,
  // so this function can be called before it appears in the code.
  console.log(getCalculation("area")("circle", 10));
} catch (error) {
  console.log("Error:", error.message);
}

try {
  // calculatePerimeter is a function expression assigned to const
  // const variables are hoisted BUT remain in the Temporal Dead Zone
  // until initialization, so this causes an error.
  console.log(getCalculation("perimeter")("square", 5));
} catch (error) {
  console.log("Error:", error.message);
}

// Bonus: checking availability before definitions
console.log("\n=== TYPEOF CHECKS BEFORE DEFINITIONS ===");

console.log("typeof calculateArea:", typeof calculateArea);

try {
  console.log("typeof calculatePerimeter:", typeof calculatePerimeter);
} catch (error) {
  console.log("calculatePerimeter is not accessible yet");
}

console.log("typeof getCalculation:", typeof getCalculation);


function calculateArea(shape, value) {
  if (shape === "circle") {
    return Math.PI * value * value;
  }

  if (shape === "square") {
    return value * value;
  }

  return "Unknown shape";
}

// ==========================================
// Function Expression
// NOT fully hoisted
// ==========================================

const calculatePerimeter = function (shape, value) {
  if (shape === "circle") {
    return 2 * Math.PI * value;
  }

  if (shape === "square") {
    return 4 * value;
  }

  return "Unknown shape";
};

// ==========================================
// Higher-Order Function
// Returns another function
// ==========================================

function getCalculation(type) {
  if (type === "area") {
    return calculateArea;
  }

  if (type === "perimeter") {
    return calculatePerimeter;
  }

  return function () {
    return "Invalid calculation type";
  };
}

// ==========================================
// Calls AFTER definitions
// ==========================================

console.log("\n=== AFTER DEFINITIONS ===");

console.log(
  "Area of circle:",
  getCalculation("area")("circle", 10)
);

console.log(
  "Perimeter of square:",
  getCalculation("perimeter")("square", 5)
);

// Bonus typeof checks after definitions
console.log("\n=== TYPEOF CHECKS AFTER DEFINITIONS ===");

console.log("typeof calculateArea:", typeof calculateArea);
console.log("typeof calculatePerimeter:", typeof calculatePerimeter);
console.log("typeof getCalculation:", typeof getCalculation);
