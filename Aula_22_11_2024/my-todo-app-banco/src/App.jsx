import { useState, useEffect } from "react"; // Importa hooks 'useState' e 'useEffect' do React
import TodoInput from "./components/TodoInput"; // Importa o componente TodoInput, responsável por adicionar tarefas
import TodoList from "./components/TodoList"; // Importa o componente TodoList, responsável por exibir as tarefas
import axios from "axios"; // Importa a biblioteca axios para realizar requisições HTTP

function App() {
  const [todos, setTodos] = useState([]); // Cria um estado 'todos' para armazenar a lista de tarefas

  // Função assíncrona para carregar todas as tarefas do backend
  const loadTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todos"); // Realiza uma requisição GET para buscar as tarefas
      setTodos(response.data); // Atualiza o estado 'todos' com os dados recebidos
    } catch (error) {
      console.error("Error fetching todos:", error); // Caso haja erro, exibe no console
    }
  };

  // O hook 'useEffect' será executado uma vez após o componente ser montado
  useEffect(() => {
    loadTodos(); // Chama a função para carregar as tarefas
  }, []); // O array vazio [] significa que o 'useEffect' será executado apenas uma vez após a primeira renderização

  // Função assíncrona para adicionar uma nova tarefa
  const addTodo = async (todoText) => {
    try {
      const response = await axios.post("http://localhost:3000/api/todos", {
        text: todoText, // Envia o texto da nova tarefa para o backend
      });
      setTodos([...todos, response.data]); // Adiciona a nova tarefa no estado 'todos'
    } catch (error) {
      console.error("Error adding todo:", error); // Caso haja erro, exibe no console
    }
  };

  // Função assíncrona para alternar o estado de completado de uma tarefa
  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id); // Encontra a tarefa pelo ID
    try {
      const response = await axios.put(`http://localhost:3000/api/todos/${id}`, {
        completed: !todo.completed, // Altera o estado 'completed' da tarefa
        text: todo.text, // Mantém o texto da tarefa
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo))); // Atualiza o estado 'todos' com os dados alterados
    } catch (error) {
      console.error("Error updating todo:", error); // Caso haja erro, exibe no console
    }
  };

  // Função assíncrona para deletar uma tarefa
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`); // Realiza uma requisição DELETE para excluir a tarefa
      setTodos(todos.filter((todo) => todo.id !== id)); // Remove a tarefa do estado 'todos'
    } catch (error) {
      console.error("Error deleting todo:", error); // Caso haja erro, exibe no console
    }
  };

  // Função assíncrona para editar o texto de uma tarefa
  const editTodo = async (id, newText) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/todos/${id}`, {
        text: newText, // Envia o novo texto para o backend
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo))); // Atualiza o estado 'todos' com o texto alterado
    } catch (error) {
      console.error("Error editing todo:", error); // Caso haja erro, exibe no console
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Renderiza o título */}
      <h1>To-Do List</h1>
      {/* Componente TodoInput para adicionar novas tarefas */}
      <TodoInput addTodo={addTodo} />
      {/* Componente TodoList que exibe as tarefas e permite interações */}
      <TodoList
        todos={todos} // Passa a lista de tarefas para o componente TodoList
        toggleTodo={toggleTodo} // Passa a função para alternar o estado de completado
        deleteTodo={deleteTodo} // Passa a função para deletar tarefas
        editTodo={editTodo} // Passa a função para editar o texto da tarefa
      />
    </div>
  );
}

export default App;
