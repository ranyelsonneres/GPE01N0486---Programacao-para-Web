/* eslint-disable no-undef */
// A linha abaixo importa a classe Sequelize do pacote 'sequelize', que é responsável por conectar e interagir com bancos de dados
const { Sequelize } = require('sequelize');

// Configuração do banco de dados
// Aqui, estamos criando uma instância do Sequelize que representará a conexão com o banco de dados
// A instância do Sequelize precisa de alguns parâmetros para se conectar ao banco de dados
const sequelize = new Sequelize('todoApp', 'root', 'admin123', {
  // 'todoApp' é o nome do banco de dados que estamos usando. É onde nossas tabelas e dados serão armazenados
  // 'root' é o nome de usuário do banco de dados, que normalmente é o nome padrão para a instalação local do MySQL
  // 'admin123' é a senha para acessar o banco de dados. Essa senha deve ser configurada no MySQL para o usuário 'root'.
  
  // O segundo argumento, a senha, e as credenciais podem variar dependendo do banco de dados que você está usando
  host: 'localhost',  // O endereço do servidor de banco de dados. Neste caso, estamos conectando a um banco de dados local (no computador onde o código está rodando)
  dialect: 'mysql',   // O tipo do banco de dados que estamos utilizando. No caso, é 'mysql', pois estamos utilizando MySQL como nosso banco de dados
});

// O Sequelize é uma biblioteca que abstrai o trabalho de interagir com o banco de dados, permitindo que você use JavaScript/Node.js em vez de SQL diretamente.
// Isso inclui a criação de tabelas, execução de consultas SQL, manipulação de dados, etc.

// Exportamos a instância do Sequelize para poder usá-la em outras partes da aplicação. 
// No arquivo em que importamos esse módulo, podemos usar o `sequelize` para realizar operações no banco de dados.
module.exports = sequelize;
