//9. Dado o array ['10', '20', '30', '40'] (strings), use map para converter em números e depois dobrar cada valor.

const numeros = ['10', '20', '30', '40']

const novosNumeros = numeros.map((n) => {
    const numeroInt = parseInt(n)
    return(numeroInt * 2)
})

console.log(novosNumeros)