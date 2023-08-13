/*6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomes = [];

rl.question("Digite o primeiro nome: ", (Édson) => {
  nomes.push(Édson);

  rl.question("Digite o segundo nome: ", (Marcelo) => {
    nomes.push(Marcelo);

    rl.question("Digite o terceiro nome: ", (Letícia) => {
      nomes.push(Letícia);

      rl.question("Digite o quarto nome: ", (Ju) => {
        nomes.push(Ju);

        rl.question("Digite o quinto nome: ", (Thobias) => {
          nomes.push(Thobias);

          console.log("Lista de nomes: " + nomes.join(", "));
          console.log("Nomes na ordem inversa: " + nomes.reverse().join(", "));

          rl.close();
        });
      });
    });
  });
});