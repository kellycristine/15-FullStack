// Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
// Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex
// Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter

const salarios = [
    5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0,
  ];
  
  let maiorQue = salarios.findIndex((salario) => salario > 7500);
  console.log(maiorQue);
  let salarioFiltrado = salarios.filter((salario) => salario > 8000);
  console.log(salarioFiltrado);