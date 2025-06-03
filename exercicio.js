//1. Dado o array [1, 2, 3, 4, 5], use map para criar um novo array com cada número multiplicado por 3.

const numeros = [1, 2, 3, 4, 5]

const novoArray = numeros.map((n) =>{
    return(n * 3)
})

console.log(novoArray)