/* eslint-disable no-undef */
// A linha abaixo importa a classe DataTypes do pacote 'sequelize'.
// O DataTypes é um objeto que contém todos os tipos de dados que o Sequelize pode usar para definir as colunas das tabelas no banco de dados.
const { DataTypes } = require('sequelize');

// Aqui estamos importando a instância do Sequelize que foi configurada no arquivo 'config/db.js'.
// O 'sequelize' é responsável pela conexão com o banco de dados, e essa instância será usada para definir modelos e interagir com as tabelas.
const sequelize = require('../config/db');

// Definição do modelo de tarefa (Todo)
// O método 'define' do Sequelize é utilizado para definir um modelo (uma tabela) no banco de dados.
// O primeiro argumento ('Todo') é o nome do modelo, e o segundo é um objeto que define as colunas da tabela.
const Todo = sequelize.define('Todo', {
  // Definição da coluna 'text' que será armazenada na tabela.
  text: {
    // O tipo de dados da coluna é STRING. Isso significa que a coluna 'text' armazenará uma string (texto).
    type: DataTypes.STRING,
    
    // O atributo 'allowNull' é definido como 'false', o que significa que o valor dessa coluna não pode ser nulo. Ou seja, toda tarefa precisa ter um texto.
    allowNull: false,
  },
  
  // Definição da coluna 'completed' que indica se a tarefa foi concluída ou não.
  completed: {
    // O tipo de dados da coluna é BOOLEAN, ou seja, ela armazenará um valor verdadeiro ou falso (verdadeira ou falsa).
    type: DataTypes.BOOLEAN,
    
    // O atributo 'defaultValue' define o valor padrão dessa coluna. Aqui, estamos dizendo que, se não for fornecido um valor, 'completed' será 'false' por padrão.
    defaultValue: false,
  },
});

// O modelo 'Todo' que acabamos de definir está sendo exportado para ser usado em outras partes da aplicação,
// como em controladores (para interagir com as tarefas) ou em rotas (para lidar com requisições HTTP).
module.exports = Todo;
