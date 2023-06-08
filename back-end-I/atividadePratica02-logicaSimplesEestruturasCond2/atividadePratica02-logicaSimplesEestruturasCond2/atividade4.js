//4. O custo de um carro novo ao consumidor é a soma do custo de
//fábrica com a porcentagem do distribuidor e dos impostos
//(aplicados ao custo de fábrica). Supondo que o percentual do
//distribuidor seja de 28% e os impostos de 45%, escrever um
//algoritmo para ler o custo de fábrica de um carro,calcular e escrever
//o custo final ao consumidor.

var custoDeFabrica = Number(prompt("Informe o valor do carro:"));
var imposto = (custoDeFabrica*45) /100;
var impostoDistribuidor = (custoDeFabrica*28) /100;
var acrescimo = impostoDistribuidor + imposto;
var valorConsumidor = custoDeFabrica + acrescimo;

document.write('O valor final do carro ao consumidor é: ' + valorConsumidor+'.');