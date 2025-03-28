//usar o comando npm init para criar o pacote json e preparar para inicializar a aplicação web
//npm é o gerenciador de pacotes do node

//antes de começar, baixamos o pacote express por meio do comando npm install express@4.21.2
//use ./nome_do_arquivo.js no cmd para executar a aplicação e conseguir rodar web

const express = require('express')  //cria uma var e coloca o conteudo do pacote baixado express
const calculadora = require('./calculadora.js')   //request do arquivo calculadora
const aplicacao = express()

//requisições e respostas para a raíz
aplicacao.get('/', (requisicao, resposta)=>{        //req. e resp. sao apenas parametros para essa função (e essa função é requerida pela função .get)
    let var_html = '<h1>calculadora</h1>';          //criando uma var html e concatenando textos para serem enviados a aplicação
    var_html += '<h3>opções:</h3>';
    var_html += '<h4>somar || subtrair || multiplicar || dividir</h4>';
    resposta.send(var_html);
})

//requisições e respostas para localhost:8080/somar
aplicacao.get('/somar/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);            //requisição de a -> força a ser um numero
    let b = Number(requisicao.params.b);            //requisição de b -> força a ser um numero
    resposta.send(`${a} + ${b} = ${calculadora.somar(a,b)}`)    //resposta de quando o for colocado a url
});

//requisições e respostas para localhost:8080/subtrair
aplicacao.get('/subtrair/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);           
    let b = Number(requisicao.params.b);          
    resposta.send(`${a} - ${b} = ${calculadora.subtrair(a,b)}`) 
});

//requisições e respostas para localhost:8080/multiplicar
aplicacao.get('/multiplicar/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);           
    let b = Number(requisicao.params.b);          
    resposta.send(`${a} * ${b} = ${calculadora.multiplicar(a,b)}`) 
});

//requisições e respostas para localhost:8080/dividir
aplicacao.get('/dividir/:a/:b', (requisicao, resposta)=>{
    let a = Number(requisicao.params.a);           
    let b = Number(requisicao.params.b);          
    resposta.send(`${a} / ${b} = ${calculadora.dividir(a,b)}`) 
});

const porta = 8080                  //em casos reais, nao use a porta 8080 qndo lançar a aplicação, pois esta é uma porta padrão e comumente usada

aplicacao.listen(porta, ()=>{       //()=> nada mais é do que uma função em formato abreviado.
    console.log('aplicacao rodando na porta' +porta)
});


