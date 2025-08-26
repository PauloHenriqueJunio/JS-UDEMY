const numSecreto = Math.floor(Math.random() * 10);
const botao = document.querySelector(`.checar`)
const dicas = document.querySelector(`.dicas`);
console.log(numSecreto)
dicas.innerHTML = ``;

botao.addEventListener(`click`, function event(e) {
    e.preventDefault();
    verificarPalpite();
})

function verificarPalpite () {
    const inputPalpite = document.querySelector(`.palpite`);
    const palpite = Number(inputPalpite.value);
    if (palpite > numSecreto) {
        dicas.classList.add(`maior`)
        dicas.classList.remove(`menor`, `correto`)
        dicas.innerHTML = `Seu palpite foi maior`;
    } else if (palpite < numSecreto) {
        dicas.classList.add(`menor`)
        dicas.classList.remove(`maior`, `correto`)
        dicas.innerHTML = `Seu palpite foi menor`;
    } else if (palpite === numSecreto) {
        dicas.classList.add(`correto`)
        dicas.classList.remove(`maior`, `menor`)
        dicas.innerHTML = `ACERTOU!`;
    };


}
