const numeros = [100, 40, 33, 670, 5, 4, 880, 900]; //Array com os números
let index = 0; //Valor/contador do index , ex: [0] = 100, [1] = 40 ... 

while (index < numeros.length) { //Enquanto o index for menor que o tamanho do array
    if (numeros[index] > 100) { //Verifica se o número atual é maior/igual que 100 , ex: [0] = 100 - verdadeiro, [1] = 40 - falso ...
        console.log(numeros[index]); //Printa na tela as condições em que os números forem > 100
    }
    index++; //Faz ir para a próxima posição do Array
}
