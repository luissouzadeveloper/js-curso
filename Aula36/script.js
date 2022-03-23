var eixoX = 0;
var eixoY = 0;

function move(){
    var caixa = document.querySelector('#dv1');
    var tecla = event.keyCode;
    // Teclas direcionais códigos = 37 - esquerda, 38 - cima, 39 - direita e 40 - baixo

    if (tecla == 37) {
        eixoX -= 10;
        caixa.style.left = eixoX + 'px'
    } else if (tecla == 38) {
        eixoY -=10;
        caixa.style.top = eixoY + 'px'
    } else if(tecla == 39){
        eixoX += 10;
        caixa.style.left = eixoX + 'px'
    } else if (tecla == 40) {
        eixoY += 10;
        caixa.style.top = eixoY + 'px'
    } else if(tecla == 13){
        obj.style.backgroundColor = 'white';
        alert('Evento removido');
        document.removeEventListener('keydown', move);
    } 
}
function addClick(){
    document.addEventListener('keydown', move); 
    obj.style.backgroundColor = 'red'
}

function iniciar(){
    obj = document.querySelector('#dv1');
    obj.addEventListener('click', addClick)
}

window.addEventListener('load', iniciar)
