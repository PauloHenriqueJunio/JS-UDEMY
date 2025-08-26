function escopo() {
    const data = new Date();
    function zeroAEsq (num) {
        return num >= 10 ? num :`0${num}`;
    }
    function pegarData (){
        const dia = zeroAEsq(data.getDate());
        const diaSemana = data.getDay();
        const mes = data.getMonth();
        const ano = data.getFullYear();
        const hora = zeroAEsq(data.getHours());
        const min = zeroAEsq(data.getMinutes());
        const sec = zeroAEsq(data.getSeconds());
        const pegarMes = getMesTexto(mes);
        const pegarDia = pegarDiaTexto(diaSemana);

    function pegarDiaTexto() {
        const semanaTexto = [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];
        return semanaTexto[diaSemana];

}
    function getMesTexto () {
    const mesTexto = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];
    return mesTexto[mes];
}
    return `${pegarDia}, ${dia} de ${pegarMes} de ${ano}<br>${hora}:${min}:${sec}`;
}
    function texto () {
            const resultadoData = pegarData()
            const txt = document.querySelector('.container');
            txt.innerHTML = resultadoData;
            return txt
        }
        texto();
}
escopo();