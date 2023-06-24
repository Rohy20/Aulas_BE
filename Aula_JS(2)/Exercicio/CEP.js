document.addEventListener('DOMContentLoaded', () => {
    // Selecionar os elementos HTML
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('Rua');
    const bairroInput = document.getElementById('Bairro');
    const cidadeInput = document.getElementById('Cidade');
    const estadoInput = document.getElementById('Estado');
    const cepButton = document.getElementById('CEPbutton');
  
    // Adicionar um evento de clique ao botão
    cepButton.addEventListener('click', buscarEndereco);
  
    // Função para buscar o endereço com base no CEP
    function buscarEndereco() {
      // Obter o valor do CEP digitado pelo usuário
      const cep = cepInput.value;
  
      // Fazer uma requisição usando a Fetch API para obter os dados do CEP
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          // Verificar se os dados foram retornados com sucesso
          if (data.erro) {
            // Exibir uma mensagem de erro caso o CEP seja inválido
            alert('CEP inválido. Digite um CEP válido.');
          } else {
            // Preencher os campos de endereço com os dados retornados
            ruaInput.value = data.logradouro;
            bairroInput.value = data.bairro;
            cidadeInput.value = data.localidade;
            estadoInput.value = data.uf;
          }
        })
        .catch(error => {
          // Tratar qualquer erro ocorrido durante a requisição
          console.error('Ocorreu um erro:', error);
        });
    }
  });