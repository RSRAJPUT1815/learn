let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGane = () => {
    let turnO = true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
            box.style.color = "#2b9482"
        }else{
            box.innerText = "X";
            turnO = true;
            box.style.color ="#b3941b"
        }
        box.disabled = true ;

        chackWinner();
    })
})

const enableBoxes = () => {
    for(let box of boxes ){
        box.disabled = false ;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
};
const disableBoxes = () => {
    for(let box of boxes ){
        box.disabled = true ;
    }
};

const showWinner =  (winner) => {
    msg.innerText = `winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const chackWinner = () => {
    for (let pattern of winPattern) {
        let post1Val = boxes[pattern[0]].innerText
        let post2Val = boxes[pattern[1]].innerText
        let post3Val = boxes[pattern[2]].innerText

        if(post1Val != ""&& post2Val !="" && post3Val !="") {
                if(post1Val === post2Val && post2Val === post3Val) {
                    showWinner(post1Val)

                }
        }
    }
};



newGameBtn.addEventListener("click",resetGane)

resetBtn.addEventListener("click",resetGane)