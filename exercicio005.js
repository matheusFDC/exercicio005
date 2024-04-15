var http = require('http');
const urlRandomJoke = "https://official-joke-api.appspot.com/random_joke";

//Realiza a requisição
async function buscaPiadaAleatoria() {
    const response = await fetch(urlRandomJoke);
    const json = await response.json()
    return json
}

//Printa o retorno no Console
async function consoleLogRetorno () {
    const log = await buscaPiadaAleatoria();
    console.log(log)
};

//Criação do servidor
http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    consoleLogRetorno()
    res.write('Print do retorno no console!');
    res.end();
}).listen(8080);