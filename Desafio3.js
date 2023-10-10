//Solicitar um valor de um produto
var preco = parseInt(prompt("Digite o valor do produto"))
// variável que apresenta a lista das parcelas
var lista = ""
//loop para calcular as parcelas
for (var i = 1; i<=10; i++) {
    lista += i + "x de R$ " + (preco / i) 
}
//apresentação das parcelas
console.log(lista)