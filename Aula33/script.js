window.addEventListener('load', addEventos);

function msg(){
    alert('Boa Noite');
}

function addEventos(){
    var div1 = document.getElementById('dv1');
    div1.addEventListener('click', msg);
}



