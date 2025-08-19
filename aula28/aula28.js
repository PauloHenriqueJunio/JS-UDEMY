const num = Number(prompt(`Digite um numero: `));
let raiz = Math.sqrt(num)

const numeroTitulo = document.getElementById('numero-1');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = num;

texto.innerHTML = `<br> Raiz quadrada: ${raiz.toFixed(2)}`;
texto.innerHTML += `<br> ${num} eh inteiro: ${Number.isInteger(num)}`;
texto.innerHTML += `<br> Eh NaN: ${Number.isNaN(num)}`;
texto.innerHTML += `<br> Arredondando para baixo: ${Math.floor(num)}`;
texto.innerHTML += `<br> Arredondando para cima: ${Math.ceil(num)}`;
texto.innerHTML += `<br> Com duas casa decimais: ${num.toFixed(2)}`;