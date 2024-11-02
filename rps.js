let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msge = document.querySelector("#msg");


const gencompchoice = () =>{
    const options = ["rock", "paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options [randidx];
}

const drawgame = () =>{
    console.log("game was drew");
    msg.innertext ="game was drew";
}

const showwinner = (userwin) =>{
    if (userwin) {
        console.log("you win!");
        msge.innertext = "you win!"
    } else {
        console.log("you lose");
        msge.innertext = "you lose";
        
    }
}
const playgame = (userchoice)=>{
  console.log("user choice",userchoice);
  //generate computer choice
   const compchice =gencompchoice();
    console.log("comp choice",compchice);

    if (userchoice === compchice) {
        //draw game

    } else {
        let userwin = true;
        if(userwin === "rock"){
             //scissor , paper 
        userwin = compchice === "paper" ? false : true;
        }else if (userwin === "paper"){
            //rock,scissor
           userwin = compchice === "scissor" ? false : true;
        }else{
            //rock,paper
            userwin=compchice=== "rock" ? false : true;
        }
       showwinner(userwin);
    }
      
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    })
});