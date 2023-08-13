const express = require("express");
const app = express();
app.use(express.json());

//Array para armazenar os usuarios
const users = [];
let id = 0;

//Rota para criar um usuario
app.post("/users", (req, res) => {
  const { nome, senha } = req.body;
  const user = { id, nome, senha };
  users.push(user);
  id++;
  res.status(201).json({ mensagem: "usuario criado com sucesso", user: user });
});

//Rota para listar todos os usuarios
app.get("/users", (req, res) => {
  res.json(users);
});

//Rota para obter o usuario pelo ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((e) => e.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }
  return res.status(200).json({ mesagem: "Usuario encontrado!", user: user });
});

//Rota para atualizar o usuario pelo ID

//Rota para deletar um usuario pelo ID

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});