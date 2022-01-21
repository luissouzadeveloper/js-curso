var nota = 60;

if (nota > 100) {
    document.write('Nota inválida')
} else
    if (nota <= 100) {
    document.write('Aprovado');
} else
    if (nota >= 40) {
        document.write('Recuperação');
        
    } else {
        document.write('Reprovado');
    }