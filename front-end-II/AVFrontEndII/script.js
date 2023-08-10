const express = requeri('express');
const server = express();
import api from './src/services/Api';

server.lister(3000, () =>{
    console.log("deu certo")
});