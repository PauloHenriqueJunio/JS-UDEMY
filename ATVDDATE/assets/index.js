function escopo() {
    const data = new Date();
    function zeroAEsq (num) {
        return num >= 10 ? num :`0${num}`;
    }

    function pegarData (){
        const dia = zeroAEsq(data.getDate());
        const diaSemana = data.getDay();
        const mes = data.getMonth() + 1;
        const ano = zeroAEsq(data.getFullYear());
        const hora = zeroAEsq(data.getHours());
        const sec = zeroAEsq(data.getSeconds());

        let diaSemanal = Number(diaSemana);

        switch (diaSemana) {
         case 0:
             diaSemanal = `Domingo`;
             break;
         case 1:
             diaSemanal = `Segunda-feira`;
             break;
         case 2:
            diaSemanal = `Terca`;
             break;
         case 3:
             diaSemanal = `Quarta`;
             break;
         case 4:
             diaSemanal = `Quinta`;
             break;
         case 5:
             diaSemanal = `Sexta`;
             break;
         case 6:
             diaSemanal = `Sabado`;
             break;
         default:
             diaSemanal = `Nada`
    }
        let mesCase;
    switch (mes) {
         case 1:
             mesCase = `Janeiro`;
             break;
         case 2:
            mesCase = `Fevereiro`;
             break;
         case 3:
             mesCase = `Março`;
             break;
         case 4:
             mesCase = `Abril`;
             break;
         case 5:
             mesCase = `Maio`;
             break;
         case 6:
             mesCase = `Junho`;
             break;
         case 7:
             mesCase = `Julho`;
             break;
         case 8:
             mesCase = `Agosto`;
             break;
         case 9:
             mesCase = `Setembro`;
             break;
         case 10:
             mesCase = `Novembro`;
             break;
         case 11:
             mesCase = `Outubro`;
             break;
         case 12:
             mesCase = `Dezembro`;
             break;
         default:
             mesCase = `Natal`

    }
    return `${diaSemanal}, ${dia} de ${mesCase} de ${ano}  ${hora}:${sec}`;
}

    function criarP () {
        const p = document.createElement(`p`);
        return p
    }

    function texto () {
            const resultadoData = pegarData()
            const p = criarP()
            const txt = document.querySelector('.container');
            txt.innerHTML = '';
            p.innerHTML = resultadoData;
            txt.appendChild(p)
            return txt
        }
        texto();
}
escopo();