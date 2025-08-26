function escopo() {
    const data = new Date();
    function zeroAEsq (num) {
        return num >= 10 ? num :`0${num}`;
    }
    // function criarP () {
    //     const p = document.createElement(`p`);
    //     return p
    // }
    function pegarData (){
        const dia = zeroAEsq(data.getDate());
        const diaSemana = data.getDay();
        const mes = data.getMonth();
        const ano = data.getFullYear();
        const hora = zeroAEsq(data.getHours());
        const min = zeroAEsq(data.getMinutes());
        const sec = zeroAEsq(data.getSeconds());
        const pegarMes = getMesTexto(mes);
        const pegarDia = pegarDiaTexto(diaSemana)

    function pegarDiaTexto() {
        const semanaTexto = [`Domingo`, `Segunda`, `Terca`, `Quarta`, `Quinta`, `Sexta`, `Sabado`];
        return semanaTexto[diaSemana];

}
    function getMesTexto () {
    const mesTexto = [`Janeiro`, `Fevereiro`, `Marco`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
    return mesTexto[mes];
}
    return `${pegarDia}, ${dia} de ${pegarMes} de ${ano}<br>${hora}:${min}:${sec}`;
}
    function texto () {
            const resultadoData = pegarData()
           // const p = criarP()
            const txt = document.querySelector('.container');
            txt.innerHTML = resultadoData;
           // p.innerHTML = resultadoData;
           // txt.appendChild(p)
            return txt
        }
        texto();
}
escopo();