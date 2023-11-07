"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Type your sentencs here:  "
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(`your total words in sentence are ${words.length}`);
