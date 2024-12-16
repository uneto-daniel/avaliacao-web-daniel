import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 


const ListaDeProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de pesquisa

  // Busca os produtos da API limitando a 10 produtos
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=10')
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  // Filtra os produtos com base no nome
  const filteredProducts = produtos.filter(produto =>
    produto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>Lista de Produtos</h1>

      {/* Campo de Pesquisa */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch /> {/* Ícone da lupa */}
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
          />
        </div>
      </div>

      {/* Exibir os produtos filtrados */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((produto) => (
            <div className="col-md-4" key={produto.id}>
              <div className="card">
                <img
                  src={produto.image}
                  className="card-img-top"
                  alt={produto.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{produto.title}</h5>
                  <p className="card-text">R$ {produto.price.toFixed(2)}</p>

                  {/* acessar detalhes do produto */}
                  <Link to={`/produto/${produto.id}`}>
                    <button className="btn btn-primary">
                      Ver Detalhes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ListaDeProdutos;
