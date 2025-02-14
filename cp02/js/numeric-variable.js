//Criar tres variaveis para armazenar as informações necessárias

var price;
var quantity;
var total;

//Atribuir valores para as minhas variaveis
price = 5;
quantity = 20;

//Calcular o valor do total

total = price * quantity

var elemento = document.getElementById('cost'); 

//Verificar se realmente está chamando a variável e aparecendo o valor

//console.log(price);
//console.log(quantity);
//console.log(total);

elemento.textContent = '$' + total
 
//Usado no internet exploxer 
//elemento.innerHTML = '$' + total