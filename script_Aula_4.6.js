async function buscaEndereco (cep) { 

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            // O fetch irá levar o parâmetro que a função trás. No caso, o CEP.
            // Para pegar o parâmetro e usar no endereço que vai ser usado pelo "fetch()" foi usado o "${ }"
            // O "${ }" só foi possíve ser usado devido ter sido alterado as aspas por crase, agora a URL está envolvida pela crase.

        const consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não existe');
        } else
            //console.log(consultaCEPConvertida);

            return consultaCEPConvertida; //Irá retornar um valor para quem estiver chaamando a função.

    } catch(erro){
        console.log(erro)
    }
}

let ceps = ['01001000', '01001001']; //Array de CEPs que será usada para serem feita as buscas
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores)); //O MAP irá criar um Array com o que retornar da função buscaEndereco() para cada valor dentro da Array "ceps"
    //console.log(conjuntoCeps)
        //Irá retornar "promises", pois elas ainda não estão resolvidas. Somente será resolvida no próximo estágio com o "Promise.all(conjuntoCeps)"

Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
    //O que há dentro do conjuntoCeps são "promises" e para resolver será usado o "Promise.all"
    // Será usado o "then()", pois é uma "promise", para imprimira cada resposta.