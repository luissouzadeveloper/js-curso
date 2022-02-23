var num; // Max 10

try {
    num = prompt('Informe um valor: ');
    if(num > 10){
        throw new Error('Valor inválido <br>');
    }  
} catch (e) {
    console.log('Erro: ' + e.message + '<br>');
    num = 10; 
} finally{
    document.write('Valor: ' + num);
}