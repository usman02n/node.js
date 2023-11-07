"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50,
    },
    "GBP": {
        "GBP": 1,
        "USD": 1.21,
        "PKR": 271.79,
    }
};
const answer = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: ",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency: ",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount: ",
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your converson from ${from} to ${to} is ${result}`);
}
else
    (console.log("invalid input!"));
