/*Primeiro desafio de javaScript

Faça um programa para calcular o gato de combustivel em uma viagem.

Você terá 3 variaveis, sendo elas:

 Preço do combustivel
 Valor medio gasto pelo carro
 Distancia em KM.

Imprima no console o valor de combustivel que sera gasto*/


const precoCombustivel = 6.58;
const valorMedio = 14;
const distancia = 250;

const valorTotal = precoCombustivel * (distancia / valorMedio);


console.log(valorTotal.toFixed(2));