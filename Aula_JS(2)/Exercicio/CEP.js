//Captando dados inseridos pelo usuário
const cep = document.getElementById("cep");
const Rua = document.getElementById("Rua");
const Bairro = document.getElementById("Bairro");
const Cidade = document.getElementById("Cidade");
const Estado = document.getElementById("Estado");


//criando função
    cep.addEventListener('blur', async (e) => { 
        e.preventDefault(); 
    
        await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(response => {
                return response.json().then(
                    data => {
                        Rua.value       = data.logradouro;
                        Bairro.value = data.bairro;
                        Cidade.value         = data.localidade;
                        Estado.value        = data.uf;
                        sessionStorage.setItem("address", JSON.stringify(data));
                }
            )
    });

    
    
})