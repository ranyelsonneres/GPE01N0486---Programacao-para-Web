import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TodoInput({ addTodo }) {
  // Definição do estado 'inputValue', que armazenará o valor digitado no campo de entrada
  const [inputValue, setInputValue] = useState("");

  // Função chamada quando o usuário clica no botão "Adicionar"
  const handleAdd = () => {
    // Verifica se o valor digitado não está vazio (ignora espaços em branco)
    if (inputValue.trim()) {
      // Chama a função addTodo passada como prop para adicionar a nova tarefa
      addTodo(inputValue);
      // Limpa o campo de entrada após adicionar a tarefa
      setInputValue("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Campo de entrada de texto onde o usuário digita a nova tarefa */}
      <input
        type="text"
        value={inputValue} // O valor do campo de entrada é vinculado ao estado 'inputValue'
        onChange={(e) => setInputValue(e.target.value)} // Atualiza 'inputValue' com o valor digitado
        placeholder="Adicionar nova tarefa" // Texto que aparece no campo quando ele está vazio
        style={{ padding: "8px", marginRight: "10px", width: "200px" }} // Estilos inline para o input
      />
      {/* Botão que chama a função handleAdd ao ser clicado */}
      <button onClick={handleAdd} style={{ padding: "8px" }}>
        Adicionar
      </button>
    </div>
  );
}

export default TodoInput;
