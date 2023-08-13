/* Desenvolva aqui a rotina */
// Obtém os elementos do DOM
const valorBaseInput = document.getElementById('valor_base');
const valorTransporteInput = document.getElementById('valor_transporte');
const valorAlimentacaoInput = document.getElementById('valor_alimentacao');
const valorReceitaInput = document.getElementById('valor_receita');
const valorAutomovelInput = document.getElementById('valor_automovel');
const faltasInput = document.getElementById('faltas');
const valorDescontosInput = document.getElementById('valor_descontos');
const valorTotalInput = document.getElementById('valor_total');
const btnCalcular = document.getElementById('btn_calcular');

// Função para calcular os valores
function calcularValores() {
    const valorBase = parseFloat(valorBaseInput.value);
    const valorTransporte = parseFloat(valorTransporteInput.value);
    const valorAlimentacao = parseFloat(valorAlimentacaoInput.value);
    const valorAutomovel = parseFloat(valorAutomovelInput.value);
    const faltas = parseFloat(faltasInput.value);

    const valorReceita = valorBase + valorTransporte + valorAlimentacao;
    valorReceitaInput.value = valorReceita.toFixed(2);

    const valorDescontos = valorAutomovel + faltas;
    valorDescontosInput.value = valorDescontos.toFixed(2);

    const valorTotal = valorReceita - valorDescontos;
    valorTotalInput.value = valorTotal.toFixed(2);
}

// Eventos de input para calcular automaticamente
valorBaseInput.addEventListener('input', calcularValores);
valorTransporteInput.addEventListener('input', calcularValores);
valorAlimentacaoInput.addEventListener('input', calcularValores);
valorAutomovelInput.addEventListener('input', calcularValores);
faltasInput.addEventListener('input', calcularValores);

// Evento de clique no botão "Calcular"
btnCalcular.addEventListener('click', calcularValores);