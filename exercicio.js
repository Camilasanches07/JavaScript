/*1. Criando sua primeira Promise
Crie uma Promise que simula o lançamento de uma moeda. A Promise deve:
Esperar 1 segundo
Ter 50% de chance de resolver com "Cara" e 50% de rejeitar com "Coroa"
Use Math.random() para determinar o resultado*/

const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const moeda = Math.random()
    if (moeda < 0.5) {
      resolve("Cara")
    } else {
      reject("Coroa")
    }
  }, 1000)
})

minhaPromise
  .then((resultado) => {
    console.log("Resultado:", resultado)
  })
  .catch((erro) => {
    console.log("Erro: ", erro)
  })