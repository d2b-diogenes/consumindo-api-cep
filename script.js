async function buscaEndereco (cep) { 

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        var consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não existe');
        }
    
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');        
        var estado = document.getElementById('estado');

        logradouro.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;

    } catch(erro){

        console.log(erro)

        var erroCep = document.getElementById('cep').parentElement.innerHTML += `<p>CEP é inválido. Tente novamente!!</p>`;
    
    }
}   

var cep = document.getElementById('cep');

var enderecoCompleto = cep.addEventListener("focusout", () => buscaEndereco(cep.value))