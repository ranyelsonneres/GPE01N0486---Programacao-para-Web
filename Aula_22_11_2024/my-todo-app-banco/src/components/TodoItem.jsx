/* eslint-disable react/prop-types */
import { useState } from "react";

// O componente 'TodoItem' recebe as props: 'todo', 'toggleTodo', 'deleteTodo' e 'editTodo'.
// - 'todo' contém os dados de uma tarefa individual.
// - 'toggleTodo' é uma função para alternar o status de "completado" de uma tarefa.
// - 'deleteTodo' é uma função para excluir a tarefa.
// - 'editTodo' é uma função para editar o texto da tarefa.

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  // Definição do estado 'isEditing' para controlar se o componente está no modo de edição ou não.
  const [isEditing, setIsEditing] = useState(false);

  // Definição do estado 'newText' que armazena o texto que será editado.
  // Inicialmente, 'newText' é igual ao texto da tarefa atual.
  const [newText, setNewText] = useState(todo.text);

  // Função chamada quando o botão "Editar" é clicado.
  const handleEditClick = () => {
    // Muda o estado 'isEditing' para 'true', o que permite ao usuário editar o texto da tarefa.
    setIsEditing(true);
  };

  // Função chamada quando o botão "Salvar" é clicado.
  const handleSaveClick = () => {
    // Verifica se o texto editado não está vazio (apenas espaços em branco).
    if (newText.trim()) {
      // Chama a função 'editTodo' passando o id da tarefa e o novo texto.
      editTodo(todo.id, newText);
      // Após salvar, altera o estado 'isEditing' para 'false' para voltar ao modo de visualização.
      setIsEditing(false);
    }
  };

  return (
    // Container do item de tarefa, com estilo que aplica um "risco" no texto se a tarefa estiver completada.
    <div
      style={{
        display: "flex",  // Alinha os itens de forma flexível na linha.
        alignItems: "center", // Alinha os itens verticalmente ao centro.
        marginBottom: "10px", // Espaçamento entre os itens.
        textDecoration: todo.completed ? "line-through" : "none", // Aplica um risco no texto se a tarefa estiver completada.
      }}
    >
      {/* Caixa de seleção para marcar a tarefa como completada ou não. */}
      <input
        type="checkbox"
        checked={todo.completed} // Marca o checkbox com base no estado 'completed' da tarefa.
        onChange={() => toggleTodo(todo.id)} // Alterna o estado 'completed' ao clicar no checkbox.
        style={{ marginRight: "10px" }} // Adiciona espaçamento à direita do checkbox.
      />
      
      {/* Se estiver no modo de edição, exibe um campo de entrada para editar o texto. */}
      {isEditing ? (
        <input
          type="text"
          value={newText} // O valor do campo de entrada é controlado pelo estado 'newText'.
          onChange={(e) => setNewText(e.target.value)} // Atualiza o estado 'newText' conforme o usuário digita.
          style={{
            flex: 1, // O campo de entrada ocupa o máximo de espaço disponível.
            marginRight: "10px", // Espaço à direita do campo de entrada.
            padding: "5px", // Espaçamento interno do campo de entrada.
          }}
        />
      ) : (
        // Caso não esteja no modo de edição, exibe o texto da tarefa normalmente.
        <span style={{ flex: 1 }}>{todo.text}</span>
      )}

      {/* Se estiver no modo de edição, exibe o botão "Salvar" */}
      {isEditing ? (
        <button onClick={handleSaveClick} style={{ padding: "5px" }}>
          Salvar
        </button>
      ) : (
        // Se não estiver no modo de edição, exibe o botão "Editar"
        <button onClick={handleEditClick} style={{ padding: "5px" }}>
          Editar
        </button>
      )}

      {/* Botão para excluir a tarefa, que chama a função 'deleteTodo' passando o id da tarefa. */}
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "10px", padding: "5px" }} // Espaço à esquerda e espaçamento interno.
      >
        Excluir
      </button>
    </div>
  );
}

export default TodoItem;
