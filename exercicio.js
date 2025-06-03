//Use reduce para calcular o valor total de todos os produtos.

const produtos = [
  {nome: 'Notebook', preco: 2000},
  {nome: 'Mouse', preco: 50},
  {nome: 'Teclado', preco: 150}
];

const valorTotal = produtos.reduce((acc, nome) => {
    return(acc + nome.preco)
}, 0)

console.log(valorTotal)