//3. Crie um programa que peça um número e verifique se ele é positivo,
//negativo ou zero.

var verificandoNumero = Number(prompt('Informe um número inteiro: '));
const number = parseInt(verificandoNumero);

if (number == 0)
    console.log("O número é zero");
else if (number < 0)
    console.log("O número é negativo");
else if (number > 0)
    console.log("O número é positivo");