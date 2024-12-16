import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaDeProdutos from './components/ListaDeProdutos';
import ProdutoDetalhe from './components/ProdutoDetalhe';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


const App = () => {(
  <Router>
      <Routes>
        {/* exibir a lista de produtos */}
        <Route path="/" element={<ListaDeProdutos />} />

        {/* exibir os detalhes de um produto específico */}
        <button><Route path="/produto/:id" element={<ProdutoDetalhe />} /></button>
        <ProdutoDetalhe/>
      </Routes>
    </Router>
  );
};


export default App;



