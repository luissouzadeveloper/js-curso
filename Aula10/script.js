var idade = 19;

if (idade >= 0 && idade < 16) {
    document.write('Você ainda não vota')
} else
    if (idade >= 16 && idade <= 17 || idade >= 70) {
        document.write('O voto é opcional')
    } else {
        document.write('O voto é obrigatório')
    }