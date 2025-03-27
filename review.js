/*"let" é utilizado para atribuir variáveis*/
/*"const" é utilizado para atribuir variáveis , sem a possibilidade de alterar seu dado*/
/*console.log" é utilizado para printar na tela (print do python)*/
/*Estrutura de dados é uma estrutura que a linguagem de programação usa para armazenar e manipular dados*/
/* "==" verifica se o valor é igual, === verifica o tipo*/
/*&& = end , || = ou*/


let name = "João"
let cpf = "099.750.345-56"
let cidade = "New York"    

const pessoa = {
    name : "João", 
    cpf : "099.750.345-56",
    cidade : "New York",
    isValidated : true,
    saldo : 100
}

console.log(pessoa.name)
pessoa.name = "José" /*alterar o nome da variável*/
console.log(pessoa.name)
pessoa.sexo = "masculino" /*adicionar um novo atributo*/
console.log(pessoa)
delete pessoa.cpf /*deletar um atributo*/
console.log(pessoa)
const valorCompra = 20

if(!pessoa.isValidated || valorCompra < saldo){
    console.log("Operação permitida!")

} else if(pessoa.saldo >= valorCompra){
        console.log("Compra efetuada")

} else if(pessoa.saldo < valorCompra){
    console.log("Saldo insuficiente")

} else {
    console.log("Não foi possível realizar a compra!")
}

