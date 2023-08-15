const carros = document.querySelectorAll(".carro");
let tempos = [];

function iniciarCorrida() {
  carros.forEach((carro) => {
    const sorteio = sortearVelocidade();
    carro.setAttribute(
      "style",
      `transition: ${sorteio}s ease-in; margin-left: 90%;`
    );
  });
  testeBrokeCar();
  getGanhador();
}

function sortearVelocidade() {
  const sorteio = Math.random() * 4 + 5;
  tempos.push(sorteio);
  return sorteio;
}

function getGanhador() {
  const menorTempo = Math.min(...tempos);
  const index = tempos.findIndex((tempo) => tempo === menorTempo);
  if (index === 0) console.log("vermelho wins");
  if (index === 1) console.log("roxo wins");
  if (index === 2) console.log("verde wins");
  if (index === 3) console.log("rosa wins");
}

function testeBrokeCar() {
  setInterval(() => {
    const sorteio = Math.random();
    const sorteioCarro = Math.floor(Math.random() * 4);
    if (sorteio < 0.2) {
      let estiloComputado = window.getComputedStyle(carros[sorteioCarro]);
      let marginLeft = estiloComputado.getPropertyValue("margin-left");

      carros[sorteioCarro].style.animation = "brokeCar 2s forwards";
      carros[sorteioCarro].style.marginLeft = marginLeft;
      carros[sorteioCarro].style.transition = undefined;
    }
  }, 1000);
}

// rodrigo wins
