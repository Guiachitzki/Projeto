import React, { useState } from 'react';
import { deleteItem } from './api';

const ExcluirModal = ({ onClose }) => {
  const [itemId, delItemId] = useState('');

  const handleAtualizar = () => {
    const itemAtualizado = {
        itemId: delItemId
    };

    deleteItem(itemId, itemAtualizado)
      .then(() => {
        console.log('Item Excluido com sucesso');
        onClose(); // Atualiza a lista após a atualização
      })
      .catch((error) => console.error('Erro ao excluir item:', error));
  };

  return (
    <div>
      <h3>Excluir Item</h3>
      <label>
        ID do Item:
        <input
          type="text"
          value={itemId}
          onChange={(e) => delItemId(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAtualizar}>Excluir</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default ExcluirModal;