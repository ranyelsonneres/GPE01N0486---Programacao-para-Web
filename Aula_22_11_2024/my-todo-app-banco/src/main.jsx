import { StrictMode } from 'react'; // Importa o componente StrictMode do React
import { createRoot } from 'react-dom/client'; // Importa a função createRoot para inicializar a aplicação com o React 18+
import './index.css'; // Importa o arquivo de estilos CSS para o aplicativo
import App from './App.jsx'; // Importa o componente principal 'App', que contém a lógica do aplicativo

// Criação do elemento raiz para renderizar o aplicativo
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode ativa a verificação adicional de código e advertências durante o desenvolvimento */}
    <App /> {/* Renderiza o componente principal App dentro do StrictMode */}
  </StrictMode>,
);
