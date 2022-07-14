// Como podemos melhorar o esse código usando TS? 

enum Profissao{
    Padeiro,
    Atriz,
    Professor
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}


let pessoa1 : Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}


let pessoa3 : Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 : Pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao :  Profissao.Padeiro
}
console.log('DESAFIO - 02 ');
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
