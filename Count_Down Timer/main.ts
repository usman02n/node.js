import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns"




let res = await inquirer.prompt({
    type:"input",
    name:"userInput",
    message:"please enter the amount of second",
    validate:(input)=>{
        if(isNaN(input)){
            console.log("please Enter Valid Number")
        }else if(input >60){
            return "seconds must be in seconds"
        }else{
            return true;
        }
    }
})

let input =res.userInput

function startTime(val:number){
    const intTime = new Date(). setSeconds(new Date().getSeconds() + val)
const intervalTime = new Date(intTime)
    setInterval(() => {
        const currentTime = new Date()  
        const timeDiff = differenceInSeconds(intervalTime , currentTime)
        if(timeDiff <= 0){
            console.log("timer has expired")
            process.exit();
        }
            const min = Math.floor((timeDiff%(3600*24))/3600)
            const sec = Math.floor(timeDiff % 60)
            console.log(`${min.toString().padStart(2 , "0")}:${sec.toString().padStart(2 , "0")}`)
        
    },1000)
}

const intTime = new Date(). setSeconds(new Date().getSeconds() + 1)
const intervalTime = new Date(intTime)
// const date = new Date();
// console.log(date)
// console.log("initialTime" + intervalTime)

startTime(input)

