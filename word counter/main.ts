import { log } from "console";
import inquirer from "inquirer";
const answer:{
    sentence:string
} = await inquirer.prompt([
    
    {
    name : "sentence",
    type: "input",
    message: "Type your sentencs here:  " 
}
])

const words = answer.sentence.trim().split(" ");

console.log(`your total words in sentence are ${words.length}`);





