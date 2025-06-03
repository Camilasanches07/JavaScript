//1. Dado o array [5, 10, 15, 20], use reduce para calcular a soma de todos os números.

const numeros = [5, 10, 15, 20]

const soma = numeros.reduce((acumulador, numero) => {
    return(acumulador + numero)
}, 0)

console.log(soma)