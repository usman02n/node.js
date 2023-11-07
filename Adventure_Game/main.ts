import chalk from "chalk"
import inquirer from "inquirer";
class Player{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name
    }
fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel
}
fuelIncrease(){
    this.fuel = 100
}

}
/////////////
class Opponent{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name=name
    }
    fuelDecreased(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelgenerate(){
        let num  =Math.floor(Math.random () *50 )
        let fuel = o1.fuel + num
        this.fuel = fuel
    }
}
//////////////
let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please enter your name"
})
/////////////
let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select your oppenent",
    choices:["Skeleton","Zombie","Assassin"]
})

//////////////
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)
/////////

do{
    if (opponent.select == "Skeleton"){
  
    let ask = await inquirer.prompt({
        type:"list",
        name:"option",
        message:"Select your oppenent",
        choices:["Attack","Drink","Run For Your Life..."],
    })
    ///////
if(ask.option == "Attack"){
    let num = Math.floor(Math.random()*2)
    if (num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("you Loose, Better luck next time"))        
            process.exit()
        }
        
    }
    if (num <= 0 ){
        o1.fuelDecreased()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("you WIN"))        
        
            process.exit()
        }
        
    }

}
//////
if(ask.option == "Drink"){
    p1.fuelIncrease()
    if(o1.fuel<= 50){
        o1.fuelgenerate()
        console.log(chalk.bold.italic.red(`The enemy use regenration skill and get ${o1.fuel} healed`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    }
    console.log(chalk.bold.italic.green(`You Drink Health Potion Your Helath Is ${p1.fuel}`))
    
    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
}
///////
if(ask.option == "Run For Your Life..."){
    // console.log("Great idea! you save your life ")
    console.log(chalk.red.bold.italic("you Loose, Better luck next time"))
    process.exit()
}
};
//Zombie
if (opponent.select == "Zombie"){
  
    let ask = await inquirer.prompt({
        type:"list",
        name:"option",
        message:"Select your oppenent",
        choices:["Attack","Drink","Run For Your Life..."],
    })
    ///////
if(ask.option == "Attack"){
    let num = Math.floor(Math.random()*2)
    if (num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("you Loose, Better luck next time"))        
            process.exit()
        }
        
    }
    if (num <= 0 ){
        o1.fuelDecreased()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("you WIN"))        
        
            process.exit()
        }
        
    }

}
//////
if(ask.option == "Drink"){
    p1.fuelIncrease()
    if(o1.fuel<= 50){
        o1.fuelgenerate()
        console.log(chalk.bold.italic.red(`The enemy use regenration skill and get ${o1.fuel} healed`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    }
    console.log(chalk.bold.italic.green(`You Drink Health Potion Your Helath Is ${p1.fuel}`))
    
    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
}
///////
if(ask.option == "Run For Your Life..."){
    // console.log("Great idea! you save your life ")
    console.log(chalk.red.bold.italic("you Loose, Better luck next time"))
    process.exit()
}
};
//Assasiin
if (opponent.select == "Assassin"){
  
    let ask = await inquirer.prompt({
        type:"list",
        name:"option",
        message:"Select your oppenent",
        choices:["Attack","Drink","Run For Your Life..."],
    })
    ///////
if(ask.option == "Attack"){
    let num = Math.floor(Math.random()*2)
    if (num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("you Loose, Better luck next time"))        
            process.exit()
        }
        
    }
    if (num <= 0 ){
        o1.fuelDecreased()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("you WIN"))        
        
            process.exit()
        }
        
    }

}
//////
if(ask.option == "Drink"){
    p1.fuelIncrease()
    if(o1.fuel<= 50){
        o1.fuelgenerate()
        console.log(chalk.bold.italic.red(`The enemy use regenration skill and get ${o1.fuel} healed`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    }
    console.log(chalk.bold.italic.green(`You Drink Health Potion Your Helath Is ${p1.fuel}`))
    
    console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
    console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
}
///////
if(ask.option == "Run For Your Life..."){
    // console.log("Great idea! you save your life ")
    console.log(chalk.red.bold.italic("you Loose, Better luck next time"))
    process.exit()
}
};


}
while(true)












