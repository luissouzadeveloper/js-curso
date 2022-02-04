/* 
    Métodos

    IndexOf = Busca um elemento no array e retorna a posição dele.
    Concat = Junta dois arrays ou mais.
*/

var mochila = [], mochila1 = [], mochila2 = [], posicao;

mochila1.push('Faca');
mochila1.push('Corda');
mochila1.push('Pederneira');
mochila1.push('Chave');
mochila1.push('Lanterna');
mochila1.push('Pedra <br>');

mochila2.push('Arame');
mochila2.push('Luvas');
mochila2.push('Fósforo');
mochila2.push('Água');
mochila2.push('Botas');
mochila2.push('Colete <br>');

mochila = mochila1.concat(mochila2);

document.write(mochila[0] + '<br>');
document.write(mochila[1] + '<br>');
document.write(mochila[2] + '<br>');
document.write(mochila[3] + '<br>');
document.write(mochila[4] + '<br>');
document.write(mochila[5] + '<br>');
document.write(mochila[6] + '<br>');
document.write(mochila[7] + '<br>');
document.write(mochila[8] + '<br>');
document.write(mochila[9] + '<br>');
document.write(mochila[10] + '<br>');
document.write(mochila[11] + '<br>');

document.write(mochila.length + ' itens <br>');

var posicao = mochila.indexOf('Botas');

if (posicao == -1) {
    document.write('O item não encontrado no array\n\n');
} else {
    document.write('O item está no array na posição ' + posicao);
    document.write('<br><br>');
}

// Método sort(), reverse(), join()

/*var num = [2, 5, 0, 1, 7, 2 , 3];
var numeros;

num.sort();
num.reverse();

numeros = num.join();
document.write(numeros + '<br>');

document.write(num[0] + '<br>');
document.write(num[1] + '<br>');
document.write(num[2] + '<br>');
document.write(num[3] + '<br>');
document.write(num[4] + '<br>');
document.write(num[5] + '<br>');*/

