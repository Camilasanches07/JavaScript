//3. Dado o array [10, 25, 8, 30, 15, 40], use filter para criar um novo array apenas com números maiores que 20.

const numeros = [10, 25, 8, 30, 15, 40]

const numerosMaiores = numeros. filter((n) => {
    return(n > 20)
})

console.log(numerosMaiores)