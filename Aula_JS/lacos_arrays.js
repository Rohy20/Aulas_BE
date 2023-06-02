//imagine que vc precisa fazer uma situação em que vc tivesse que fazer uma lista de alunos e vc fizesse assim:
/**
 * let aluno1_nome = "Luiz"
 * let aluno2_nome = "Mario"
 * let aluno3_nome = "Luigi"
 * 
 * //e tivesse que manipular cada o aluno1, teria que chamar 
 * 
 * console.log(aluno1_nome);
 * 
 * //e para manipular o aluno 2?
 * 
 * console.log(aluno2_nome);
 * 
 * //e assim sucessivamente... e para adicionar outro aluno, teria que criar outra variavel(let), para outro aluno e colocar o nome dele. 
 * //isso seria extremamente trabalhoso, e nada pratico.
 */

//por isso existem as "Arrays" reprensentadas por '[]' 

//let alunos = ["Luiz", "Mario", "Luigi"] //[] -> declarando array
//
//console.log(alunos[0]) //[0] -> posição do item solicitado na array
//console.log(alunos[1])
//console.log(alunos[2])
//
//Fizemos aqui a mesma coisa, só que de maneira bem mais pratica utilizando uma array, mas ainda não é o ideal, de certa forma ainda
//temos que perder muito tempo digitando uma array

//Por isso surgiu o uso de "LOOPS", atraves de While e For

//WHILE: Enquanto uma condição 'x' for verdadeira, faça tal ação

let alunos = ["Luiz", "Mario", "Luigi"] 

let contador = 0 //variavel auxiliar

while(contador < alunos.length){ //Enquanto "contador" for menor que o tamanho da array "alunos"
        console.log(alunos[contador])
        contador ++ 
}

//aqui ele vai imprimir o nome do alunos na array da variavel "alunos"

//Mas existe uma forma de encurtamos mais ainda esse codigo, utilizando o "FOR"
//
//FOR: é uma estrutura de controle de fluxo que permite a repetição de um bloco de código por um número determinado de vezes.

//let alunos = ["Luiz", "Mario", "Luigi"] 

for(let i = 0; i < alunos.length; i++){ // 'i' = a let contador que criamos la em cima
    console.log(alunos[i])
}

//aqui será executado a mesma função, so que de maneira ainda mais pratica.