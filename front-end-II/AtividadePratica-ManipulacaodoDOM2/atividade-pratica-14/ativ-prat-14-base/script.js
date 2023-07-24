 // 1-Capturando todos os elementos de classe "card"
 const elementosCard = document.getElementsByClassName("card");

 // Modificando os estilos dos elementos
 for (let i = 0; i < elementosCard.length; i++) {
   let elemento = elementosCard[i];

   // Aplicando estilos semelhantes à imagem
   elemento.style.backgroundColor = "#fa7c06";
   elemento.style.color = "#fff";
   elemento.style.padding = "30px";
   elemento.style.borderRadius = "35px";
   elemento.style.marginBottom = "20px";
   elemento.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
 }

  //2- Capturando todos os elementos de classe "titulo-card"
  const elementosTituloCard = document.getElementsByClassName("titulo-card");

  // Modificando os estilos dos elementos
  for (let i = 0; i < elementosTituloCard.length; i++) {
    let elemento = elementosTituloCard[i];

    // Aplicando estilos semelhantes à imagem
    elemento.style.color = "#2b385b";
    elemento.style.padding = "20px"

    //3- Alterando o texto para "Meu card"
    elemento.textContent = "Meu card";
  }

   // 4- Capturando todos os elementos de classe "descricao-card"
   const elementosDescricaoCard = document.getElementsByClassName("descricao-card");

   // Modificando os estilos dos elementos
   for (let i = 0; i < elementosDescricaoCard.length; i++) {
     let elemento = elementosDescricaoCard[i];

     // Aplicando estilos semelhantes à imagem
     elemento.style.color = "#fff";
     elemento.style.textAlign = "center";

     //5- Alterando o texto para "Descrição card"
    elemento.textContent = "Descrição modificada pelo JavaScript";
   }

    //6- Capturando todos os elementos de classe "botao-editar"
    const elementosBotaoEditar = document.getElementsByClassName("botao-editar");

    // Modificando os estilos dos elementos
    for (let i = 0; i < elementosBotaoEditar.length; i++) {
      let elemento = elementosBotaoEditar[i];

      // Aplicando estilos semelhantes à imagem
      elemento.style.backgroundColor = "#008000";
      elemento.style.color = "#fff";
      elemento.style.margin = "5px";
      elemento.style.borderRadius = "10px";
      elemento.style.padding = "10px";

     // 8- Adicionando o atributo 'onclick'
      elemento.setAttribute("onclick", "editarCard()");
    }

     // Função 'editarCard()' que será chamada ao clicar nos botões
        function editarCard() {
        alert("Clicou em Editar!");
    } 

     //7- Capturando todos os elementos de classe "botao-editar"
     const elementosBotaoApagar = document.getElementsByClassName("botao-apagar");

     // Modificando os estilos dos elementos
     for (let i = 0; i < elementosBotaoApagar.length; i++) {
       let elemento = elementosBotaoApagar[i];
 
       // Aplicando estilos semelhantes à imagem
       elemento.style.backgroundColor = "#ff0000";
       elemento.style.color = "#fff";
       elemento.style.margin = "5px";
       elemento.style.borderRadius = "10px";
       elemento.style.padding = "10px";
       
       //9- Adicionando o atributo 'onclick'
      elemento.setAttribute("onclick", "apagarCard()");
    }

    // Função 'apagarCard()' que será chamada ao clicar nos botões
    function apagarCard() {
      const confirmacao = confirm("Tem certeza que deseja apagar o card?");

      if (confirmacao) {
        alert("Confirmado!");
      } else {
        alert("Cancelou!");
      }
     }

