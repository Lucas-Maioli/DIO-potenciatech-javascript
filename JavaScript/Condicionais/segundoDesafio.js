/*Primeiro desafio de javaScript

Faça um programa para calcular o gato de combustivel em uma viagem.

Você terá 3 variaveis, sendo elas:

 Preço do etanol
 Preço da gasolina
 Qual o tipo de combustivel do carro   
 Preço do combustivel
 Valor medio gasto pelo carro
 Distancia em KM.

Imprima no console o valor de combustivel que sera gasto*/


const etanol = 5.35;
const gasolina = 6.58;
const tipoDeCombustivel = 'gasolina';
const precoCombustivel = 6.58;
const valorMedio = 14;
const distancia = 250;

let valorTotal = 0;

if (tipoDeCombustivel === 'etanol') {
    valorTotal = etanol * (distancia / valorMedio);
    console.log(valorTotal.toFixed(2));
} else {
    valorTotal = gasolina * (distancia / valorMedio);
    console.log(valorTotal.toFixed(2))
}
