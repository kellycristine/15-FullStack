//8. Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
//a. ‘Números iguais’, caso os números sejam iguais;
//b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valor1 = 40;
let valor2 = 25;

if(valor1 === valor2){
    console.log(`Os números ${valor1} e ${valor2} são iguais`);
} else if(valor1 > valor2) {
    console.log(`O numero ${valor1} é maior.`);
} else {
    console.log(`O numero ${valor2} é maior.`);
}

