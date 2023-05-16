

function calcularIMC(peso, altura) {
    return IMC = peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso Normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Acima do peso';
    } else if (IMC >= 30 && IMC <= 40) {
        return 'Obesidade 1';
    } else {
        return 'Obesidade 2';
    }
}


//Main
(() => {
    const altura = 1.70;
    const peso = 70;
    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
})();





