import React, { useState } from 'react';
import ExcluirModal from './ExcluirModal'; 

const ExcluirButton = ({ onCadastro }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCadastro = () => {
    // Lógica de cadastro (pode abrir um modal com um formulário)
    onCadastro();
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Excluir Item</button>
      {showModal && (
        <ExcluirModal onClose={handleCloseModal}>
          <h2>Formulário de Cadastro</h2>
          <button onClick={handleCadastro}>Excluir</button>
        </ExcluirModal>
      )}
    </div>
  );
};

export default ExcluirButton;