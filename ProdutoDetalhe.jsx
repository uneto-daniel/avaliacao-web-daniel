import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProdutoDetalhe = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chamada à API para buscar os detalhes do produto unitáriio
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduto(response.data);
        setLoading(false);
        document.title = response.data.title; // Título da página Para cada produto
      })
      .catch((error) => {
        console.error('Erro ao carregar o produto:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mt-5">Aguarde, Carregando produto...</div>;
  }

  if (!produto) {
    return <div className="container mt-5">Que pena, Produto não encontrado.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={produto.image}
            alt={produto.title}
            className="img-fluid"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'contain',
            }}
          />
        </div>
        <div className="col-md-6">
          <h1>{produto.title}</h1>
          <p><strong>Categoria:</strong> {produto.category}</p>
          <p><strong>Descrição:</strong> {produto.description}</p>
          <p><strong>Preço:</strong> R$ {produto.price.toFixed(2)}</p>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhe;
