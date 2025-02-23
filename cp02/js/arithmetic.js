//Criar a variavel subtotal

var subtotal = (13 + 1) * 5; //Subtotal de 70

var shipping = 0.5 * (13 + 1); //Entrega de 7


//Criar a variavel total
var total = subtotal + shipping;


var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;