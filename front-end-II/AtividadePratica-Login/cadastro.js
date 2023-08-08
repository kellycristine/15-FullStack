//Cadastro

const form = document.getElementById("form");
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nome = form.querySelector("input[name='nome']").value
    const email = form.querySelector("input[name='email']").value
    const senha = form.querySelector("input[name='senha']").value

    console.log("submit", nome, email, senha)
});