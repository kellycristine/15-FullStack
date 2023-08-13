import express from "express";

const app = express();

app.get("/", function (req, res) {
    console.log("rota");
});

app.listen(3000, function () {

});