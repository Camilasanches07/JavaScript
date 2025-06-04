/*4. Simulador de API
Crie uma função buscarUsuario(id) que:
Retorna uma Promise
Espera 2 segundos
Se id for menor que 10, resolve com {id: id, nome: "Usuario" + id}
Se id for maior ou igual a 10, rejeita com "Usuário não encontrado"*/

function buscarUsuario(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 10) {
        resolve({id: id, nome: "Usuario" + id})
        
      } else {
        reject("Usuário não encontrado")
      }
    }, 2000)
  })
}

buscarUsuario(15)
  .then((usuario) => {
    console.log("Usuário Encontrado", usuario )
  })
  .catch((error) => {
    console.log("Erro:", error)
  })