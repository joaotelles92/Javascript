//montar a classe
class SenhorDosAneis{
    constructor(trilogia1, trilogia2, trilogia3){
        this.trilogia1 = trilogia1,
        this.trilogia2 = trilogia2,
        this.trilogia3 = trilogia3
    }

descrever (){
return "A trilogia do filme Senhor dos Aneis é composta pelos filmes: " + this.trilogia1 + ", " + this.trilogia2 + "e " + this.trilogia3
}
}

//Interação com usuário para saber os nomes dos filmes
let filme1 = prompt("Qual o nome do primeiro filme de Senhor dos Aneis?")
let filme2 = prompt("Qual o nome do segundo filme de Senhor dos Aneis?")
let filme3 = prompt("Qual o nome do terceiro filme de Senhor dos Aneis?")

// criando uma instância da trilogia
const trilogia = new SenhorDosAneis(filme1, filme2, filme3)

//apresentando em tela 
console.log(trilogia.descrever())