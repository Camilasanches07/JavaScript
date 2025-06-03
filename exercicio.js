//6. Dado o array ['João', 'Maria', 'Ana', 'Pedro', 'Carla'], use filter para criar um novo array apenas com nomes que têm 4 letras.

const palavras = ['João', 'Maria', 'Ana', 'Pedro', 'Carla']

const nomeSelecionado = palavras.filter((pessoa) => {
    return(pessoa.length == 4)
})

console.log(nomeSelecionado)