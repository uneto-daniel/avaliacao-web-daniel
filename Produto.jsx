import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Ícones de estrela

const Produto = ({ produto }) => {
  const rating = Math.round(produto.rating.rate); // Obter a avaliação (de 1 a 5)

  return (
    <Card className="shadow-sm">
      <Card.Img
        variant="top"
        src={produto.image}
        alt={produto.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      />
      <Card.Body>
        <Card.Title>{produto.title}</Card.Title>
        <Card.Text>
          <span>Categoria: {produto.category}</span>
          <br />
          <span>Preço: R$ {produto.price.toFixed(2)}</span>
        </Card.Text>

        <div>
          {/* Exibe as estrelas preenchidas e vazias conforme a avaliação */}
          {[1, 2, 3, 4, 5].map((star) => 
            star <= rating ? <FaStar key={star} color="#ffbb33" /> : <FaRegStar key={star} color="#ffbb33" />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Produto;

