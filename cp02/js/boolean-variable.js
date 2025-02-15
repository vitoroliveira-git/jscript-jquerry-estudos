//Criando as variaveis
var inStock;
var shipping;

//Atribuindo valores booleanos
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShipping = document.getElementById('shipping');
elShipping.className = shipping;
