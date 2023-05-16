/*
    Crie uma classe para representar carros.
    os carros possuem uma marca, uma cor e um gasto medio de combustivel por km, crie um metodo que dada a quantidade de km e o preço do combustivel nos da o valor gasto em reais para realizar este percurso
*/

class Carro {
    marca;
    cor;
    gastoKM;

    constructor(marca, cor, gastoKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKM = gastoKM;
    }

    despesaDaViagem(precoCombustivel, percursoEmKm) {
        return precoCombustivel * percursoEmKm * this.gastoKM;
    }
}



const pug = new Carro('Peugueot', 'preto', 1/6);
console.log(pug);
console.log(pug.despesaDaViagem(6.38, 70));