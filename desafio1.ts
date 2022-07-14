// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Funcionario {
    codigo: number,
    nome: string
}

let func1 : Funcionario = {
    codigo : 10,
    nome : 'Wellington'
}
console.log('DESAFIO - 01 ');
console.log(func1);
