/*
3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.
*/

let numerosPerfeitos = [];
let numero = 0;
let num = 2;

while (numero < 4) {
  let soma = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      soma += i;
    }
  }
  
  
      soma += i;
   
if (soma === num) {
    numerosPerfeitos.push(num);
    numero++;
  }
  
  num++;
}

console.log(numerosPerfeitos);