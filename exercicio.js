//1. Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter para criar um novo array apenas com números ímpares.

const numeros =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosImpares = numeros.filter((n) => {
    return(n % 2)
})

console.log(numerosImpares)