//Criando a função
function soma() { 
    let ler_numero_A = document.getElementById("numeroA").value; //Capturando o valor 'A' digitado pelo usuário
    let ler_numero_B = document.getElementById("numeroB").value; //Capturando o valor 'B' digitado pelo usuário
    
    //convertendo valores que chegam como "Strings" em "Numbers"
    let numero_A = parseFloat(ler_numero_A); 
    let numero_B = parseFloat(ler_numero_B);
    
    //Somando os dois valores
    let resultado = numero_A + numero_B;
    
    //escrevendo para o usuario o resultado
    document.write(`A soma é ${resultado}<br>`);
}