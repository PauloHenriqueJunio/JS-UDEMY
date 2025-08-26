function escopo () {
    function zero (num) {
        return num >= 10 ?num :`0${num}`
    }

    function numPorExtenso (pegarDia) {
        diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
        const resultado = diaSemana[pegarDia]
        return resultado;
    }

    function mesPorExtenso (pegarMes) {
        const mesExtenso = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        const resultado = mesExtenso[pegarMes]
        return resultado;
    }

    function exibeRelogio () {
        const data = new Date();
        const pegarDia = data.getDay();
        const diaMes = data.getDate();
        const pegarMes = data.getMonth();
        const pegarAno = data.getFullYear();
        const hora = zero(data.getHours());
        const min = zero(data.getMinutes());
        const seg = zero(data.getSeconds());

        h1 = document.querySelector(`.container h1`);
        h1.innerHTML = `${numPorExtenso(pegarDia)}, ${diaMes} de ${mesPorExtenso(pegarMes)} de ${pegarAno} <br> ${hora}:${min}:${seg}`;
    }
setInterval(exibeRelogio, 1000);
}
escopo()