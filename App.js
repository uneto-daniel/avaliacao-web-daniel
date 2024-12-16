import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Produto from './components/Produto';  // Certifique-se de que o caminho esteja correto
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles.css';

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Função para buscar todos os produtos
    const fetchProdutos = async () => {
      try {
        // requisição para buscar os produtos
        const response = await axios.get('https://fakestoreapi.com/products');
        setProdutos(response.data.slice(0, 10));  // requisição para limitar a lista a 10 produtos
      } catch (error) {
        setErro('Erro ao carregar os produtos');
      } finally {
        setCarregando(false);
      }
    };

    fetchProdutos();
  }, []);

  if (carregando) {
    return <div>Carregando...</div>;
  }

  if (erro) {
    return <div>{erro}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Exibe os primeiros 10 produtos */}
        {produtos.map((produto) => (
          <div className="col-12 col-md-4 col-lg-2 mb-4" key={produto.id}>
            <Produto produto={produto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;