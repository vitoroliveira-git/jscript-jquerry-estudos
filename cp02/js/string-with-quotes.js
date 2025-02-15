//Criando as var
var title;
var message;

//Atribuindo valor
title = "Molly' Special Offers";
message = '<a href=\"sale.html\">25% off</a>';

//Pegar o titulo pela ID
var elTitle = document.getElementById('title');

//Trocar o conteudo do texto
elTitle.textContent = title;

//Pegar o note pelo ID
var elNote = document.getElementById('note');

//Trocar o conteudo do texto
elNote.textContent = message;

