//Uma condicional verifica se um operação é verdadeira ou falsa (0 , 1)

//OPERADORES LOGICOS
//AND(&&) = E Duas condições precisam ser verdadeiras
//OR(||) = OU Quando um é verdadeiro, todos são verdadeiros
//NOT(!) = NÃO Se o valor for verdadeiro ele retorna falso e se o valor for falso ele retorna verdadeiro.
//NOR() = 
//XOR(^) = EXCLUSIVO Assim como OR, se um for verdadeiro, retorna verdadeiro, mas se dois forem verdadeiros, retorna falso. E se os dois forem falsos = falso
//XAND() = 

//AND 
console.log(true && true)//true 
console.log(false && false)//true
console.log(true && false)//false

//OR
console.log(true || true)//true 
console.log(false || false)//false
console.log(true || false)//true

//NOT
console.log(!true)//false
console.log(!false)//true
console.log(!!true)//true -> realizou duas conversoes, ! true -> false, ! false -> true 

//NOR


//XOR
console.log(true ^ true)//false
console.log(false ^ false)//false
console.log(true ^ false)//true

//XAND

//------------------------------------------------------------------------------------------------------------

//if("nome"){ //if = 'se'. Ex: "SE" tal afirmação for verdadeira - executar tal ação 

//}
//else{ //se não, faz outra ação

//}
//-------------------------------------------------------------------------------------------------------------
//Exemplos de uso com variaveis

let variavel1 = true
let variavel2 = false

//AND 
if(variavel1 && variavel2){
    console.log("A logica é verdadeira")
}
else{
    console.log("A logica é falsa")
}

//o que vai ser impresso vai ser "a logica é falsa", pq true and false = false

if(variavel1 && variavel1){
    console.log("A logica é verdadeira")
}
else{
    console.log("A logica é falsa")
}
//o que vai ser impresso vai ser "a logica é verdadeira", pq true and true = true


//OR
if(variavel1 || variavel2){
    console.log("A logica é verdadeira")
}
else{
    console.log("A logica é falsa")
}

//o que vai ser impresso vai ser "a logica é verdadeira", pq true or false = true

let palavra1 = "texto"
let palavra2 = "text"
let palavra3 = "texto"

//1
if(palavra1 === palavra2){//=== quer dizer > identico a
    console.log("as palavras são iguais")
}
else{
    console.log("as palavras são diferentes")
}

//2
if(palavra1 === palavra3){
    console.log("as palavras são iguais")
}
else{
    console.log("as palavras são diferentes")
}

//1 = vai retornar, as palavras são diferentes
//2 = vai retornar, as palavras são iguais
//---------------------------------------------------------------------------------------------------------------
//Exemplo de uso com multiplas condicionais

/** 
 * entre 0 - 12 -> bom dia 
 * entre 12 - 18 -> boa tarde
 *  entre 18 - 24 -> boa noite
*/

const hora = 16
if(hora >= 0 && hora < 12){
    console.log("bom dia!")
}
else if(hora >= 12 && hora < 18){//else if = se não se
    console.log("boa tarde!")
}
else if(hora >= 18 && hora < 24){
    console.log("boa noite!")
}
else{
    console.log("hora invalida")
}