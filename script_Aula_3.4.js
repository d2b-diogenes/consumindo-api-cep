var consultaCEP = fetch('https://viacep.com.br/ws/00112095/json/')

    .then(resposta => resposta.json())

    .then(r => { //Tratando dentro do "then()" o erro do CEP com formato válido, mas inesistente no bando de dados
        
        if (r.erro) { //Se o "r.erro" for igual a "true"

            throw Error ('Esse CEP não existe') //Se true, irá jogar o ERRO e o "cacth()" irá pegar esse ERRO e irá mostrar.

        } else

            console.log(r) //Se não tiver erro, irá mostrar o objeto JSON.

    })
        //O método "then()" significar ENTÃO, ele pega a resquisição e faz alguma coisa com a resposta retornada, mas ele só faz algo se a "promose" for resolvida. 
    .catch(erro => console.log(erro)) ;
        //O método "catch()" irá pegar um erro e irá mostrar.
    
    //Toda "promese" retorna o "then()", caso seja resolvida, ou o "cacht()", caso seja recusada.

/* testando o catch()
Foi retirado 1 número do CEP para que desse ERRO: TypeError: NetworkError when attempting to fetch resource.
Esse erro foi mostrado devido o código:  .catch(erro => console.log(erro));

Em alguns casos o catch() irá PEGAR os ERROS previstos pelo VIACEP, onde se acontecer determinados erros, a "response" irá retornar "recusada"
*/

/* Testando o throw Error
Nos ERROS em  que o formato válido, mas inesistente no bando de dados, o VIA CEP trata esse erro da seguinte forma:
 Se o cep não for encontrado na base de dados, o retorno conterá o valor de "erro" igual a "true".

Nesse caso, o "response" não irá retornar "recusado". 
Por esse motivo não irá cair no "cacth()", o "catch()" não irá pegar esse erro.
Esse erro irá cair no "then()".

É necessário tratar esse ERRO dentro do "then()" com uma condicional para verificar se o "erro" é "true".
    
    if (r.erro) {
        throw Error ('Esse CEP nao existe')

*/

console.log(consultaCEP);