//10. Escreva um algoritmo que tenha como valores de entradas o nome
//e idade do usuário e imprima no terminal o nome, a idade e o ano
//de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
//em 2000”.
//OBS: Pegue o ano atual como base

var nome = prompt(`Informe seu nome: `);
var idade= Number(prompt`Informe sua idade: `);
var ano = Number(prompt`Informe o ano atual: `);

var quantidadeLetras =  nome.length;
var anoNascimento = ano - idade;

console.log(`Nome: ${nome}, ${quantidadeLetras} letras.`);
console.log(`Idade: ${idade} anos, nasceu em: ${anoNascimento}`);