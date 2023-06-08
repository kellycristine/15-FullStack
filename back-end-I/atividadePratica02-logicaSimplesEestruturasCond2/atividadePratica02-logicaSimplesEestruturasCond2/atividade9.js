/*9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida. */

var velocidade = Number(prompt('Informe a velocidade do carro (km/h): '));
var limite = 80;
var multa = 5;

    if (velocidade > limite)
    {
        var excesso = velocidade - limite;
        var valorMulta = excesso * multa;

        console.log(`Você foi multado em R$ ${valorMulta}`);
    }
    else
    {
        console.log(`Parabéns! Você é um cidadão exemplar.`);
    }