function escopo () {
 const form = document.querySelector(`.form`)

 const pessoas = [];

    function receberevento (evento) {
        evento.preventDefault()
        const nome = form.querySelector(`.nm`)
        const sobreNome = form.querySelector(`.sm`)
        const idade = form.querySelector(`.num`)
        const altura = form.querySelector(`.alt`)
        const peso = form.querySelector(`.kg`)

            const pessoa = {
            nome:nome.value,
            sobreNome:sobreNome.value,
            idade:idade.value,
            altura:altura.value,
            peso:peso.value
};

    function resultado () {
        const resultado = document.querySelector(`.resultado`)
        resultado.innerHTML += (`<br> Nome: ${nome.value}, Sobrenome: ${sobreNome.value}, Idade ${idade.value}, Altura: ${altura.value} e peso: ${peso.value}.`)
    };

    pessoas.push(pessoa)
    console.log(pessoas)
    resultado()
};


form.addEventListener('submit', receberevento)
};

escopo();