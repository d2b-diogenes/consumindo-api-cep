var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    // Toda Promise sempre retorna um "response". Esse "response" terá a resposta da "Promese", se foi rejeitada ou resolvida
    // O "then()" é o ENTÃO. Fez algo, ENTÃO faça isso.
    .then(resposta => resposta.json())
        // Esse "then()" irá, ENTÃO fazer a converção do "response" para JSON, pois o conteúdo que o "response" retorna não é possível ler, formato em bytes. Por esse motivo é convertido para o foramto JSON, pois é um formato muito utilizado no desenvolvimento web e é um objeto que é possível de ser lido
        //JSON (JavaScript Object Notation)
        //.JSON() é o método utilizado para transformar o argumento "resposta" em um formato JSON, resposta.JSON()
    .then(r => console.log(r));
        // O próximo "then()" irá, ENTÃO imprimir a resposta.

console.log(consultaCEP);
    /*
    Foi retornado no concole do navegador uma Promise
    O retorno dela é "resolvido" ou "rejeitada"
    */
   