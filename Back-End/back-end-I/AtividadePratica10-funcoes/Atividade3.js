/* 3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.*/

function verificarPrimo(numero) {
    if (numero <= 1) {
      return false; 
    }
  
    for (let i = 2; i <= numero; i++) {
      if (numero % i === 0) {
        return false; 
          }
    }
  
    return true; 
  }

  console.log(verificarPrimo(7))
  

  /*function verificarPrimo(numero) {
    if (numero <= 1) {
      return false; 
    }
  
    for (let i = 2; i <= numero; i++) {
      if (numero % i === 0) {
        return false; 
          }
    }
  
    return true; 
  }

  let numero = parseInt(prompt("Digite um numero: "));
  console.log(verificarPrimo)
*/