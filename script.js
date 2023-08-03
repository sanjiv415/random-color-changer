let btn = document.getElementById("btn");

function randomColor(){
    let number = "0123456789ABCDEF";
    let cons = '#';
    for(let i = 0; i < 6; i++){
        cons = cons + number[Math.floor(Math.random()*15)];
    }
    return cons;
}

function changeColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click",changeColor)