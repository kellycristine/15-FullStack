//9. As maçãs desta estação custam R$0,30 se forem compradas
//menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
//doze. Desenvolva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

let numeroDeMacas = 5;

if(numeroDeMacas < 12){
    let valorCompra = numeroDeMacas * 0.30;
    console.log(`O valor da compra é R$${valorCompra}`);
} else {
    let valorCompra = numeroDeMacas * 0.25;
    console.log(`O valor da compra é R$${valorCompra}`);
} 