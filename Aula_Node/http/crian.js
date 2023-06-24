//requisitar modulo http 
const http = require('http');

//objeto que será convertido em JSON
const eu = {
    nome: 'rohy',
    sobrenome: 'maia',
    idade: '21',
    altura: '1,60',
    categoria:  'ANÃO'
};

//criando servidor 
http.createServer(function(req, res){ //tratando requisição e resposta
   if(req.url == '/essaurlvaifuncionar'){
    if(req.method === 'GET'){
        res.setHeader('content-type', 'application/json')
        const ob_JSON = JSON.stringfy(eu);
        res.write('Essa URL funfa mesmo.GET')
        res.end(ob_JSON);
    }
    else if(req.method === 'POST'){
        res.write('Essa URL funfa mesmo.POST')
        res.end();
    }
    else{
         res.statusCode = 400;
         res.write('Método HTTP não suportado');
         res.end();
    }
   }
   else {
    res.statusCode = 404;
      res.write('URL não encontrada');
      res.end()
   }
}).listen(8080) //evento 'listen' que define qual porta o serviço está conectado

console.log('O sevidor tá ativo') //exibindo mensagem de sucesso no terminal 
