const elementos =[ 
    {tag: `p`, texto: `Aqui esta um frase qualquer`},
    {tag: `h3`, texto: `Frase com h3`},
    {tag: `h2`, texto: `Frase com h2`},
    {tag: `h1`, texto: `Frase com h1`}
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