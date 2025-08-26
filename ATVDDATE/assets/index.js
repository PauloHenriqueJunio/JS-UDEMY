function escopo() {
    const data = new Date();
    function zeroAEsq (num) {
        return num >= 10 ? num :`0${num}`;
    }

    function pegarData (){
        const dia = zeroAEsq(data.getDate());
        const diaSemana = data.getDay();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();
        const hora = zeroAEsq(data.getHours());
        const min = zeroAEsq(data.getMinutes());
        const sec = zeroAEsq(data.getSeconds());
        const pegarMes = getMesTexto(mes);
        const pegarDia = pegarDiaTexto(diaSemana)

    function pegarDiaTexto() {
        let diaSemanal = Number(diaSemana);
        switch (diaSemana) {
         case 0:
             diaSemanal = `Domingo`;
             return diaSemanal;
         case 1:
             diaSemanal = `Segunda-feira`;
             return diaSemanal;
         case 2:
            diaSemanal = `Terca`;
             return diaSemanal;
         case 3:
             diaSemanal = `Quarta`;
             return diaSemanal;
         case 4:
             diaSemanal = `Quinta`;
             return diaSemanal;
         case 5:
             diaSemanal = `Sexta`;
             return diaSemanal;
         case 6:
             diaSemanal = `Sabado`;
             return diaSemanal;
         default:
             diaSemanal = `Nada`
    }
    return diaSemanal;
}
    function getMesTexto() {
    let mesCase;
    switch (mes) {
         case 1:
             mesCase = `Janeiro`;
             return mesCase;
         case 2:
            mesCase = `Fevereiro`;
             return mesCase;
         case 3:
             mesCase = `Março`;
             return mesCase;
         case 4:
             mesCase = `Abril`;
             return mesCase;
         case 5:
             mesCase = `Maio`;
             return mesCase;
         case 6:
             mesCase = `Junho`;
             return mesCase;
         case 7:
             mesCase = `Julho`;
             return mesCase;
         case 8:
             mesCase = `Agosto`;
             return mesCase;
         case 9:
             mesCase = `Setembro`;
             return mesCase;
         case 10:
             mesCase = `Novembro`;
             return mesCase;
         case 11:
             mesCase = `Outubro`;
             return mesCase;
         case 12:
             mesCase = `Dezembro`;
             return mesCase;
         default:
             mesCase = `Natal`
    
    }
    return mesCase;
}
    return `${pegarDia}, ${dia} de ${pegarMes} de ${ano} ás ${hora}:${min}:${sec}`;
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