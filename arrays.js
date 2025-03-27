const letras = ["A", "E", "I", "O", "U"] //Array de letras
console.log(letras[2]) //Pega o item 2 da lista

letras.push("B") //Adiciona item no final do array
console.log(letras)

letras.unshift("C") //Adiciona item no início do array
console.log(letras)

letras.pop() //Remove item do final do array
console.log(letras)

letras.shift() //Remove item do início do array
console.log(letras)

letras.splice(2, 2) //Remove item do array, tem que dar o número da posição dele no array, e depois a quantidade que será removida

console.log(letras.length) //Número do tamanho do array


const pessoas = [ //Array
    {   
        name:"João", 
        saldo: 20,
        pedidos: ["Relógio", "Carteira", "Pulseira", "Camisa"]
    },

    {   
        name:"Pedro", 
        saldo: 30,
        pedidos: ["Calça", "Boné", "Regata", "Short"]
    },

    {   
        name:"Márcia", 
        saldo: 40,
        pedidos: ["Vestido", "Brinco", "Anel", "Saia"]
    }
]

pessoas[2].pedidos.push("Calça") //Adiciona "calça" no array "pessoas", na posição "2" em pedidos

console.log(pessoas[1].pedidos[2]) //Acessa o array pessoas, posição "1" e o item que está em "pedidos" na posição "2"

console.log(pessoas)