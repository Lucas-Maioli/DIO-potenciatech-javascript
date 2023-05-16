function whatMyName(name){
    return ('My name is: ' + name);
}

function maioridade(idade) {
    if (idade >= 18) {
        return 'É maior de idade ' + idade;
    }else{
        return 'Não é maior de idade ' + idade;
    }
}

console.log(whatMyName('Lucas ') + maioridade(28));
//console.log(maioridade(28));
console.log(whatMyName('Poliana ') + maioridade(14));
//console.log(maioridade(14));