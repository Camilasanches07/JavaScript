let letra = "Y" 

switch (letra) { //Escolha
    case "X": //Em caso de
        console.log("Chutar")
        break; //Quebra/Acaba

    case "O":
        console.log("Andar")
        break;

    case "Y":
        console.log("Mirar")
        break;
     
    case "T":
        console.log("Atirar")   
        break;

    default: //Nenhuma das opções 
        console.log("Opção inválida")
        break;
}