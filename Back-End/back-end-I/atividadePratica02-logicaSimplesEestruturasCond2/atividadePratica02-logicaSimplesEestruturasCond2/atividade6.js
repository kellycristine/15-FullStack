/* 6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.*/
   
    var num1 = 30;
    var num2 = 2;
    var operacao = "multiplicar"; //este irei mudar para puxar a equação correta 
    var resultado;
    if (operacao == "somar") {
        resultado = num1 + num2;
    } else if (operacao == "diminuir") {
        resultado = num1 - num2;
    } else if (operacao == "dividir") {
        resultado = num1 / num2;
    } else if (operacao == "multiplicar") {
        resultado = num1 * num2;
    }
    document.write(`O resultado é:  ${resultado}`);