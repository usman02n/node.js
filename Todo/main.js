"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do yu want to add todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false,
        },
    ]);
    const { TODO, addmore } = answer;
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else
        (console.log("kindly enter valid value"));
}
if (todos.length > 0) {
    console.log("ypur todo list:");
    console.log(todos);
}
else
    (console.log("No todos found!"));
