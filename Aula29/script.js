// CONSTANTES
const pi = Math.PI;

document.write('Número PI: ' + pi + '<br>'); 

const euler = Math.E;

document.write('Número de euler: ' + euler + '<br>');

const raizq = Math.SQRT1_2;
document.write('Raiz quadrada: ' + raizq + '<br>');

// MÉTODOS

var numeroabs = Math.abs(-10);

document.write(`Número absoluto: ${numeroabs} <br>`);

var arredondarCima = Math.ceil(10.75);

document.write(`Arredondamento para cima: ${arredondarCima} <br>`);

var arredondarBaixo = Math.floor(10.75);

document.write(`Arredondamento para baixo: ${arredondarBaixo} <br>`);

var numElevado = Math.pow(5, 2);

document.write(`Número elevado: ${numElevado} <br>`);

var numAleatorio = Math.random()*60;

for(var i = 0; i < 6; i++){
    document.write(`Valor aleatório: ${numAleatorio.toFixed(0)} <br>`);
}

var sen, cos, tan;

sen = Math.sin(90 * Math.PI / 180);
cos = Math.cos(90);
tan = Math.tan(90);

document.write(`Seno: ${sen} <br> Coseno: ${cos} <br> Tangente: ${tan} <br>`);

var arrayMax = Math.max(1, 2, 3, 4, 5);
var arrayMin = Math.min(1, 2, 3, 4, 5);

document.write(`Máximo: ${arrayMax} <br> Mínimo: ${arrayMin} <br>`);