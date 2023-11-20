import React, { useState } from 'react';
import { getCardapio } from './api';

const BuscaModal = ({ onClose }) => {
  const [nome, getNome] = useState('');
  const [itemId, getItemId] = useState('');
}
  const handleBuscao = () => {
    const buscarItem = {
      nome: nome,
      id: Id
    };

  return (
    <div>
      <h2>Buscar Produto</h2>
      <label>
        ID do Item:
        <input type="text" value={itemId} onChange={(e) => getItemId(e.target.value)}/>
      </label>
      <form>
        <br />
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => getNome(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCadastro}>
          Buscar
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default BuscaModal;
