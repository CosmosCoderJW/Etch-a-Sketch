let container = document.querySelector("#container");
let square;
for (let i = 0; i < 256; i++) {
    square = document.createElement("div");
    square.className = "square";
    square.style.height=`${(600/16)-1}px`;
    square.style.width=`${(600/16)-1}px`;
    container.appendChild(square);
}
function hover(e){
    e.target.style.backgroundColor= `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},
                                    ${Math.floor(Math.random() * 255)})`;
}
function mouse(){
    let squares = document.querySelectorAll(".square");
    for (square of squares){
        square.addEventListener("mouseover", hover);}
}

mouse();
let button = document.querySelector("button");
let userNumber = 0;
function inputNumber(){
    userNumber = prompt("How many squares per side of the grid do you want? Max 100");
    if (userNumber > 100)
    {userNumber = prompt("Please choose a number up to 100.")}
    while (container.hasChildNodes())
    {container.removeChild(container.firstChild);}
    createGrid(userNumber);
}
button.addEventListener("click", inputNumber);

function calcSquare(num) {
    return (600/num)-1;
}
function createGrid(num){
    for (let i = 0; i < (num*num); i++) {
        square = document.createElement("div");
        square.className = "square";
        square.style.height= `${calcSquare(userNumber)}px`;
        square.style.width= `${calcSquare(userNumber)}px`;
        container.appendChild(square);}
    mouse();
}




