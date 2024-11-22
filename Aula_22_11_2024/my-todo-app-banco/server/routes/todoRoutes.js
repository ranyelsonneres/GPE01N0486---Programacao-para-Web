// Importação do pacote express
const express = require('express');
// Importação do modelo Todo, que representa a tabela de tarefas no banco de dados
const Todo = require('../models/todo');
// Criação do roteador do Express para definir as rotas da API
const router = express.Router();

// Criação de nova tarefa
router.post('/todos', async (req, res) => {
  try {
    // O método 'create' do Sequelize é usado para criar uma nova tarefa no banco de dados.
    // O corpo da requisição (req.body.text) contém o texto da tarefa que será armazenado.
    const todo = await Todo.create({ text: req.body.text });
    
    // Retorno de um status HTTP 201 (Created) junto com a tarefa criada em formato JSON.
    res.status(201).json(todo);
  } catch (error) {
    // Em caso de erro, retornamos um status HTTP 500 (Internal Server Error) e a mensagem de erro
    res.status(500).json({ message: 'Erro ao criar tarefa', error });
  }
});

// Listar todas as tarefas
router.get('/todos', async (req, res) => {
  try {
    // O método 'findAll' do Sequelize retorna todas as tarefas armazenadas no banco de dados
    const todos = await Todo.findAll();
    
    // Retorna todas as tarefas em formato JSON com um status HTTP 200 (OK)
    res.status(200).json(todos);
  } catch (error) {
    // Em caso de erro, retornamos um status HTTP 500 (Internal Server Error) e a mensagem de erro
    res.status(500).json({ message: 'Erro ao buscar todas a tarefas', error });
  }
});

// Atualizar tarefa (marcar como completada ou editar o texto)
router.put('/todos/:id', async (req, res) => {
  try {
    // O método 'findByPk' busca uma tarefa específica pelo seu ID (passado na URL)
    const todo = await Todo.findByPk(req.params.id);
    
    // Se a tarefa não for encontrada, retornamos um status 404 (Not Found) com a mensagem de erro
    if (!todo) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    
    // Atualiza os campos 'text' e 'completed' da tarefa, se fornecido no corpo da requisição
    todo.text = req.body.text || todo.text; // Se 'text' não for fornecido, mantém o valor atual
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed; // Se 'completed' não for fornecido, mantém o valor atual
    
    // Salva as mudanças no banco de dados
    await todo.save();
    
    // Retorna o status 200 (OK) e a tarefa atualizada em formato JSON
    res.status(200).json(todo);
  } catch (error) {
    // Em caso de erro, retornamos um status HTTP 500 (Internal Server Error) e a mensagem de erro
    res.status(500).json({ message: 'Erro ao atualizar tarefa', error });
  }
});

// Deletar tarefa
router.delete('/todos/:id', async (req, res) => {
  try {
    // O método 'findByPk' busca uma tarefa específica pelo ID (passado na URL)
    const todo = await Todo.findByPk(req.params.id);
    
    // Se a tarefa não for encontrada, retornamos um status 404 (Not Found) com a mensagem de erro
    if (!todo) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    
    // O método 'destroy' exclui a tarefa do banco de dados
    await todo.destroy();
    
    // Retorna um status 200 (OK) e uma mensagem indicando que a tarefa foi deletada
    res.status(200).json({ message: 'Tarefa deletada' });
  } catch (error) {
    // Em caso de erro, retornamos um status HTTP 500 (Internal Server Error) e a mensagem de erro
    res.status(500).json({ message: 'Erro ao deletar tarefa', error });
  }
});

// Exporta o roteador para ser usado no arquivo principal do servidor
module.exports = router;
