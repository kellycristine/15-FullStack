/*
5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.
*/
function verificaNumero(vetor, numero) {
    return vetor.includes(numero);
  }
  
  
  let vetor = [1, 2, 3, 4, 5];
  let numero = 3;
  
  let resultado = verificaNumero(vetor, numero);
  console.log(resultado);