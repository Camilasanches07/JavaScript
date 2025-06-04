//. Convertendo callback para Promise. Transforme esta função que usa callback em uma que retorna Promise:
/*function lerArquivo(nome, callback) {
  setTimeout(() => {
    if (nome === "arquivo.txt") {
      callback(null, "Conteúdo do arquivo");
    } else {
      callback("Arquivo não encontrado", null);
    }
  }, 500);
}*/



function lerArquivo(nome){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    if (nome === "arquivo.txt") {
      resolve("Conteúdo do arquivo");
    } else {
      reject("Arquivo não encontrado");
    }
  }, 500);
})
}

lerArquivo("arquivo.txt")
  .then((conteudo) => {
    console.log("Sucesso:", conteudo)
  })
  .catch((erro) => {
    console.log("Erro:", erro)
  })