
const nome = prompt('Digite seu nome completo: ');


document.body.innerHTML = `Seu nome eh: ${nome}`;
document.body.innerHTML += `<br> Seu nome tem ${nome.length} letras`;
document.body.innerHTML += `<br> A segunda letra do seu nome eh : ${nome[1]}`;
document.body.innerHMTL += `<br> Qual o primeiro indice da letra H no seu nome? ${nome.indexOf(`H`)}`;
document.body.innerHTML += `<br> Qual o ultimo indice da letra L no seu nome? ${nome.lastIndexOf(`L`)}`;
document.body.innerHTML += `<br> As ultimas 3 letras do seu nome sao: ${nome.slice(-3)}`;
document.body.innerHTML += `<br> As palavras do seu nome sao: ${nome.split(' ')}`;
document.body.innerHTML += `<br> Seu nome com letras maiusculas: ${nome.toUpperCase()}`;
document.body.innerHTML += `<br> Seu nome com letras minusculas: ${nome.toLowerCase()}`;
