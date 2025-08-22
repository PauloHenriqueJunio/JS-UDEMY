const data = new Date('2025-08-22 17:41:32.500');
console.log(`Dia`, data.getDate());
console.log(`Mes`, data.getMonth() + 1); // Mes em javascript sempre comeca com indice 0
console.log(`Ano`, data.getFullYear());
console.log(`Hora`, data.getHours());
console.log(`Minutos`, data.getMinutes());
console.log(`Segundos`, data.getSeconds());
console.log(`ms`, data.getMilliseconds());
console.log(`Dia da semana`, data.getDay()); // 0 - Domingo, 6 - Sabado

console.log(data.toString());

// console.log(Date.now()) // isso daqui vai dar exatamente a data de hoje desde o marco zero (1 de 1970)