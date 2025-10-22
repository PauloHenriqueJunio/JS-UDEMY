let segundos = 0;
let intervalo;
const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function formataHoras (totalSegundos) {
    const horas = Math.floor(totalSegundos / 3600);
    const segundosRestantes = totalSegundos % 3600;
    const minutos = Math.floor(segundosRestantes / 60)
    const segundosFinais = (segundosRestantes % 60);

    function zeroAEsquerda(num) {
        return (num >= 10) ? num : `0${num}`;
    }
    

    return(`${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundosFinais)}`)
}

iniciar.addEventListener('click', function(){
    if (intervalo === undefined) {
        intervalo = setInterval(function (){
        segundos++
        document.querySelector('.timer').style.color = 'black';
        timer.innerHTML = formataHoras(segundos);
        return intervalo;
    }, 1000)}
})
pausar.addEventListener('click', function(){
    clearInterval(intervalo)
    document.querySelector('.timer').style.color = 'red';
    intervalo = undefined;
})

zerar.addEventListener('click', function(){
    clearInterval(intervalo)
    document.querySelector('.timer').style.color = 'black';
    segundos = 0
    intervalo = undefined;
    timer.innerHTML = formataHoras(segundos);
})

