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
            console.log(IMC)
            return
        }
        calculo()

        function resultado () {
            const resultado = document.querySelector(`.resultado2`)
            resultado.innerHTML = (`Voce tem ${peso.value}kg, ${altura.value} de altura e esta: `)
        }
        resultado()

        function IMC () {
            // continuar fazendo o IF, else IF e ELSE (Fazer o seguinte, se o resultado do IMC for maior q x valor vai ser printado o sobrepeso, se for maior q y valor sera printado o peso normal e por ai vai... (: )
        }
    };

form.addEventListener('submit', principal)
};

escopo()