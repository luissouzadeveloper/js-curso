var pontos = 75;
var energia = 30;
// Vitoria = >= 30 && <= 40 || >= 70 && <= 80
    
if (pontos >= 30 && pontos <= 40 && energia >= 40 || pontos >= 70 && pontos <= 80 && energia >= 40) {
    document.write('O jogador é vitorioso!');
} else {
    document.write('O jogador não venceu!');
}