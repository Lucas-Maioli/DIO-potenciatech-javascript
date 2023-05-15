/*
    Faça um algoritmo que dadas 3 notastirada por um alunoem um semestree da faculdade, que calcule e imprima a sua media conforme a tabela abaixo

    media = (nota 1 + nota 2 + nota 3) / 3

    Classificação:

    - media < 5 = reprovado;
    - media >= 5 e < 7 = prova final;
    - meia >= 7 = aprovado.
*/


const nota1 = 6;
const nota2 = 5;
const nota3 = 3;

const mediaFinal = (nota1 + nota2 + nota3) / 3;


if (mediaFinal >= 7) {
    console.log(mediaFinal.toFixed(2) + ' Aprovado');
} else if (mediaFinal < 5) {
    console.log(mediaFinal.toFixed(2) + ' Reprovado');
} else {
    console.log(mediaFinal.toFixed(2) + ' Prova final');
}