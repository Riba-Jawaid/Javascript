let userScore=0;
let compScore=0

let choices= document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");
const userSPara= document.querySelector("#user-score");
const compSPara= document.querySelector("#comp-score");

let comp=()=>
{
    let options=['rock','paper', 'scissor'];
    let optionsIdx= Math.floor(Math.random()*3);
    return options[optionsIdx];
};

let drawGame=()=>
{
    msgPara.innerText="The Game is Draw";
    msgPara.style.backgroundColor="black";
};

let showWinner=(userWin)=>{
    if(userWin)
    {
        userScore++;
        console.log("user", userScore);
        userSPara.innerText= userScore;
        msgPara.innerText="You Win!";
        msgPara.style.backgroundColor="green";
    }
    else{

        compScore++;
        compSPara.innerText= compScore;
        console.log("computer", compScore);
        msgPara.innerText="Computer Win!";
        msgPara.style.backgroundColor="orange";
    }
};

let playGame=(userChoice)=>
{
    let compChoice= comp();

    if( userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
    if (userChoice=== 'rock')
        {
            userWin= compChoice === 'paper' ? false : true;
        }
    else if (userChoice==='paper')
    {
        userWin= compChoice=== 'scissor'? false: true;
    }
    else
    {
        userWin= compChoice==='rock'? false: true;
    }
    showWinner(userWin);
    }
    
};

choices.forEach((choice)=>
{
    choice.addEventListener("click", ()=>
    {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})