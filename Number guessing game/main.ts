import inquirer from "inquirer";
// const inquirer = require('inquirer');

type ansType={
    userguess:number
}

function playgame(){
const systemGenretedNumber = Math.floor(Math.random()*10)
let numberOfGuess = 0;

async function guessNumber (){
const answer:ansType = await inquirer.prompt([
    {
        type:"number",
        name:"userguess",
        message:"write yor number b/w 1 to 10"
    }
])
 
const {userguess} = answer
numberOfGuess++;



// console.log(userguess,systemGenretedNumber)

if(userguess === systemGenretedNumber){
    console.log("ypur answer is correct")
    console.log("the random number is " + systemGenretedNumber)
}
else if  (userguess>=systemGenretedNumber) {
    console.log("you are very high")
    guessNumber()
} else {
    console.log("you are very loww")
    guessNumber()
}
}
guessNumber()
}
playgame()






