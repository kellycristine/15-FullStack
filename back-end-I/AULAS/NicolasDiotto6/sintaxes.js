// while
while ("condição") {
    //algoritimo executado caso a condição seja verdadeira
  }
  
  do {
    // Bem parecido como o while, diferença que sempre vai executar pelo menos uma vez o algoritimo mesmo que a condição seja falsa
  } while ("condição");
  
  //O for executa um bloco de codigo um numero especifico de vezes, controlado por uma expressao de inicialização, uma condição de teste e uma expressão de incremento ou decremento
  
  //for (expressao de inicialização; condição de repetição; expressao de  decremento ou incremento)
  for (let i = 0; i < 12; i++) {
    //algorimito executado a cada interação do for
  }
  
  // o For of é uma contrução mais simples que permite percorrer os elementos de um array sem a necessidade de um contador, ele itera diretamente sobre os valores dos elementos
  
  const elementos = [];
  for (const elemento of elementos) {
    //algoritimo executado em cada iteração do for
  }
  
  // Declaração de variaveis
  
  //variavel de escopo de bloco e permite a retribuição de valores
  let x = 1;
  
  //variavel de escopo de bloco, mas não permite a retribução de valores depois de declarada
  const y = 1;
  
  //o var cria variaveis com escopo de função ou escopo global
  var z;
  
  //Operadores de Comparação
  //Os operador de comparação são usados para comparar valores e retornar um resultado booleano (verdadeiro ou falso)
  
  //Operador <: Verifica se o valor do operando esquerdo é menor que o valor do operando direito
  const num = 2;
  const num2 = 3;
  
  //Neste caso o operadorMenor retornara verdadeiro
  const operadorMenor = num < num2;
  
  //Operador >: Verifica se o valor do operando esquerdo é maior que o valor do operando direito
  const num1 = 2;
  const num4 = 3;
  
  //Neste caso o operadorMaior retornara falso
  const operadorMaior = num > num2;
  
  //Operador >= : Verifica se o valor do operando esquerdo é maior ou igual que o valor do operando direito
  const num5 = 2;
  const num7 = 3;
  
  //Neste caso o operadorMenor retornara falso
  const operadorMaiorIgual = num >= num2;
  
  //Operador <= : Verifica se o valor do operando esquerdo é menor ou igual que o valor do operando direito
  const num8 = 3;
  const num9 = 3;
  
  //Neste caso o operadorMenor retornara verdadeiro
  const operadorMenorIgual = num <= num2;
  
  //Operadores lógicos
  //Os operadores lógios são usados para combinar ou negar valores booleanos
  
  //Operador && : retorna verdadeiro se os dois operandos forem verdadeiros
  const nota1 = 10;
  const nota2 = 9;
  
  //Neste caso retornaria verdadeiro pois os dois valores sao maiores que 7
  const passouDeAno = nota1 && nota2 > 7;
  
  //Operados || : retorna verdadeiro caso um dos operandos forem verdadeiros
  const nota3 = 11;
  const nota4 = 9;
  
  //Neste caso retornaria verdadeiro pois pelo menos 1 dos dois valores sao maiores que 11
  const maiorQue11 = nota1 || nota2 > 11;
  
  //Operadores de atribuição
  //Operadores de atribuição permitem que voçê atribua valores a variaveis
  
  //Operador += :  Adiciona o valor do operando direito ao esquerdo
  let operadoAt = 0;
  operadoAt += 1;
  
  //operadoAt = 1
  console.log(operadoAt);
  
  //Operador -= : Subtrai o valor do operando direito ao esquerdo
  
  let operadorAtS = 0;
  operadorAtS -= 1;
  
  //operadoAt = -1
  console.log(operadorAtS);
  
  //Estruturas condicionais
  
  if ("condição") {
    //execução do algoritimo caso a condição seja verdadeira
  } else if ("condição") {
    //se informado a execução dele depende de a condição do If for falsa e a sua condição for verdadeira e podemos ter varios else if encadeados
  } else {
    // se informado a execução dele depende de a condição do If for falsa
  }
  
  //o switch é usado para executar diferentes ações com base em diferentes condições, especificando os casos (case) com valores possiveis e o codigo a ser executado
  
  const key = 1;
  
  //key é a condição
  switch (key) {
    //se a key for igual a 1 vai ser executado o codigo fornecido
    case 1:
      //codigo executado caso case for verdadeiro
      break; // break e usado para parar o bloco de execução caso ja tenha atingido a condição
    default:
      //codigo executado caso nenhum case seja verdadeiro
      break;
  }
  
  //Objetos: estrutura de dados quem armazenam propriedades e metodos
  //Acessando dados: Os dados em objetos são acessados usando a sintaxe de ponto
  //(objeto.propriedade) podendo obter ou definir valor para propriedade
  
  let objeto = {};
  
  //Atribuindo valor
  //(objeto.novaPropriedade)
  objeto.nome = "Maria";
  objeto.genero = "F";
  objeto.idade = 24;
  console.log(objeto); //{ nome: 'Maria', genero: 'F', idade: 24 }
  
  let nome = "Juca";
  let idade = 18;
  let genero = "M";
  
  objeto = { nome, genero, idade };
  console.log(objeto); //{ nome: 'Juca', genero: 'M', idade: 18 }
  
  //Obtendo o valor
  
  //(objeto.propriedade)
  console.log(objeto.nome); //Juca
  
  //Pegando valores de uma propriedade de array de um obejto
  const novoObjeto = { nome: "Aluno", notas: [1, 5, 9, 0] };
  
  console.log(novoObjeto.notas); //aqui pegaria o array das notas
  
  console.log(novoObjeto.notas[0]); //aqui pegaria a nota de indice igual a 0
  
  var soma = 0;
  
  console.log(soma, "primeiro log");
  
  for (const notas of novoObjeto.notas) {
    soma += notas;
    console.log(notas); // em cada iteração do for vai ser logado uma nota
  }
  console.log(soma, "segundo log depois do for");
  
  for (const notas in novoObjeto.notas) {
    console.log(notas); // em cada iteração do for vai ser logado o indice de cada nota
  }
  const pessoa = { nome: "Luca", idade: 24 };
  
  for (let key in pessoa) {
    console.log(key + " " + pessoa[key]);
  }
  
  const frutas = ["banana", "maça"];
  
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  
  for (const key in frutas) {
    console.log(frutas[key]);
  }
  
  const newObj = { carro: "fusca" }; // key = carro e o valor = fusca
  
  let arrayNum = [1, 3];
  let arrayName = ["joao", "lucas"];
  
  const arrayCompleto = arrayNum.concat(arrayName);
  console.log(arrayCompleto);
  
  let num11 = [1, 3, 4];
  let arrayNum1 = [num11, 2];
  console.log(arrayNum1[0], arrayNum1[0][2], arrayNum1[1]);
  
  const arrayObjName = [{ name: "n" }, { name: "j" }];
  console.log(arrayObjName[1].name);