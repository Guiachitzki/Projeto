import React, { useEffect, useState } from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCardapio } from '../api';
import CadastroButton from './CadastroButton';

const CardapioList = () => {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    fetchCardapio();
    getCardapio()
      .then((response) => setCardapio(response.data))
      .catch((error) => console.error('Erro ao obter cardápio:', error));
  }, []);

  const fetchCardapio = () => {
    getCardapio()
      .then((response) => setCardapio(response.data))
      .catch((error) => console.error('Erro ao obter cardápio:', error));
  };

  const handleDelete = (itemId) => {
    deleteItem(itemId)
      .then(() => {
        console.log('Item excluído com sucesso');
        fetchCardapio();
      })
      .catch((error) => console.error('Erro ao excluir item:', error));
  };

  return (
    <div>
      <h2>Cardápio do Restaurante</h2>
      <ul>
        {cardapio.map((item) => (
          <li key={item.id}>
            {item.nome} - R$ {item.preco}{' '}
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <CadastroButton />
    </div>
  );
};

export default CardapioList;