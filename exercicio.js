//Use filter para criar um novo array apenas com pessoas maiores de idade (18+).

const pessoas = [
  {nome: 'Ana', idade: 17},
  {nome: 'Carlos', idade: 25},
  {nome: 'Maria', idade: 16},
  {nome: 'João', idade: 30}
];


const maior_de_idade = pessoas.filter((pessoa) => {
    return pessoa.idade >= 18
})

console.log(maior_de_idade)