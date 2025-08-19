const nome = "Paulo Junio";
const idade = 22;
const peso = 79;
const alturaEmM = 1.83;
let indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - (idade);

console.log(`Eu me chamo ${nome} tenho ${idade} anos de idade e meu peso é ${peso}kg. Minha altura é ${alturaEmM}m e meu IMC é ${indiceDeMassaCorporal} e nasci no ano de ${anoNascimento}.`)