

// Importa o módulo HTTP do Node.js
const http = require('http');
const fs = require('fs'); //arquivo (html)
const path = require('path'); // caminho do meu arquivo

// Cria o servidor
const server = http.createServer((req, res) => { //fução arrow e callback
        //definindo o caminho para o arquivo HTML
        const filePath = path.join(__dirname, 'index.html');
        
        //lendo o arquivo HTML e enviando como resposta
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro no servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data); //envia o conteúdo do arquivo HTML
            }
        });
    });

    // Define o cabeçalho da resposta (200 = sucesso)
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Envia a resposta "Hello, World!" para o cliente
    //res.end('Servidor web usando node.js!');

// Define a porta do servidor
const port = 3000;

// Inicia o servidor
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
