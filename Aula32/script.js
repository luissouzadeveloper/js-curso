function mudaCor(obj, cor){
    obj.style.backgroundColor = cor; 
}

function mudaPosicao(obj){
    obj.style.position = 'absolute';
    obj.style.left = Math.random() * 500 + 'px';
    obj.style.top = Math.random() * 500 + 'px';
}

function ola(){
    var data = new Date();
    var hora = data.getHours();
    var texto = '';
    if(hora < 12){
        texto = 'Bom dia';
    } else 
        if(hora < 18){
            texto = 'Boa Tarde';
        } else {
            texto = 'Boa Noite';
        }

        alert(`Olá ${texto}`);
}