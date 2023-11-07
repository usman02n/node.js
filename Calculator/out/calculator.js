import { Sum } from './add.js';
import { Sub } from './sub.js';
import { Mult } from './mult.js';
import { Div } from './Div.js';
import inquirer from 'inquirer';
let answer = await inquirer.prompt([
    {
        message: "Enter first vlue",
        type: "number",
        name: "firtValue"
    },
    {
        message: "Enter second vlue",
        type: "number",
        name: "secondValue"
    },
    {
        message: "Select Yur Operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Miltiply", "Divide"],
        name: "opertors"
    },
]);
if (answer.opertors === "+") {
    let result1 = Sum(answer.firtValue, answer.secondValue);
    console.log(result1);
}
else if (answer.opertors === "-") {
    let result2 = Sub(answer.firtValue, answer.secondValue);
    console.log(result2);
}
else if (answer.opertors === "*") {
    let result3 = Mult(answer.firtValue, answer.secondValue);
    console.log(result3);
}
else if (answer.opertors === "/") {
    let result4 = Div(answer.firtValue, answer.secondValue);
    console.log(result4);
}
else {
    console.log("your operation not found");
}
