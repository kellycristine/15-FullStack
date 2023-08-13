//Metodo some é usado para verificar se pelo menor um elemento do array satisfaz uma condição

//seu retorno é um valor booleano, true ou false
const numeros = [{ salario: 2600 }, { salario: 9000 }];

const some = numeros.some((element) => element.salario > 7000);

console.log(some);

//Método find