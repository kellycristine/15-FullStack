class Carro { constructor(identificador, modelo, marca, ano, cor, preco) {
      this.identificador = identificador;
      this.modelo = modelo;
      this.marca = marca;
      this.ano = ano;
      this.cor = cor;
      this.preco = preco;
    }
  }
  
  class SistemaCRUD {
    constructor() {
      this.carros = [];
      this.identificadorAtual = 1;
    }
  
    mostrarMenu() {
      let menu = "Bem-vindo ao sistema de CRUD de veículos:\n";
      menu += "No momento, o sistema tem " + this.carros.length + " carros cadastrados\n";
      menu += "Escolha uma das opções para interagir com o sistema:\n";
      menu += "1 - Cadastrar veículo\n";
      menu += "2 - Listar todos os veículos\n";
      menu += "3 - Filtrar veículos por marca\n";
      menu += "4 - Atualizar veículo\n";
      menu += "5 - Remover veículo\n";
      menu += "6 - Sair do sistema";
  
      return parseInt(prompt(menu));
    }
  
    cadastrarVeiculo() {
      let modelo = prompt("Digite o modelo do veículo: ");
      let marca = prompt("Digite a marca do veículo: ");
      let ano = prompt("Digite o ano do veículo: ");
      let cor = prompt("Digite a cor do veículo: ");
      let preco = prompt("Digite o preço do veículo: ");
  
      let carro = new Carro(this.identificadorAtual, modelo, marca, ano, cor, preco);
      this.carros.push(carro);
      this.identificadorAtual++;
  
      alert("Veículo cadastrado com sucesso!");
    }
  
    listarVeiculos() {
      let lista = "";
  
      if (this.carros.length === 0) {
        lista = "Nenhum veículo cadastrado.";
      } else {
        lista = "Lista de veículos:\n";
        for (let carro of this.carros) {
          lista += "ID: " + carro.identificador + " | Modelo: " + carro.modelo + " | Marca: " + carro.marca +
            " | Ano: " + carro.ano + " | Cor: " + carro.cor + " | Preço: R$" + carro.preco + "\n";
        }
      }
  
      alert(lista);
    }
  
    filtrarVeiculosPorMarca() {
      let marca = prompt("Digite a marca para filtrar os veículos: ");
      let veiculosFiltrados = [];
  
      for (let carro of this.carros) {
        if (carro.marca.toLowerCase() === marca.toLowerCase()) {
          veiculosFiltrados.push(carro);
        }
      }
  
      if (veiculosFiltrados.length === 0) {
        alert("Nenhum veículo da marca " + marca + " foi encontrado.");
      } else {
        let lista = "Veículos da marca " + marca + ":\n";
        for (let carro of veiculosFiltrados) {
          lista += "ID: " + carro.identificador + " | Modelo: " + carro.modelo +
            " | Cor: " + carro.cor + " | Preço: R$" + carro.preco + "\n";
        }
        alert(lista);
      }
    }
  
    atualizarVeiculo() {
      let identificador = parseInt(prompt("Digite o identificador do veículo: "));
      let veiculoEncontrado = null;
  
      for (let carro of this.carros) {
        if (carro.identificador === identificador) {
          veiculoEncontrado = carro;
          break;
        }
      }
  
      if (veiculoEncontrado === null) {
        alert("Veículo não encontrado. Retornando ao menu inicial.");
        return;
      }
  
      let cor = prompt("Digite a nova cor do veículo: ");
      let preco = prompt("Digite o novo preço do veículo: ");
  
      veiculoEncontrado.cor = cor;
      veiculoEncontrado.preco = preco;
  
      alert("Veículo atualizado com sucesso!");
    }
  
    removerVeiculo() {
      let identificador = parseInt(prompt("Digite o identificador do veículo: "));
      let veiculoEncontrado = null;
      let indiceVeiculo = -1;
  
      for (let i = 0; i < this.carros.length; i++) {
        if (this.carros[i].identificador === identificador) {
          veiculoEncontrado = this.carros[i];
          indiceVeiculo = i;
          break;
        }
      }
  
      if (veiculoEncontrado === null) {
        alert("Veículo não encontrado. Retornando ao menu inicial.");
        return;
      }
  
      this.carros.splice(indiceVeiculo, 1);
      alert("Veículo removido com sucesso!");
    }
  
    executarSistema() {
      let opcao = 0;
      do {
        opcao = this.mostrarMenu();
  
        switch (opcao) {
          case 1:
            this.cadastrarVeiculo();
            break;
          case 2:
            this.listarVeiculos();
            break;
          case 3:
            this.filtrarVeiculosPorMarca();
            break;
          case 4:
            this.atualizarVeiculo();
            break;
          case 5:
            this.removerVeiculo();
            break;
          case 6:
            alert("Saindo do sistema...");
            break;
          default:
            alert("Opção inválida. Por favor, escolha uma opção válida.");
            break;
        }
      } while (opcao !== 6);
    }
  }
  
  let sistema = new SistemaCRUD();
  sistema.executarSistema();
  

  //