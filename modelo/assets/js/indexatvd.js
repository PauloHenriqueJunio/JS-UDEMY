function escopo() {
    const form = document.querySelector(`.form`)
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        principal()
    })
    function principal () {
        const peso = form.querySelector(`.peso`)
        const altura = form.querySelector(`.altura`)
        const resultadoPeso = Number(peso.value)
        const resultadoAltura = Number(altura.value)
        const IMCR = calculoIMC()
        const nivelIMC = nivel_imc(IMCR);
        const mensagem = `Seu IMC eh ${IMCR} (${nivelIMC}).`

        resultado(mensagem, true)
            if (!resultadoPeso) {
            resultado(`Peso invalido!`, false)
            return;
            }
            if (!resultadoAltura) {
            resultado(`Altura invalida!`, false)
            return;
            }
        function calculoIMC() {
            const IMC = resultadoPeso / resultadoAltura ** 2;
            return IMC.toFixed(2);
        };

        function nivel_imc (calculoIMC) {
            listaIMC = [`Abaixo do peso`,`Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];
            if (calculoIMC >= 39.9) return listaIMC[5];
            if (calculoIMC >= 34.9) return listaIMC[4];
            if (calculoIMC >= 29.9) return listaIMC[3];
            if (calculoIMC >= 24.9) return listaIMC[2];
            if (calculoIMC >= 18.5) return listaIMC[1];
            if (calculoIMC < 18.5) return listaIMC[0];
            
};        
};
        function criarP () {
            const p = document.createElement('p');
            return p;
}

        function resultado(mensagem, validar) {
            const divResultado = document.querySelector('.resultado2');
            divResultado.innerHTML = '';
            const p = criarP();
            
            if (validar) {
                p.classList.add('correto');
            } else {
              p.classList.add('erro')
            }

            p.innerHTML = mensagem;
            divResultado.appendChild(p)
}
};
escopo()