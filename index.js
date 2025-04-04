const express = require('express');
const aplicacao = express();
const estoque = require('./estoque');

aplicacao.get('/', (requisicao, resposta)=>{
    let html = "<h1>app_estoque</h1>"
    html += "<h2>Rotas Disponiveis</h2>"
    html+="<p>/adicionar/:id/:nome/:qntd</p>"
    html+="<p>/listar</p>"
    html+="<p>/remover</p>"
    html+="<p>/editar/:id/:qtd</p>"
    resposta.send(html);
});

aplicacao.get('/adicionar/:id/:nome/:qntd',(requisicao,resposta)=>{
    let item ={
        id: Number(requisicao.params.id),
        nome: requisicao.params.nome,
        qntd: Number(requisicao.params.qntd)
    };
    resposta.send(estoque.adicionar(item));
});

aplicacao.get('/listar',(requisicao,resposta)=>{
    resposta.send(estoque.listar());
})

aplicacao.get('/remover',(requisicao,resposta)=>{

})

aplicacao.get('/editar/:id/:qntd', (requisicao,resposta)=>{
    let id = Number(requisicao.params.id);
    let qntd = Number(requisicao.params.qntd);

    resposta.send(estoque.editar(id,qntd))
});

//geralmente essa parte do código fica por ultimo
const PORT = 8080; 
aplicacao.listen(PORT,()=>{
    console.log("app rodando na porta "+PORT);
});
