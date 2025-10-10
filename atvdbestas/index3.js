function ePaisagem (largura, altura) {
    if (largura > altura) {
        return(`Esta no modo paisagem`)
    } else {
        return(`Esta no modo retrato`)
    };
};

const largura = 1920;
const altura = 1080;

const resultado = ePaisagem(largura, altura);
console.log(resultado);