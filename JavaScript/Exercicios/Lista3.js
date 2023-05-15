/* 
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considferando o preço normal de etiqueta e a condição de pagamento.

    Utilize os codigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o calculo adequado.

    Condição de pagamento:
    - A vista debito = 10% de desconto;
    - dinheiro ou pix = 15% de desconto;
    - parcelado 2x = preço de etiqueta sem juros;
    - acima de duas vezes = preço normal de etiqueta e juros 10%.
*/


const produto = 120;

const pagamento = 2;

if (pagamento === 1) {
    console.log('O valor foi: R$', + produto - (produto * 0.10));
}else if (pagamento === 2) {
    console.log('O valor foi: R$', + produto - (produto * 0.15));
}else if (pagamento === 3) {
    console.log('O valor foi: R$', + produto);
}else{
    console.log('O valor foi: R$', + produto + (produto * 0.10));
}
