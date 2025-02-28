//Criando variaveis e armazenando valores

var greeting = "Seja muito bem-vindo!";
var name = " Vitor Oliveira";
var message = ', por favor check o seu pedido';

//Criando uma variavel de concatenação

var welcome = greeting + name + message;

//Criando as variaveis sobre a assinatura e os calculos

var sign = "João Vitor";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Obter os elementos id para armazenar as variaveis criadas com a propriedade textContent

var el = document.getElementById('greeting');
el.textContent = welcome;

//Obtendo o id da assinatura

var elSign = document.getElementById('usersign');
elSign.textContent = sign;

//Obtendo o id tiles

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Obtendo o id Subtotal

var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = 'R$ ' + subTotal;

//Obtendo o id Delivery

var elShipping = document.getElementById('shipping');
elShipping.textContent = 'R$ ' + shipping;

//Obtendo o id Gran total

var elTotal = document.getElementById('grantotal');
elTotal.textContent = 'R$ ' + grandTotal;  

