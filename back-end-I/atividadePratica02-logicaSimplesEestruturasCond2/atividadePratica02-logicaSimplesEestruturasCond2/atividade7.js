/*7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o
saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.*/

var contaCliente = 2000;
var taxa = 4.5;
var valorNota = 5;
var valorSaque = Number(prompt(`Quanto deseja sacar? Saldo atual = R$ ${contaCliente}`));
var totalSaque = valorSaque + taxa;

if ( valorSaque % valorNota !== 0 )
{
    console.log(`Informe um valor múltiplo de ${valorNota}`);
}
else if ( totalSaque > contaCliente )
{
    console.log("Saldo insuficiente");
}
else
{
    contaCliente = contaCliente - totalSaque;
    console.log(`Saque efetuado! Saldo = R$ ${contaCliente}`);
}