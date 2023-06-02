//Function em sua tradução é basicamente funções. Na programação, é uma série de instruções que serão executadas ao serem 'convocadas'
//Exemplo: Funçao soma
function soma1(x, y){ //"function" => declarando uma função, "soma" => declarando nome da função, (x, y) variaveis da função
    return x + y //return => quer dizer "retornar"
}

console.log(soma1(10, 20))

//irá retornar a soma de 10 e 20 que é = 30

//foi uma serie de instruções executadas aqui. 
//pegue um numero 'x'
//pegue um numero 'y'
//retorne a soma de x e y
//execute

//--------------------------------------------------------------------------------------------------------------------------------------
//outras formas de declarar funcoes atribuidas a variaveis
//funcao anonima
//const segundaFuncao = function (){}

//funcao seta - arrow function
//const terceiraFuncao = () => {}
//---------------------------------------------------------------------------------------------------------------------------------------

const soma2 = function(x, y){
   console.log(x + y)
}

const soma3 = (x, y) => {
   console.log(x + y)
}

soma2(10, 20)
soma3(10, 20)