/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

// O componente 'TodoList' recebe as props: 'todos', 'toggleTodo', 'deleteTodo' e 'editTodo'.
// - 'todos' é uma lista de todas as tarefas (cada tarefa é um objeto).
// - 'toggleTodo' é uma função para alternar o estado de "completado" de uma tarefa.
// - 'deleteTodo' é uma função para excluir a tarefa.
// - 'editTodo' é uma função para editar o texto da tarefa.

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div>
      {/* Verifica se há tarefas na lista. Se sim, renderiza uma lista de 'TodoItem' */}
      {todos.length > 0 ? (
        // Mapeia a lista de tarefas (todos) e renderiza um 'TodoItem' para cada uma.
        todos.map((todo) => (
          <TodoItem
            key={todo.id} // A chave única 'key' ajuda o React a identificar os itens de maneira eficiente.
            todo={todo} // Passa a tarefa atual como prop para o componente 'TodoItem'.
            toggleTodo={toggleTodo} // Passa a função de alternar o estado de completado da tarefa.
            deleteTodo={deleteTodo} // Passa a função de deletar a tarefa.
            editTodo={editTodo} // Passa a função de editar o texto da tarefa.
          />
        ))
      ) : (
        // Caso a lista de tarefas esteja vazia, exibe uma mensagem.
        <p>Nenhuma tarefa adicionada ainda!</p>
      )}
    </div>
  );
}

export default TodoList;
