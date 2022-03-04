var tagP = document.querySelectorAll('p');
tagP[0].style.color = 'blue';
tagP[0].style.fontFamily = 'Arial';

var elementoH = document.querySelectorAll('div.quadro > *');
for(var i = 0; i < elementoH.length; i++){
    elementoH[i].style.color = 'green';
}