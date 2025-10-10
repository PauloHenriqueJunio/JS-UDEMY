const paragrafo = document.querySelector('.container');
const ps = paragrafo.querySelectorAll('p');

const bodyColor = getComputedStyle(document.body);
const corBody = bodyColor.backgroundColor;


for (let p of ps) {
    p.style.backgroundColor = corBody
    p.style.color = '#ff0202ff'
    console.log(p)
};