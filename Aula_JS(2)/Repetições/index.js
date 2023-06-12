//Pessoas (ARRAY DE OBJETOS)
let pessoas = [{
  nome: 'Rohy',
  sobrenome: 'Maia',
  idade: '21 anos',
  cidade: 'Brasilia'
},
{
  nome: 'Daniel',
  sobrenome: 'Silva',
  idade: '31 anos',
  cidade: 'Belo Horizonte',
},
{
  nome: 'Larissa',
  sobrenome: 'Tavares',
  idade: '25 anos',
  cidade: 'São Paulo',
}]

for(let x = 0; x < pessoas.length; x++){
    console.log(pessoas[x].idade)
}