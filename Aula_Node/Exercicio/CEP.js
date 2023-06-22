//importando modulos
const https = require('follow-redirects').https;
const fs = require('fs');

//Definindo URL
const BASE_URL = 'example.api.findcep.com';

let options = {
  'method': 'GET',
  'hostname': BASE_URL,
  'path': '/v1/cep/01234000.json',
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
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

//finalizando requisição
req.end();