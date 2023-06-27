const fs = require('fs');
const http = require('http');

http.createServer(function(req, res){
    fs.readFile('letra.html', 'utf-8', function(err, data){
        if(err){
            console.log('Erro ao ler o arquivo', err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Erro interno de servidor')
            res.end();
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });
}).listen(8080); 