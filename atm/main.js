"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter your ID"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Enter your PIN"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Enter your PIN"
    },
    {
        type: "list",
        name: "AcountType",
        choices: ["Current", "Saving"],
        message: "Select your acount type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["FastCash", "Withdrawl"],
        message: "Select your Transiction",
        when(answers) {
            return answers.AcountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "FastCash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Select your amount",
        when(answers) {
            return answers.transactionType = "Withdrawl";
        },
    }
]);
if (answer.userID && answer.userPIN) {
    const balance = Math.floor(Math.random() * 300, m, d00);
    console.log("Your Acount balance is", balance);
    const EnterAmount = answer.amount;
    if (balance >= EnterAmount) {
        const remianing = balance - EnterAmount;
        console.log("Your remaining balance is ", remianing);
    }
    else {
        console.log("your balance is insuficient ");
    }
}
