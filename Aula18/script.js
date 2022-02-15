var cont, num = [];


for(cont = 0; cont < 5; cont++){ // <- O cont começa em 0 e enquanto ele for menor que 100, ele executará a tarefa até o 99.
    num.push(prompt('Informe números: '));
}

for(cont = 0; cont < 5; cont++){ // <- O cont começa em 0 e enquanto ele for menor que 100, ele executará a tarefa até o 99.
    document.write(num[cont] + ' <br>');
}