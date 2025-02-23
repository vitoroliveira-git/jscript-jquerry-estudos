//Criar as variaveis

var inStock;
var shipping;

inStock = true;
shipping = false;

//Obter o elemento ID

var elStock = document.getElementById('stock');

//Atribuir valor a class name
//No caso a id stock recebe a variavel true
elStock.className = inStock;

//No caso a id shipping recebe a variavel false
var elShip = document.getElementById('shipping');
elShip.className = shipping
