function escopo () {
 const form = document.querySelector(`.form`)

 function resultado () {
    const resultado = document.querySelector(`.resultado`)


 };

 const pessoas = [];

function receberevento (evento) {
    evento.preventDefault()
    const nome = form.querySelector(`.nm`)
    const sobreNome = form.querySelector(`.sm`)
    const idade = form.querySelector(`.num`)
    const altura = form.querySelector(`.alt`)
    const peso = form.querySelector(`.kg`)
    
    console.log(nome.value, sobreNome.value, peso.value, altura.value, idade.value)
};

form.addEventListener('submit', receberevento)
};

escopo();