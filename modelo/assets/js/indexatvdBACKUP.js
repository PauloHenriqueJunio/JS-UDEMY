function escopo() {
    const form = document.querySelector(`.form`)
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        principal()
    })

    function principal () {
        const peso = form.querySelector(`.peso`)
        const altura = form.querySelector(`.altura`)
        const resultadoPeso = peso.value
        const resultadoAltura = altura.value
            
            let resultadoFinal = null
                if (resultadoPeso == "" || resultadoAltura == "") {
                    const msgErro = `Favor coloque uma altura e peso validos.`
                    resultado(msgErro)
                    return
                }
                const IMC = resultadoPeso / (resultadoAltura * resultadoAltura)
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
                const msgSucesso = `Voce tem ${peso.value}kg, tem ${altura.value} de altura e tem ${IMC.toFixed(2)} de IMC ou seja voce eh considerado: ${resultadoFinal}.`;
                resultado(msgSucesso)
    };
        function resultado(mensagem, validar) {
            const divResultado = document.querySelector('.resultado2');
            divResultado.innerHTML = mensagem;
        }
};
escopo()

// criar a mudanca de cor no fundo quando acontece algum erro para vermelho e criar a de cor verde quando for retornado true, fazer isso adicionando uma nova class no paragrafo usndo createElement('p') e appendChilh()!!! /// usar o if(!var) para fazer os erros // tambem adicionar as palavras numa lista e ir selecionando elas de acordo com o que for digitado