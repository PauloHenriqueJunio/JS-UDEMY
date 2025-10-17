/* Escreva uma função que recebe um número e retorne o seguinte:
Número é diviivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisivel por 3 e 5 = Retorna o proprio numero
Checar se é realmente um numero
Use a funcao com numero de min 0 e max 100 */
const max = 100;
const min = 0;

function numeroAleatorio(min, max) {
const r = Math.random() * (max - min) + min;
return Math.floor(r);
}
const numero = numeroAleatorio(min, max);

function isNumber () {
    if (typeof numero === `number`) {
        console.log(`${numero} é um numero!`)
    } else {console.log(`${numero} não é número!`)}
}

function fizz () {
    if (numero % 3 === 0) {
        console.log(`${numero} é divisivel por 3!`)
    }   else {console.log("Não é divisivel por 3!")}
    
}

function buzz () {
    if (numero % 5 === 0) {
        console.log(`${numero} é divisivel por 5!`)
    }   else {console.log(`${numero} não é divisivel por 5!`)}
}

function FizzBuzz () {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("Divisivel pelos dois numeros!")
    } else {
        console.log(`${numero} nao foi divisivel por 3 e 5 ao mesmo tempo`)
    }
}

isNumber(),
fizz(),
buzz(),
FizzBuzz();