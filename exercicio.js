//2. Dado o array ['javascript', 'python', 'java'], use map para criar um novo array com cada string em maiúscula.

const nomes = ['javascript', 'python', 'java']

const maiuscula = nomes.map((n) => {
    return (n.toUpperCase())
})

console.log(maiuscula)