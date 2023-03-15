var consultaCEP = fetch('https://viacep.com.br/ws/71010091/json/')

    .then(resposta => resposta.json())

    .then(r => {
        
        if (r.erro) {

            throw Error ('Esse CEP não existe')

        } else

            console.log(r)

    })
        
    .catch(erro => console.log(erro))
        //Depois do catch() é colocaodo o finally()
    .finally(mensagem => console.log('Processamento concluído!'));
        // O finally será executado mesmo se o "promese" retorne "resolvido" ou "rejeitado". No caso, ele irá mostrar a mensagem.
        // O exemplo de uso é uma transportadora que manda um questionário ao final da entrega, indepentende se foi entregue ou não foi entregue.
console.log(consultaCEP);

/* Métodos:
then() - Quando a promese é resolvida

cacth() - Quando a promese é recusada
 */