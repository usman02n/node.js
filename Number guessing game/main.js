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
const inquirer_1 = __importDefault(require("inquirer"));
function playgame() {
    const systemGenretedNumber = Math.floor(Math.random() * 10);
    let numberOfGuess = 0;
    function guessNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            const answer = yield inquirer_1.default.prompt([
                {
                    type: "number",
                    name: "userguess",
                    message: "write yor number b/w 1 to 10"
                }
            ]);
            const { userguess } = answer;
            numberOfGuess++;
            // console.log(userguess,systemGenretedNumber)
            if (userguess === systemGenretedNumber) {
                console.log("ypur answer is correct");
                console.log("the random number is " + systemGenretedNumber);
            }
            else if (userguess >= systemGenretedNumber) {
                console.log("you are very high");
                guessNumber();
            }
            else {
                console.log("you are very loww");
                guessNumber();
            }
        });
    }
    guessNumber();
}
playgame();
