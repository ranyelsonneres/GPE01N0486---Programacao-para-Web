// Importação do pacote 'express', que é o framework usado para criar o servidor e gerenciar as rotas.
const express = require('express');

// Importação do pacote 'cors', usado para habilitar o Cross-Origin Resource Sharing (CORS),
// permitindo que o front-end se comunique com o back-end mesmo em diferentes origens (domínios).
const cors = require('cors');

// Importação do 'body-parser', que é usado para parsear o corpo das requisições HTTP em formato JSON,
// facilitando o acesso aos dados nas requisições.
const bodyParser = require('body-parser');

// Importação da configuração do Sequelize, que é a instância do banco de dados que foi configurada anteriormente.
// Ele permite que o Express interaja com o banco de dados.
const sequelize = require('./config/db');

// Importação das rotas definidas no arquivo 'todoRoutes'.
// Essas rotas são responsáveis por lidar com as operações de CRUD para as tarefas.
const todoRoutes = require('./routes/todoRoutes');

// Criação do servidor Express
const app = express();

// Middleware
// O middleware 'cors' é usado para permitir que o back-end aceite requisições de diferentes origens (domínios),
// evitando bloqueios relacionados à política de CORS.
app.use(cors());

// O middleware 'bodyParser.json()' é usado para analisar o corpo das requisições que chegam no formato JSON.
// Isso permite acessar os dados da requisição por meio de 'req.body'.
app.use(bodyParser.json());

// Definindo as rotas da aplicação. Todas as rotas definidas em 'todoRoutes' estarão acessíveis com o prefixo '/api'.
// Ou seja, a rota para criar uma tarefa será acessível em '/api/todos', por exemplo.
app.use('/api', todoRoutes);

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync() // O método 'sync' sincroniza a definição dos modelos com o banco de dados.
// Isso cria (ou atualiza) as tabelas do banco com base nos modelos definidos no Sequelize.
  .then(() => {
    // Após a sincronização do banco de dados, o servidor Express será iniciado.
    app.listen(3000, () => {
      // Exibe uma mensagem no console para indicar que o servidor está rodando e a URL de acesso.
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    // Caso ocorra um erro ao tentar conectar ao banco de dados, ele será capturado aqui.
    console.error('Unable to connect to the database:', err);
  });
