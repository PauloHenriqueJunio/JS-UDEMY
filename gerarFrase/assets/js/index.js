const botao = document.querySelector(`.gerarFrase`);
const p = document.querySelector(`.fraseExibida`);
botao.addEventListener(`click`, gerarFrase);

function gerarFrase() {
    const listafrase =[`E acredite que o melhor possa ser feito!`, `Faça sempre o seu melhor!`, `Não espere, ponha em prática!`, `Mesmo que pareça difícil, não pare!`, `Só trabalhando é possível trilhar o caminho!`, `Tenha coragem!`, `Descubra quem você realmente é…`, `E se aceite!`, `Não espere que as respostas caiam do céu!`, `Aprenda a lidar com as situações do melhor jeito!`];
    let num = Math.floor(Math.random() * listafrase.length);
    const resultadoFrase = listafrase[num];
    p.innerHTML = `${resultadoFrase}`;
}