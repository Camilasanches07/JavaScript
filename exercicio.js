//2. Dado o array ['casa', 'carro', 'bicicleta', 'moto'], use filter para criar um novo array apenas com palavras que têm mais de 4 letras.

const palavras = ['casa', 'carro', 'bicicleta', 'moto']

const quartoLetras = palavras.filter((palavra) => {
    return(palavra.length > 4)
})

console.log(quartoLetras)