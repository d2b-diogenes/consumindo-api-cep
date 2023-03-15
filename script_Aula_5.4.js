async function buscaEndereco (cep) { 

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        var consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não existe');
        }
    
    // Foram criados a variáveis para os elementos INPUTs que irão receber os valores do CEP
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');        
        var estado = document.getElementById('estado');

    //As variáveis recebendo o os valores vindo da busca do CEP
        logradouro.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf
            // Para inserir o valor na variável que é o INPUT foi necessário usar o ".value"
            // As variáveis receberam do objeto da variável os valores
            // Para acessar o valor correspondente do campo, foi necessário acessar o objeto "consultaCEPConvertida" com o "." ponto cada campo.

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;

    } catch(erro){

        console.log(erro)
    
    }
}   

var cep = document.getElementById('cep');

var enderecoCompleto = cep.addEventListener("focusout", () => buscaEndereco(cep.value))