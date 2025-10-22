const Relogio = document.querySelector('.timer');
let segundos = 0;
let timer;

function inciaContagem(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    })
}

function iniciaTimer() {
    timer = setInterval(function(){
        segundos++
        Relogio.innerHTML = inciaContagem(segundos)
    }, 1000)
}

document.addEventListener(`click`, function(e){
    const click = e.target

    if(click.classList.contains(`iniciar`)) {
        clearInterval(timer)
        document.querySelector('.timer').style.color = 'black';
        iniciaTimer()
    }

    if(click.classList.contains(`pausar`)) {
        document.querySelector('.timer').style.color = 'red';
        clearInterval(timer)
    }

    if(click.classList.contains(`zerar`)) {
        clearInterval(timer)
        document.querySelector('.timer').style.color = 'black';
        Relogio.innerHTML = "00:00:00"
        segundos = 0;
    }
})

// let segundos = 0;
// let intervalo;

// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

// function formataHoras (totalSegundos) {
//     const horas = Math.floor(totalSegundos / 3600);
//     const segundosRestantes = totalSegundos % 3600;
//     const minutos = Math.floor(segundosRestantes / 60)
//     const segundosFinais = (segundosRestantes % 60);

//     function zeroAEsquerda(num) {
//         return (num >= 10) ? num : `0${num}`;
//     }
    
//     return(`${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundosFinais)}`)
// }

// iniciar.addEventListener('click', function(){
//     if (intervalo === undefined) {
//         intervalo = setInterval(function (){
//         segundos++
//         document.querySelector('.timer').style.color = 'black';
//         timer.innerHTML = formataHoras(segundos);
//         return intervalo;
//     }, 1000)}
// })
// pausar.addEventListener('click', function(){
//     clearInterval(intervalo)
//     document.querySelector('.timer').style.color = 'red';
//     intervalo = undefined;
// })

// zerar.addEventListener('click', function(){
//     clearInterval(intervalo)
//     document.querySelector('.timer').style.color = 'black';
//     segundos = 0
//     intervalo = undefined;
//     timer.innerHTML = formataHoras(segundos);
// })