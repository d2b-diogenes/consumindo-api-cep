/* Outra maneira de fazer um código assíncrono
ASYNC e AWAIT foi declarada em 2017 para facilitar a leitura dos código assíncronos */

async function buscaEndereco () {  
    //A declaração "async function" define uma função assíncrona 

    var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
        // O operador "await" é utlizado para esperar por uma "promise". 
        // Somente é possível declarar "await" dentro de uma função "async". Em outro local, irá dar problema.

    const consultaCEPConvertida = await consultaCEP.json();
        // O await é usado novamente.

    console.log(consultaCEPConvertida);
}

buscaEndereco();