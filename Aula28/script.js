var dt = new Date();

var ndt = new Date(1968, 02, 19);


var diaSe = dt.getDay();
var dia = dt.getDate();
var mes = dt.getMonth();
var ano = dt.getFullYear();

var meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

var semanas = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');

document.write(`Dia da semana: ${semanas[6]}, ${dia} de ${meses[2]} de ${ano}.<br><br>`);

var horas = dt.getHours();
var minutos = dt.getMinutes();
var segundos = dt.getSeconds(); 

document.write(`São ${horas}:${minutos}:${segundos}`);