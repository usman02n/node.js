"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const apiLink = "https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple";
let fetchData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let fetchQuize = yield fetch(data);
    let res = yield fetchQuize.json();
    return res.results;
});
let data = await fetchData(apiLink);
let startQuiz = () => __awaiter(void 0, void 0, void 0, function* () {
    let score = 0;
    let name = yield inquirer_1.default.prompt({
        type: "input",
        name: "fname",
        message: "Enter your name"
    });
    for (let i = 1; i < 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = yield inquirer_1.default.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val) => val)
        });
        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(`${chalk_1.default.green.italic("Correct")}`);
        }
        else
            (console.log(`your corret answer is  ${chalk_1.default.red.italic(data[i].correct_answer)}`));
    }
    console.log(`Dear ${chalk_1.default.red.bold(name.fname)},your score  is ${chalk_1.default.green.bold(score)} Out of ${chalk_1.default.red.bold('5')}`);
});
startQuiz();
