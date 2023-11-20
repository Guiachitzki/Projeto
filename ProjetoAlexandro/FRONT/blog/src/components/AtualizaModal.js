import React, { useState } from 'react';
import { updateItem } from './api';

const AtualizaModal = ({ onClose }) => {
  const [itemId, setItemId] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [novoPreco, setNovoPreco] = useState('');

  const handleAtualizar = () => {
    const itemAtualizado = {
      nome: novoNome,
      preco: parseFloat(novoPreco),
    };

    updateItem(itemId, itemAtualizado)
      .then(() => {
        console.log('Item atualizado com sucesso');
        onClose(); // Atualiza a lista após a atualização
      })
      .catch((error) => console.error('Erro ao atualizar item:', error));
  };

  return (
    <div>
      <h3>Atualizar Item</h3>
      <label>
        ID do Item:
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Novo Nome:
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
        />
      </label>
      <br />
      <label>
        Novo Preço:
        <input
          type="text"
          value={novoPreco}
          onChange={(e) => setNovoPreco(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAtualizar}>Atualizar</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default AtualizaModal;