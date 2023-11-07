import inquirer from "inquirer";
 let todos:string[]=[];
 let loop = true;

 while(loop){
    const answer:{
        TODO:string,
        addmore:boolean
    } =await inquirer.prompt([
        {
            type :"input",
            name:"TODO",
            message:"What do yu want to add todo?"
        },
        {
            type:"confirm",
            name:"addmore",
            message:"Do you want to add more todo?",
            default:false,
        },      
    ])
    const {TODO,addmore} = answer
    
    loop=addmore
    if(TODO){
        todos.push(TODO)
    }  else(
        console.log("kindly enter valid value")
        
    )
 }


if(todos.length > 0){
    console.log("ypur todo list:");
        console.log(todos)
        
    }else(
    console.log("No todos found!")
    
)

















