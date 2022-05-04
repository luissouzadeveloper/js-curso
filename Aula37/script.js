var dx;
var dy;
var px;
var py;
var velocidade;
var obj;
var tmp;

function inicia(){
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    velocidade = 10;
    obj = document.querySelector('#div1');
    document.addEventListener('keydown', teclaDw);
    document.addEventListener('keyup', teclaUp);
    tmp = setInterval(enterFrame, 60);
}

function teclaDw(event){
    var tecla = event.key;
    if (tecla == 'ArrowLeft') {
        dx = -1;
    } else if (tecla == 'ArrowUp') {
        dy = -1;
    } else if (tecla == 'ArrowRight') {
        dx = 1;
    } else if (tecla == 'ArrowDown') {
        dy = 1;
    }
}

function teclaUp(event){
    var tecla = event.key;
    if (tecla == 'ArrowLeft') {
        dx = 0;
    } else if (tecla == 'ArrowUp') {
        dy = 0;
    } else if (tecla == 'ArrowRight') {
        dx = 0;
    } else if (tecla == 'ArrowDown') {
        dy = 0;
    }
}

function enterFrame(){
    px += dx * velocidade;
    py += dy * velocidade;
    obj.style.left = px+'px';
    obj.style.top = py+'px';
}

window.addEventListener('load', inicia);