import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Conecta a pesquisa global com o estado da aplicação
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value;
  // Atualiza o estado de pesquisa no React
  window.localStorage.setItem('searchTerm', searchTerm); // Usar o localStorage para comunicação entre o HTML e o React
});

