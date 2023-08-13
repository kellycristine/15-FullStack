//11. Crie um algoritmo que armazene um número inteiro positivo, e gere
//um alerta com as seguintes mensagens:
//a. “Número é par!”, se o valor armazenado for par;
//b. “Número é impar!”, se o valor armazenado for ímpar;

var numero = 10;
var resto = numero % 2;

if(resto === 0) {
    alert(`O número ${numero} é par!`)
} else {
    alert(`O número ${numero} é impar!`)
}