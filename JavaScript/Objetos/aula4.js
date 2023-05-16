class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velha(o) que ${pessoa2.nome}`);
    }else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velha(o) que ${pessoa1.nome}`);
    }else{
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const lucas = new Pessoa('Lucas', 29);
const poliana = new Pessoa('Poliana', 36);

compararPessoas(lucas, poliana);

/*const lucas = {
    nome: 'Lucas P Maioli',
    idade: 25,
    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

lucas.descrever();*/