//5. Dado o array [5, 12, 18, 3, 25, 7, 30], use filter para criar um novo array com números que são divisíveis por 3.

const numeros = [5, 12, 18, 3, 25, 7, 30]

const div_por_3 = numeros.filter((num) => {
    return(num %3 == 0)
})

console.log(div_por_3)