var banana = document.querySelector("body");
console.log(banana.innerHTML);


//usando innerHTML para criar um elemento
//banana.innerHTML = "<div>teste<button>banana </button></div>";

//criando um elemento
const div = document.createElement("div");
const texto = document.createTextNode("Texto da div");
div.appendChild(texto);

const button = docuemnt.createElement("button");
const textoButton = document.createTextNode("<p>teste</p>click aqui");
button.appendChild(textoButton);

button.id = "botao";
button.setAttribute("id", "botao2");
button.classList.add("class2");
button.setAttribute("class", "class2");

div.appendChild(button);
//representação do elemento criado com html
/**
 * <div>
 * Texto da div
 * <button>"<p>teste</p>"
 * click aqui
 * </button>
 * </div>
 */

//adicionando um elemento
const main = document.querySelector("main");
main.appendChild(div);

const p = document.grtElementsByTagName("p")[0];
p.appendChild(button);