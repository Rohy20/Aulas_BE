//GET 
//GET === Pegar
//O método GET é usado quando o cliente está requisitando uma informação do servidor e servidor devolve ao cliente 

//CLIENTE                  SERVIDOR 
// |     |  ----------->   |     |
// |     |      REQ        |     |
// |     |  <----------    |     |
// |     |      RES        |     |



//POST 
//POST === POSTAR
//É basicamente o contrario do GET, o POST ocorre quando o cliente quer enviar algo ao servidor oui quando o servidor faz um requisição ao cliente
//CLIENTE                  SERVIDOR 
// |     |  ----------->   |     |
// |     |      RES        |     |
// |     |  <----------    |     |
// |     |      REQ        |     |



//PUT
//PUT === COLOCAR(SUBSTITUIR)
//É utilizado quando o cliente Altera/Edita alguma informação do servidor
//CLIENTE                  SERVIDOR 
// |     |   ---------->   |     |
// |     |      Editar     |     |
// |     |     Arquivo     |     |
// |     |   <----------   |     |       
// |     |     Arquivo     |     |
//             Editado    


//PATCH
//É parecido com o método PUT, porém serve para mudar apenas uma parte da informação
//EXEMPLO:
//Você está querendo atualizar um produto em e-commerce, porém você quer mudar apenas
//o nome desse produto, se o PUT for utilizado ele alterara TODO as informações do produto,
//Enquanto o PATCH consegue atualizar apenas o nome, ou apenas o preço. Depende da nescessidade.



//DELETE
//DELETE === DELETAR
//Basicamente ele exclui alguma informção
//CLIENTE                  SERVIDOR 
// |     |  ----------->   |     |
// |     |     Apagar      |     |
// |     |  <----X-----    |     |
// |     |    Apagado      |     |



//OPTIONS
//OPTIONS === OPÇÕES 
//Retorna metodos HTTP utilizadas por determinada rota



//HEAD
//HEAD === CABEÇALHO
//Retorna apenas cabeçalhos de uma resposta.