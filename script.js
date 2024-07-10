console.log("Welcome to Tic Tac Toe");

let turn = "X"
let isgameOver=false;
const changeTurn=()=>{
    return turn === "X"?"0": "X"
}

// function to check for a win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameOver=true;
        }
    })
}


//  game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            // audioTurn.play();
            checkWin();
            if(!isgameOver){

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// for reset
reset.addEventListener('click',()=>{
    let boxtextes=document.querySelectorAll('.boxtext');
    Array.from(boxtextes).forEach(element=>{
        element.innerText = ""
    });
    turn = "X"
    isgameOver=false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    
})