//5. Dado o array ['João', 'Maria', 'Pedro'], use map para criar um novo array onde cada nome vira "Sr. João", "Sra. Maria", "Sr. Pedro".

const nomes = ['João', 'Maria', 'Pedro']

const novoArray = nomes.map((nome) => {
    if (nome == "Maria") {
        return("Sra. " + nome)
    } else {
        return("Sr. " + nome)
    }
})

console.log(novoArray)