var tmp;
var obj;

function mudaCor(){
    obj = document.querySelector('#dv1');
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    obj.style.backgroundColor = 'rgb('+ red +', '+ green +', '+ blue +')';
}

function iniciar(){
    tmp = setInterval(mudaCor, 1000);
}

function parar(){
    clearInterval(tmp);
    obj.style.backgroundColor = 'white'
}

function addEventos(){
    var inicio = document.querySelector('#btn1');
    inicio.addEventListener('click', iniciar);
    var para = document.querySelector('#btn2');
    para.addEventListener('click', parar);
}

//var tmp = setTimeout(mudaCor, 1000); <- chama uma vez
window.addEventListener('load', addEventos);