"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_js_1 = require("./add.js");
const sub_js_1 = require("./sub.js");
const mult_js_1 = require("./mult.js");
const Div_js_1 = require("./Div.js");
const inquirer_1 = __importDefault(require("inquirer"));
let answer = await inquirer_1.default.prompt([
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
    let result1 = (0, add_js_1.Sum)(answer.firtValue, answer.secondValue);
    console.log(result1);
}
else if (answer.opertors === "-") {
    let result2 = (0, sub_js_1.Sub)(answer.firtValue, answer.secondValue);
    console.log(result2);
}
else if (answer.opertors === "*") {
    let result3 = (0, mult_js_1.Mult)(answer.firtValue, answer.secondValue);
    console.log(result3);
}
else if (answer.opertors === "/") {
    let result4 = (0, Div_js_1.Div)(answer.firtValue, answer.secondValue);
    console.log(result4);
}
else {
    console.log("your operation not found");
}
