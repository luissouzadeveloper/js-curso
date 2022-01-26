var pos, pontos;

pontos = 680;

if (pontos >= 1000) {
    pos = 1;
} else
    if (pontos >= 800) {
        pos = 2;
    } else 
        if (pontos >= 600) {
            pos = 3;
        } else {
            pos = 0;
        }

switch (pos) {
    case 1:
        document.write('Primeiro lugar. Medalha de ouro!');
        break;

    case 2:
        document.write('Segundo lugar. Medalha de prata!');
        break;

    case 3:
        document.write('Terceiro lugar. Medalha de bronze!');
        break;

    default:
        document.write('Não subirá no pódio. Não obteve medalha!')
        break;
}