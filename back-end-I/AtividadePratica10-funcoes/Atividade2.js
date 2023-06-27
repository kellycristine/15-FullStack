/*2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. */
function numero(inteiro) {
    if (inteiro % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }
  console.log(numero(6));

  /*
  function eImpar(numero) {
    return numero % 2!== 0;

  }
  let numero = parseInt(prompt("Digite um número"));
  console.log(eImpar(numero));
  */