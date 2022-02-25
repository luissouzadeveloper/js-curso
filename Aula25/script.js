var tag = document.getElementsByTagName('p');
var tagh1 = document.getElementsByTagName('h1');

for(let i = 0; i < tag.length; i++){
    tag[i].style.color = 'green';
}

tagh1[0].innerHTML = 'Linux Ubuntu'