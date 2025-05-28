const produtosEletrodomesticos = [
  { id: 1, nome: "Geladeira Frost Free", valor: 3200.00, temDesconto: true },
  { id: 2, nome: "Máquina de Lavar 12kg", valor: 2100.50, temDesconto: false },
  { id: 3, nome: "Fogão 4 Bocas", valor: 899.99, temDesconto: true },
  { id: 4, nome: "Micro-ondas 30L", valor: 680.00, temDesconto: false },
  { id: 5, nome: "Aspirador de Pó", valor: 450.30, temDesconto: true },
  { id: 6, nome: "Ar-condicionado 9000 BTUs", valor: 1899.90, temDesconto: false },
  { id: 7, nome: "Liquidificador", valor: 199.90, temDesconto: true },
  { id: 8, nome: "Panela Elétrica", valor: 349.00, temDesconto: false },
  { id: 9, nome: "Fritadeira sem Óleo", valor: 499.99, temDesconto: true },
  { id: 10, nome: "Cafeteira Elétrica", valor: 289.90, temDesconto: false }
];

const novosProdutos = produtosEletrodomesticos.map((produto) => {
  const novoPreco = produto.temDesconto ? produto.valor * 0.1 : produto.valor
  
  return{
    id: produto.id,
    nome: produto.nome,
    valor: novoPreco,
    temDesconto: produto.temDesconto
  }
  
})

console.log(novosProdutos)