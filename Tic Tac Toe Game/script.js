let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-button");

let msgContain;
let newGame;
let turnO= true;
let winPatterns=[[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [3,4,5], [6,7,8], [8,5,2]];


boxes.forEach((box)=>
    {
        box.addEventListener("click", ()=>
        {
            if(turnO)
            {
                box.innerText="O";
                turnO=false;
            }
            else
            {
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();
        })
    });


let boxesDisable=()=>
    {
        for( box of boxes)
            {
                box.disabled=true;
            }
    };
        
let boxesEnable=()=>
    {
        for(box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
    };
        
let resetGame= ()=>
    {
        boxesEnable();
        turnO=true;
        msgContain.classList.add("hide");
    };
        
const showWinner= (winner)=>
{
    
    msgContain.innerHTML='<h1 id="win-msg">Winner is ${winner} Hurrah!</h2>';
    newGame.innerHTML='<button id="new-game">New Game</button>';
    
};

let checkWinner= ()=>
{
     for(let pattern of winPatterns)
     {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if( pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
               showWinner(pos1);
            }
        }
     }
};



