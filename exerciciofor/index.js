const elementos =[ 
    {tag: `p`, texto: `Aqui esta um frase qualquer`},
    {tag: `div`, texto: `Frase 1`},
    {tag: `p`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`}
]

const container = document.querySelector(`.container`);
const div = document.createElement(`p`);

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada)
}
container.appendChild(div)