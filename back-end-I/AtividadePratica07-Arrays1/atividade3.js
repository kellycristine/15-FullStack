/*3. Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela
*/

const arrayFrutas = ['morango', 'maçã', 'pera'];
arrayFrutas.push('laranja')
console.log(arrayFrutas)
arrayFrutas.pop();
console.log(arrayFrutas);
arrayFrutas.unshift('banana');
console.log(arrayFrutas);
arrayFrutas.shift()
console.log(arrayFrutas);


const arrayNumeros = [];
console.log(arrayNumeros);
arrayNumeros.push(1);
arrayNumeros.push(2);
arrayNumeros.push("dois", "três");
console.log(arrayNumeros);
console.log(arrayNumeros.length);

const arrayNum = [1, 2, 3];
arrayNum.pop()
console.log(arrayNum);
arrayNum.pop();
console.log(arrayNum)

const arrayNumm = [1, 2, 3];
const numerosRemovidos = arrayNumm.pop();
console.log(arrayNumm);
console.log(numerosRemovidos);


let arrayNumer = [];
arrayNumer.unshift(1, 2, 5, 7);
console.log(arrayNumer);
arrayNumer.unshift(0);
console.log(arrayNumer);

let arrayNume = [1, 2, 3, 6];
arrayNume.shift()
console.log(arrayNume);


