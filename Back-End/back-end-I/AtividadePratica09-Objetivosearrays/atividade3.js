/*3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.*/

let aluno1 = {
	nome: "João",
  notas: [9, 10],
  media: 0
};
aluno1.media = (aluno1.notas[0] + aluno1.notas[1]) / 2;

let aluno2 = {
	nome: "Maria",
  notas: [10, 10],
  media: 0
};
aluno2.media = (aluno2.notas[0] + aluno2.notas[1]) / 2;

console.log("Aluno1:");
console.log(`Nome: ${aluno1.nome}`);
console.log(`Nota 1: ${aluno1.notas[0]}`);
console.log(`Nota 2: ${aluno1.notas[1]}`);
console.log(`Média ${aluno1.media}`);

console.log("Aluno2:");
console.log(`Nome: ${aluno2.nome}`);
console.log(`Nota 1: ${aluno2.notas[0]}`);
console.log(`Nota 2: ${aluno2.notas[1]}`);
console.log(`Média ${aluno2.media}`);

let mediaGeral = (aluno1.media + aluno2.media) / 2;

console.log("Média geral = " + mediaGeral);