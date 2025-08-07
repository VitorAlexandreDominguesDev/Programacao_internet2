const express = require('express');
const app =  express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({message:'Hello World' });
});

// Rota com parametro na Url 
app.get('/hello/:nome', (req,res) => {
    const nome  = req.params.nome;
    res.json({message: `Hello ${nome}`});
});

//Rota com paramentros na query string 
app.get('/pesquisa', (req,res) => {
    const nome  = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const mensagem = `${nome} ${sobrenome}`;
    res.json({message: `Hello ${mensagem}`});
    // Exemplo  de rota 
    // http:localhost:3000/pesquisa?nome=Vitor&sobrenome=Alexandre 
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});