const express = require("express");
const app = express();

const user = [];

app.use(express.json());

app.listen(3000, () =>{
    console.log("Servidor iniciado na porta 3000");
});