//console.log("Início");

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false //ndom() > 0.3; // 70% de chance de sucesso
            if (success) {
                resolve(["Alice", "Bob", "Charlie"]);
            } else {
                reject("Não foi possível obter a lista de usuários.");
            }
        }, 1000);
    });
}

/*getUsers().then(users => {
    console.log("Usuários:", users)
    renderizaTabela(users)
}).catch(error => {
  console.error("Erro:", error)
  console.log("Não foi possível obter a lista de usuários.")
});

console.log("ok")*/

function renderizaTabela(arrUsers){
    console.log(arrUsers)
}

async function getData(){
    try {
        const result = await getUsers()
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}

getData()

/*setTimeout(() => {
    console.log("Timeout - Executado após 0ms");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise resolvida - Microtask");
});

console.log("Fim");*/
