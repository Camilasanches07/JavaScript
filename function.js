const users =["Camila" , "Rafael", "João"]  //Array de nomes

function getUsers(){ //Função get para mostrar os usuarios do array
    return users //Retorna o array
}



function createUser(user){ //Função para criar um usuário 
    users.push(user) //utilização do "push" para adicionar o novo usuário
}
createUser("Maria") //Passagem do parâmetro user , nesse caso nome "Maria"
createUser("José")  



function updateUser(index, novoNome){ //Função para atualizar os dados do array
    users[index] = novoNome //pede o index do array e o manda para o novo nome
}

updateUser(0, "Juliana") // passa os parâmetros index(número) e novoNome("Juliana") para serem atualizados
updateUser(2, "Paulo")
console.log(users) // imprime o array com as atalizações



function deleteUser(index){ //Função para deletar algo do array
    users.splice(index, 1) //utiliza-se "splice" para deletar. Há a passagem do index e a quantidade de coisas que quer deletar
}
deleteUser(1) // chamou a função e deletou o valor do index 1
console.log(users) //imprimiu o array com as atualizações