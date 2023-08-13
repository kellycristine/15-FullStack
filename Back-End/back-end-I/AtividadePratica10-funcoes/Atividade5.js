/*5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.

Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores */

function verificarPerfeicao(numero) {
    let somaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        somaDivisores += i;
      }
    }
  
    if (somaDivisores === numero) {
      return true; 
    } else {
      return false; 
    }
  }
  
  console.log(verificarPerfeicao(6)); 

  /*function verificarPerfeicao(numero) {
    let somaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        somaDivisores += i;
      }
    }
    return somaDivisores === numero;
    }
     let numero = verificarPerfeicao (
      parseInt(prompt("Digite um numero:"))
     )
    document.write(numero);
    */