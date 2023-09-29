function calculoICMS(){
        
    var precoCusto = parseInt(prompt("Insira o Preço de Custo"))
    var ICMS = 0.12

    var calculo = precoCusto * ICMS

    console.log ("O valor do ICMS é de " + calculo)

}

function multiplos(){

    var numero1 = parseInt(prompt("Insira um número"))
    var numero2 = parseInt(prompt("Insira um múltiplo do número anterior"))

    if (numero1%numero2 == 0){
        alert ("O número " + numero1 + " é múltiplo do número " + numero2)  
    }
        else{
        alert ("O número " + numero1 + " não é múltiplo do número " + numero2)
    }       
}