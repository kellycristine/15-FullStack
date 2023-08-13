 // Função para capturar e exibir os dados preenchidos pelo usuário
 function capturarDados() {
    const formulario = document.getElementById('formulario');

    const nome = formulario.elements.nome.value;
    const endereco = formulario.elements.endereco.value;
    const cidade = formulario.elements.cidade.value;

    const cargo = [];
    const interesse = [];

    const validar = formulario.elements.cargo;
    for (let i = 0; i < validar.length; i++) {
        if (validar[i].checked) {
            cargo.push(validar[i].value);
        }
    }
    const checkboxes = formulario.elements.interesse;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            interesse.push(checkboxes[i].value);
        }
    }

    const miniCurriculo = formulario.elements['mini-curriculo'].value;

    console.log('Dados Preenchidos:');
    console.log('Nome:', nome);
    console.log('Endereco:', endereco);
    console.log('Cidade:', cidade);
    console.log('Natureza do Cargo: ', cargo)
    console.log('Área de interesse: ', interesse)
    console.log('Mini Currículo:', miniCurriculo);
}

// Event listener para capturar os dados quando o formulário for enviado
const form = document.getElementById('formulario');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    capturarDados();
});


function limparFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.reset();
}