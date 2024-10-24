// Function to multiply two numbers
function multiplication(x, y) {
    return x * y;
}

// Recursive function to calculate factorial
function recursiveFunction(a) {
    if (a <= 1) {
        return 1;
    } else {
        return a * recursiveFunction(a - 1);
    }
}

// Splits string into array
function splitText() {
    let text = "Welcome to my PLP project"
    const textArray = text.split(" ");
    return textArray

}


// Call functions and assign values
let multiplicationAnswer = multiplication(4, 6);
let recursiveFunctionAnswer = recursiveFunction(5);
let textArrayResult = splitText();


// Print Results
console.log("Multiplication Result:", multiplicationAnswer); 
console.log("Factorial Result:", recursiveFunctionAnswer);
console.log("Text split into an array:", textArrayResult);
