var cont;

for(cont = 0; cont < 10; cont++){
    document.write('CSS3 <br><br>');
}

// Trabalhando o for com arrays

var num = [], contador;

for(contador = 0; contador < 5; contador++){
    num.push(prompt('Digite valores: '));
}

for(contador = 0; contador < 5; contador++){
    document.write(num[contador] + '<br><br>');
}

// Trabalhando o for com matrizes

var mochila = [
    ['corda', 1],
    ['Cura', 10],
    ['Lanterna', 1],
    ['Pilhas', 20]
];

for(var linha = 0; linha < 4; linha++){
    for(var coluna = 0; coluna < 2; coluna++){
        document.write(mochila[linha][coluna] + ' ');
    }
    document.write('<br>');
}

console.table(mochila)

