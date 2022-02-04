/*Funções do array
    1- push -> Adiciona o elemento na última posição.

    2- unshift -> Adiciona o elemento na primeira posição.

    3- pop -> Remove o último elemento do array.

    4- shift -> Remove o primeiro elemento do array.

    5- splice -> Remove mais de um elemento.
*/

var mochila = [];

mochila.push('Faca');
mochila.push('Corda');
mochila.push('Pederneira');
mochila.push('Chave');
mochila.push('Lanterna');
mochila.push('Pedra');

mochila.splice(1,1); // -> o primeiro número é o índice e o segundo a qntd de elementos a ser removido.
mochila.splice(2,1)

document.write(mochila[0] + '<br>');
document.write(mochila[1] + '<br>');
document.write(mochila[2] + '<br>');
document.write(mochila[3] + '<br>');
document.write(mochila[4] + '<br>');
document.write(mochila[5] + '<br>');