//4. Dado o array ['JavaScript', 'Python', 'Java', 'C++', 'Go'], use filter para criar um novo array apenas com linguagens que começam com a letra 'J'.

const palavras = ['JavaScript', 'Python', 'Java', 'C++', 'Go']

const inicia_com_J = palavras.filter((palavra) => {
    return(palavra[0] === "J")
})

console.log(inicia_com_J)