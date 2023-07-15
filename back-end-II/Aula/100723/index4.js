import { users } from "./usuarios.js";

export default function expressRecados(app) {
  let idRecado = 0;

  //Rota para criar um recado
  app.post("/recados/:id", (req, res) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    const recado = { id: idRecado, titulo, descricao };
    const user = users.find((e) => e.id === parseInt(id));

    if (!user) {
      return res.status(404).json({ error: "Usuario não encontrado" });
    }
    user.recados.push(recado);
    idRecado++;
    return res
      .status(201)
      .json({ mensagem: "Recado criado com sucesso", user });
  });
}