async function buscaEndereco (cep) { 

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        var consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não existe');
        }
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;

    } catch(erro){

        console.log(erro)
    
    }
}   

var cep = document.getElementById('cep');
    // Foi criado uma variável "cep" para receber o elemento com id "cep"
    // O "document." acessa a página HTML e com "getElementById('cep')" é buscado o elmento com o id "cep"

var enderecoCompleto = cep.addEventListener("focusout", () => buscaEndereco(cep.value))
    // Foi criado um "addEventListener" para que "escute" quando o evento "focusout" ocorra para que possa realaizar alguma ação
    // O evento "focusout" é um evento que acontece quando saí do campo que está sendo usado ou está selecionado.
    // Foi usado esse evento, pois se queria fosse feita a busca do cep logo depois que o usuário terminasse de preencher o campo e saísse dele
    // ".value" irá pegar o valor que ele está recebendo do elemento "cep"
   
