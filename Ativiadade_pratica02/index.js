const express = require('express');
const mongoose = require('mongoose');
const dotenv  = require ('dotenv');
const conectaDB = require('./db');
const gamesRouter = require ('./routes/Games.routes');

const port = 3000;

const app = express();

app.use(express.json());

dotenv.config();

conectaDB();

app.use('/games',gamesRouter);

app.use((err,req,res,next) => {
    console.error(`Erro:${err}`);

    if(err.name ==="CastError"){
        return res.status(400).json({erro:"Id invalido"});
    }

    if(err.name ==="ValidationError"){
        return res.status(400).json({erro:"Validação falhou", detalhes: err.errors});
    }

    res.status(500).json({erro:"Erro interno do servidor"});
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
})