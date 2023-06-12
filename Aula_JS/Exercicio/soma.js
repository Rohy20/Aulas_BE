function soma() {
    let ler_numero_A = document.getElementById("numeroA").value;
    let ler_numero_B = document.getElementById("numeroB").value;
    
    let numero_A = parseFloat(ler_numero_A);
    let numero_B = parseFloat(ler_numero_B);
    
    let resultado = numero_A + numero_B;
    
    document.write(`A soma é ${resultado}<br>`);
}