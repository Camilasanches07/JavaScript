//5. Dado o array ['maçã', 'banana', 'laranja'], use forEach para criar um novo array com cada fruta em maiúscula. (Dica: você precisará criar um array vazio antes do forEach)

const frutas = ['maçã', 'banana', 'laranja'];
const novasFrutas = [];

frutas.forEach(fruta => {
  novasFrutas.push(fruta.toUpperCase());
});

console.log(novasFrutas);
