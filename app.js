// // Get user inputs using variables
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter operator (+, -, *, /):");

// let result; // Variable to store the result

// // Switch statement to perform operation
// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Error: Cannot divide by zero";
//         }
//         break;
//     default:
//         result = "Invalid operator!";
// }

// // Show the result
// alert("Result: " + result);





// let amount=(prompt("enter the real amount"))
// let cashin=(prompt("enter the cash in amount"))
// // let balance=(prompt("aap ka pas ap ina paise ha"))
 
// let youramount;

// switch(balance) {
//     case"cashin":
//     youramount ="amount-cashin"
//     break;
    
// }
// console.log(youramount);



let amount = (prompt("Enter the real amount:"));
let cashin = (prompt("Enter the cash-in amount:"));

let youramount;

switch (true) {
    case (cashin <= amount):
        youramount = amount - cashin;
        break;
    default:
        youramount = "Invalid cash-in amount!";
}

console.log("Remaining Balance: " + youramount);
