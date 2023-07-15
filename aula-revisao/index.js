import express from "express";

const app = express();

app.use(express.json());

app.use(function (requisicao, resposta, proximo){
    console.log("passou pelo middleware");
    proximo();
});