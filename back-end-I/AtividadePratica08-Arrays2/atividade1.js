/*
1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.
*/

const vetores = [1, 5, 66, 7, 9, 8, 22, 11, 23, 45, 72, 68, 98, 55, 29 ];
for (const vetor of vetores) {
    if (vetor % 2 === 0){
    console.log(vetor);
    }
}