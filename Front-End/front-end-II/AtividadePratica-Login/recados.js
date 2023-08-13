//Recados

const form = document.getElementById("form-recados");
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const titulo = form.querySelector("input[name='titulo']").value
    const descricao = form.querySelector("textarea[name='descricao']").value
    console.log("submit", titulo, descricao)

});