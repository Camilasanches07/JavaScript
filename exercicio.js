//4. Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use forEach para imprimir apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.forEach((n) => {
    if (n % 2 == 0) {
        console.log(n, "é par!")
    }
})