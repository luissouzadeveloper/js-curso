// Função simples
function escreve(){
    document.write('Curso de JavaScript CFB - Cursos <br>');
}

escreve();

// Função com parâmetros
function soma(n1, n2){
    let res = n1 + n2;
    document.write(`A soma é ${res} <br>`);

}

soma(10, 5);
soma(4, 5);
soma(10, 90);

// Função com parâmetros e retorno
function multiplicacao(num1, num2){
    let resultado = num1 * num2;
    return resultado
}

document.write(multiplicacao(5, 5));


var array = new Array(10, 2, 7, 5, 12, 15, 20);
function media(numeros){
    var tamN = numeros.length;
    var soma = 0;

    for(var i = 0; i < tamN; i++){
        soma += numeros[i];
    }
    return Math.round(soma / tamN);
}

document.write(media(array));