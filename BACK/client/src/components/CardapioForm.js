import React, { useState } from 'react';
import { createItem } from '../api';

const CardapioForm = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleCreateItem = () => {
    const newItem = {
      nome: nome,
      preco: parseFloat(preco),
    };

    createItem(newItem)
      .then(() => {
        console.log('Item criado com sucesso');
        // Limpar os campos após a criação
        setNome('');
        setPreco('');
      })
      .catch((error) => console.error('Erro ao criar item:', error));
  };

  return (
    <div>
      <h2>Adicionar Item ao Cardápio</h2>
      <form>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Preço:
          <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCreateItem}>
          Adicionar ao Cardápio
        </button>
      </form>
    </div>
  );
};

export default CardapioForm;