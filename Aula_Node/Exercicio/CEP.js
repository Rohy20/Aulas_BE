//importando modulos
const https = require('follow-redirects').https;

//Definindo URL
const BASE_URL = 'viacep.com.br';

let options = {
  'method': 'GET',
  'hostname': BASE_URL,
  'path': '/ws/01001000/json/',
};

//Fazendo requisição HTTP
let req = https.request(options, function (res) {
  let chunks = [];

  //tratando eventos de resposta
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    let body = Buffer.concat(chunks);
    const endereco = JSON.parse(body.toString());
    console.log("Endereço:", endereco);
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

//finalizando requisição
req.end(); 
