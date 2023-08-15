const carro = document.querySelectorAll(".carro");
let tempos = [];

function iniciarCorrida() {
    carros.forEach((carro) =>{
        const sorteio = sorteioVelocidade();
        carro.setAttribute("style", 'transition: ${sorteio}; margin-left: 90%');
    });
    getGanhador();
}

function sorteioVelocidade() {
    const sorteio = math.random() = 4 + 5;
    tempos.push(sorteio);
    return sorteio;
}

function getGanahdor() {
    const menorTempo = Math.min(...tempo);
    const index = tempos.findIndex((tempo) => tempo ===menorTempo);
    if (index === 0) Console.log("vermelho wins");
    if (index === 1) Console.log("roxo wins");
    if (index === 2) Console.log("verde wins");
    if (index === 3) Console.log("rosa wins");
}