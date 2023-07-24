const butao = document.querySelector("button");

const div = document.querySelector("div");
div.addEventListener("Click", function (evento){
    console.log("Clicou na div", evento.curretentTarget);
})
butao.addEventListener("click", function(evento){
    console.log("clicou", evento.currentTarget);
});