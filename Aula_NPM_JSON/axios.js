//GET

const axios = require('axios');

// Faz uma requisição a um usuarío com um ID expecifico
axios.get('/user?ID=12345')
  .then(function(response){
    // manipula o sucesso da requisição
    console.log(response);
  })

  .catch(function(error){
    // manipula erros da requisição
    console.log(error);
  })
  .finally(function(){
    // sempre será executado
  })

// utilizando async e await
async function getuser(){
  try{
    const response = await axios.get('/user?ID=12345')
    console.log(response);
  } catch(error){
    console.log(error);
  }
}

//POST 
axios.post('/user',{
  firstName: Rohy,
  lastName: Maia
})

  .then(function (response) {
   console.log(response);
  })
  .catch(function (error) {
   console.error(error);
  });

//multiplas requisições
function getUserAccount(){
  return axios.get('/userID1907');
}

function getUserPermissions(){
  return axios.get('/user/1963/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });