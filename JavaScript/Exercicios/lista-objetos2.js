/*
    Crie uma classe de pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    as pessoas devem tger a capacidade de dizer o valor do sei IMC(Idice de Massa Corpotal) imc = peso / altura^2. Instancie uma pessoa chamad Jose que tenha 70kg e 1.75 de altura, e peça para dizer o valor do seu imc
*/

class Pessoa{
    nome;
    altura;
    peso;

    constructor(nome, altura, peso){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarIMC(){
        const IMC = this.calculoIMC();
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
}

const jose = new Pessoa('Jose', 1.75, 70);
console.log(jose.classificarIMC());

