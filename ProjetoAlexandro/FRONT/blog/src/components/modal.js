import React, { useState } from 'react';
import { createItem } from './api';

const Modal = ({ onClose }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = () => {
    const newItem = {
      nome: nome,
      preco: parseFloat(preco),
    };

    createItem(newItem)
      .then(() => {
        console.log('Item cadastrado com sucesso');
        onClose();
      })
      .catch((error) => console.error('Erro ao cadastrar item:', error));
  };

  return (
    <div>
      <h2>Novo Produto</h2>
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
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Modal;
