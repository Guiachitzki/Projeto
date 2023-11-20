import React, { useState } from 'react';
import { getCardapio } from './api';

const Modal = ({ onClose }) => {
  const [nome, getNome] = useState('');
  const [id, gerId] = useState('');
}
  const handleBuscao = () => {
    const buscarItem = {
      nome: nome,
      id: Id
    };

  return (
    <div>
      <h2>Buscar Produto</h2>
      <form>
      <label>
          ID:
          <input type="text" value={Id} onChange={(e) => GetId(e.target.value)} />
        </label>
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

export default Modal;
