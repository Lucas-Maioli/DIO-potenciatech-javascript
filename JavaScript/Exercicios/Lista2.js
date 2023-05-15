/* 
    O IMC(Indice de massa corporal), é um critério da organização mundial da saude para dar uma indicação sobre a condição de peso de uma pessoa audlta.
    
    Formula do IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso da pessoa mostre a condição de acordo com a tabela abaixo

    IMC:
    - < 18.5 = abaixo do peso;
    - >= 18.5 e < 25 = peso normal;
    - >= 25 e < 30 = acima do peso;
    - >= 30 e <= 40 = obeesidade 1;
    - > 40 = obesidade 2;
*/


const altura = 1.70;
const peso = 70;

const IMC = peso / (altura * altura);
console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso Normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso');
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Obesidade 1');
} else {
    console.log('Obesidade 2');
}