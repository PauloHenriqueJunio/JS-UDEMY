function escopo(){
    const form = document.querySelector(`.form`)

    function principal (evento) {
        evento.preventDefault()
        const peso = form.querySelector(`.peso`)
        const altura = form.querySelector(`.altura`)

        function calculo () {
            const resultadoPeso = peso.value
            const resultadoAltura = altura.value
            const IMC = resultadoPeso / (resultadoAltura * resultadoAltura)
            let resultadoFinal = null
                if(IMC < 18.5) {
                resultadoFinal = 'Abaixo do peso'
                } else if (IMC >= 18.5 && IMC <= 24.9) {
                resultadoFinal = `Peso normal`
                } else if (IMC >= 25 && IMC <= 29.9) {
                resultadoFinal = `Sobrepeso`
                } else if (IMC >= 30 && IMC <= 34.9) {
                resultadoFinal = `Obesidade grau 1`
                } else if (IMC >= 35 && IMC <= 39.9) {
                resultadoFinal = `Obesidade grau 2`
                } else {
                resultadoFinal = `Obesidade grau 3`
                }

                    function resultado () {
                    const resultado = document.querySelector(`.resultado2`)
                    resultado.innerHTML = (`Voce tem ${peso.value}kg, tem ${altura.value} de altura e tem ${IMC.toFixed(2)} de IMC ou seja voce eh considerado: ${resultadoFinal}.`)
                    }
            resultado()
        }
        calculo()
    };
form.addEventListener('submit', principal)
};
escopo()
