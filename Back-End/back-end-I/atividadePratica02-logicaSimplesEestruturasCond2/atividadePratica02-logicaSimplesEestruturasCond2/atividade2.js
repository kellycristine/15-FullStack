//2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
//semana correspondente utilizando a estrutura condicional switch.

var diaDaSemanaNum = Number(prompt('Informe um número correspondente ao dia da semana: '));
var diaDaSemanaStr;

    switch (parseInt(diaDaSemanaNum)) {
        case 1:
            diaDaSemanaStr = "Domingo";
            break;
        case 2:
            diaDaSemanaStr = "Segunda-feira";
            break;
        case 3:
            diaDaSemanaStr = "Terça-feira";
            break;
        case 4:
            diaDaSemanaStr = "Quarta-feira";
            break;
        case 5:
            diaDaSemanaStr = "Quinta-feira";
            break;
        case 6:
            diaDaSemanaStr = "Sexta-feira";
            break;
        case 7:
            diaDaSemanaStr = "Sábado";
            break;
        default:
            diaDaSemanaStr = "Valor inválido";
    }

    console.log(`Você selecionou o dia: ${diaDaSemanaStr}`);
