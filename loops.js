/*let numero = 100*/
/*while (numero >=1) {
    if(numero %2 == 0){
        console.log(numero)
    }
    numero--
}*/

/*let letras = ["C" ,"A", "M", "I", "L"]
let index = 0

while (index < letras.length/2) {
    console.log(letras[index])
    index++
}


do { //Usa-se o "do" para algo que vai ser executado pelo menos uma vez 
    console.log(letras[index])
    index++
    
} while (index < letras.length/2);*/

/*let nome = "Camila" //Variávl nome
let index = nome.length-1 //Variável index atrubuida com a variável nome + seu tamanho 

while (index >= 0) { //Enquanto o index for maior ou igual a zero
    console.log(nome[index]) //Printar o nome com a variável index 
    index-- // Subtrair os dados do index
}*/

/*let letras = ["C" ,"A", "M", "I", "L"]

for (let index = letras.length-1; index >= letras.length/2 ; index--) {
    const element = letras[index];
    console.log(element)
}*/

const pedidos = [
    {
        price: 15,
        id: 1,
        user:"João",
        produtos: ["Tênis", "Camisas", "Boné", "Chinelo"]
    },
    {
        price: 30,
        id:2,
        name: "Meia",
        user:"Pedro",
        produtos: ["Chapéu", "Relógio" , "Pulseira"]
    },
    {
        price: 40,
        id:3,
        name: "Calça",
        user:"Rafael",
        produtos: ["Brinco" ,"Short"]
    }
]

let total = 0

for (let index = 0; index < pedidos.length; index++) { //let index = 0 -> Começa do 1 item do array ,  index < pedidos.length-> continua enquanto o índice for menor que o tamanho do array. index++ -> aumenta 1 a cada volta, para ir para o próximo item.
    const element = pedidos[index];//Está pegando o item atual do array pedidos e armazenando na constante element.
    //pedidos[index].price = pedidos[index].price * 0.1 + pedidos[index].price
    total = pedidos[index].price + total
    console.log(element.produtos)

    /*if (element.price < 40) {
        console.log(element.price)
    }*/
}
console.log(total)