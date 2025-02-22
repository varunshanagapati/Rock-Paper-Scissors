let choices=document.querySelectorAll(".choice");
let user_points=0,comp_points=0;
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");


const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let option=Math.floor(Math.random()*3);
    return options[option];
}

const playGame=(user_Choice)=>{
    // gen computer choice
    let comp_choice=getCompChoice();
    // console.log("Computer Choice: ",comp_choice);
    if(comp_choice==user_Choice){
        // console.log("Game was Draw!");
        msg.innerText="Game was Draw!";
        msg.style.backgroundColor="darkcyan";
    }else{
        userWin=true;
        if(user_Choice=="rock"){
            // paper,scissors
            userWin= comp_choice=="paper"? false:true;
        }else if(user_Choice=="paper"){
            userWin=comp_choice=="scissors"?false:true;
        }else{
            userWin=comp_choice=="rock"?false:true;
        }
        // console.log(userWin);
        showWinner(user_Choice,comp_choice,userWin);
    }
}

const showWinner=(user_Choice,comp_choice,userWin)=>{
    if(userWin){
        user_points++;
        user_score.innerText=user_points;
        msg.innerText=`You Win! Your ${user_Choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";

    }else{
        comp_points++;
        comp_score.innerText=comp_points;
        msg.innerText=`You lost. ${user_Choice} beats your ${comp_choice}`;
        msg.style.backgroundColor="red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_Choice=choice.getAttribute("id");
        // console.log("user choice: ",user_Choice);
        playGame(user_Choice);
    })
    
});