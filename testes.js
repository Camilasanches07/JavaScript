
const produtos = [{
    name: "Relógio",
    price:10
},
{
    name:"Short",
    price:20
},
{
    name:"Vestido",
    price:55
},
{
    name:"óculos",
    price:70
}
]
let total = 0

/*for (let index = 0; index < produtos.length; index++) {
    const element = produtos[index]
    total = produtos[index].price + total

}*/

/*produtos.forEach((p) => { //Imprimir do primeiro ao último item da lista. Alterar valor de variaveis, etc
  total = p.price + total
})

console.log(total) 



const produtosFiltrados = produtos.filter((p) => { //Retorna um array. Se retornar "true" retorna o array com os itens filtrados
  if (p.price > 20) {
    return true
  }
})

console.log(produtosFiltrados) 


const produtosAtualizados = produtos.map((p) => { //Percorrer a lista e fazer alterações
  p.price =  p.price + p.price * 0.1
  return p
})

console.log(produtosAtualizados) */


 /*const produtosAtualizados = produtos.reduce((acumulador, valorAtual) =>{ //Percorrer a lista e reduzir, ex:somar todos os valores e chegar a um valor finl
  return acumulador * valorAtual.price
 }, 1)

 console.log(produtosAtualizados) */
 let indexEncontrado = null

 for (let index = 0; index < produtos.length; index++) {
  const element = produtos[index];
  
  if (element.name == "Vestido") { 
    indexEncontrado = index
  }
  console.log(element)
  
 }
 console.log(indexEncontrado)