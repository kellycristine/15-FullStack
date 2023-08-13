// 3. Crie três variáveis, na primeira variável coloque o total de uma compra, por exemplo 149.90. Na segunda variável coloque a quantidade de parcelas, por exemplo 2. Na terceira variável coloque o valor da parcela. Apresente no documento html as seguintes informações: "O valor total da compra foi R$_,_" "Forma de pagamento: _x de R$_,_"

var valorTotalCompra = 149.90;
var quantidadeDeParcelas = 2;
var valorDaParcela = valorTotalCompra / quantidadeDeParcelas;

document.write('<h2> O valor total da compra foi R$: ' + valorTotalCompra + '</h2>');
document.write('<h2>Forma de pagamento: ' + quantidadeDeParcelas + 'x de R$: ' + valorDaParcela + ' </h2>');
