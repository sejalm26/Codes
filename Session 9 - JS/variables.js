 // Different ways to declare variables
var oldWay = "I’m using var but its old way to declare variables";
let modernWay = "I’m using let which is modern way to declare variables";
const constantValue = "I never change my value!";

console.log(oldWay);
console.log(modernWay);
console.log(constantValue);

// Updating variables
 oldWay = "Updated var";
 modernWay = "Updated let";
 // constantValue = "Can’t do this!"; // This would cause an error

 //Scope Demonstration

 function scopeExample() {
    var varVariable = "I am function scoped (var) and accessible anywhere in this function";

    if (true){
        var varInBlock = "Var: I am still function scoped and accessible in this function and block";
        let letInBlock = "Let: I am block scoped and only accessible in this block";
        const constInBlock = "Const: I am block scoped and only accessible in this block";
        console.log(varInBlock);
        console.log(letInBlock);
        console.log(constInBlock);
    }
    console.log(varVariable);
    console.log(varInBlock); // Accessible
    // console.log(letInBlock); // Error: not accessible
    // console.log(constInBlock); // Error: not accessible
 }

 //Practice Questions
 //1 Student Grade Calculator Create variables to store student in formation and calculate final grade.
 // Use appropriate variable declarations
 // Calculate final grade from assignments, midterm, and final exam Sample Input: Assignments: 85, Midterm: 78, Final: 92, Weights: 40%, 30%, 30% Expected Output: Final Grade: 85.1

let assignments = 85;
let midterm = 78;
let final = 92;
let weights = [0.4, 0.3, 0.3];

let finalGrade = (assignments * weights[0]) + (midterm * weights[1]) + (final * weights[2]);
console.log("\n1.Student Grade Calculator:");
console.log("Final Grade: " + finalGrade.toFixed(1));

//2  E-commerce Cart Manage shopping cart items with different variable types. Sample Input: Item: ”Laptop”, Price: 999.99, Quantity: 1, Tax Rate: 8.5%

let item = "Laptop";
let price = 999.99;
let quantity = 1;
let taxRate = 0.085;

let totalCost = (price * quantity) * (1 + taxRate);
console.log("\n2.E-commerce Cart:");
console.log("Total Cost: $" + totalCost.toFixed(2));

//3 Temperature Converter Convert temperatures between Celsius and Fahrenheit. Sample Input: Celsius: 25°C Expected Output: Fahrenheit: 77°F

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("\n3.Temperature Converter:");
console.log(celsius + "°C is " + fahrenheit.toFixed(1) + "°F");

//4 Bank Account Manager Track account balance with deposits and withdrawals. Sample Input: Initial Balance: 1000, Deposit: 250, Withdrawal: 100

let initialBalance = 1000;
let deposit = 250;
let withdrawal = 100;   

let finalBalance = initialBalance + deposit - withdrawal;
console.log("\n4.Bank Account Manager:");
console.log("Final Balance: $" + finalBalance.toFixed(2));

//5 Recipe Scaler Scale recipe ingredients based on servings. Sample Input: Original servings: 4, Desired servings: 6, Flour: 2 cups

let originalServings = 4;
let desiredServings = 6;
let flour = 2; // in cups

let scaledFlour = (flour / originalServings) * desiredServings;
console.log("\n5.Recipe Scaler:");
console.log("Flour needed for " + desiredServings + " servings: " + scaledFlour.toFixed(2) + " cups");  

//6 Fitness Tracker Calculate daily calorie burn from different activities. Sample Input: Running: 30 min (10 cal/min), Walking: 45 min (5 cal/min)

let runningTime = 30; // in minutes
let runningCalPerMin = 10;
let walkingTime = 45; // in minutes
let walkingCalPerMin = 5;

let totalCaloriesBurned = (runningTime * runningCalPerMin) + (walkingTime * walkingCalPerMin);
console.log("\n6.Fitness Tracker:");
console.log("Total Calories Burned: " + totalCaloriesBurned + " cal");

//7 Movie Rating System Calculate average movie rating from multiple reviews. Sample Input: Reviews: [4.5, 3.8, 4.2, 4.7, 3.9]

let reviews = [4.5, 3.8, 4.2, 4.7, 3.9];
let sumReviews = 0; 
for (let i = 0; i < reviews.length; i++) {
    sumReviews += reviews[i];
}

let averageRating = sumReviews / reviews.length;
console.log("\n7.Movie Rating System:");
console.log("Average Rating: " + averageRating.toFixed(2)); 

