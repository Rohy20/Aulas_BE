//Variaveis é uma maneira de armazenar valores que serão utilizados em calculos ou vão poder armazenar valores resultantes de calculos.

var variavel1 = "ola"//OBS: "var" e uma maneira primitiva de se declarar uma variavel

//var          variavel1           =           "Ola"
// ↓             ↓                 ↓             ↓
//declarando    nome da           operacional   valor da
//uma           variavel          "igual a"     da variavel
//variavel

console.log(variavel1) 
//ao utilizar o console.log aqui, ele irá imprimir o valor da "variavel1".
//ou seja, irá imprimir a palavra "olá"

//o comando var passou a ser obsoleto no uso de back-end, por conta da insegurança do código, por exemplo. 

var shot = pew pew

var shot = bebida

console.log(shot)
//ao chamar o console.log, ele irá retornar os dois valores das variaveis "shot". 

//por isso foi começando a se ultilizar o comando "let"

//let nada mais é que dar um contexto a uma variavel
let variavel2 = "Ola2"
let variavel2 = "Ola2"
//perceba que a varivel deu um erro, isso pq a varivel "variavel2" já foi definida com "let" e não é possivel repitir outra.
//porém ainda é possivel sobscrever a variavel
let variavel2 = "ola2"
variavel2 = 1234
//foi feito aqui um sobscrição da variavel, o valor que tinha sido declarado como "ola", mudou agora para "1234"

//você tambem pode criar uma varivel sem declarar nada
variavel3 = "ola3"
console.log(variavel3)


//constante

const x = 5

x = "ola"

//Constante e uma variavel imutavel, nao pode ter o valor alterado ou sobscrito.
//Ao tentar executar, a varivel const, ira dar um erro, pq ja teve o valor declarado (= 5) e n pode ser sobscrito pra (= "ola")