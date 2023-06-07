//Chamando biblioteca HTTP
const {STATUS_CODE} = require('http');
const http = require('http');

//criando server 
http.createServer(function(req, res){
    if(req.url =='/primeirarequest'){
        res.write('Rota da primeria requisicao')
        res.end();
    }
    else{
        res.statusCode = 400;
        res.write('Deu erro, recursao nao disponivel')
        res.end();
    }
}).listen(8080);


