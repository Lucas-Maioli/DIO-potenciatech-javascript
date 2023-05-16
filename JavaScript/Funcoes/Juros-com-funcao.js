

function aplicarDesconto(valor, percentualDesconto) {
    const aplicarDesconto = (percentualDesconto / 100) * valor;
    return valor - aplicarDesconto;
}

function AplicarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

//console.log(aplicarDesconto(100, 15));

function formaDePagamento(pagamento) {
    if (pagamento === 1) {
        return ('O valor foi: R$', aplicarDesconto(valor, 10));
    }else if (pagamento === 2) {
        return ('O valor foi: R$', aplicarDesconto(valor, 15));
    }else if (pagamento === 3) {
        return ('O valor foi: R$' + valor);
    }else{
        return ('O valor foi: R$', AplicarJuros(valor, 10));
    }
}


    const valor = 100;

    const pagamento = 4;

    console.log(formaDePagamento(pagamento));




