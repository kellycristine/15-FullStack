/*
4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.*/

function unirArrays(vetor1, vetor2) {
    let uniao = vetor1.concat(vetor2);
    return uniao;
  }
  

  let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let vetor2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  let resultado = unirArrays(vetor1, vetor2);
  console.log(resultado);
  