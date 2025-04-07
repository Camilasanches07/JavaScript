const nomes = ["Pera" , "Uva" , "Banana" , "Kiwi" , "Morango"]
let index = 4

switch (nomes [index]) {
    case "Pera":
        console.log("Pera - R$2,00 0 kilo")  
        break;

    case "Uva":
        console.log("Uva - R$4,00 o kilo")
        break;

    case "Banana":
        console.log("Banana - R$3,50 0 kilo")  
        break;

    case "Kiwi":
        console.log("Kiwi - R$5,50 0 kilo")  
        break;

    case "Morango":
        console.log("Morango - R$2,50 0 kilo")  
        break;

    default:
        console.log("Opção indisponível")
        break;
}