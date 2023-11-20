import React, { useState } from 'react';
import AtualizaModal from './AtualizaModal'; 

const AtualizaButton = ({ onCadastro }) => {
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
      <button onClick={handleOpenModal}>Atualizar Item</button>
      {showModal && (
        <AtualizaModal onClose={handleCloseModal}>
          <h2>Formulário de Cadastro</h2>
          <button onClick={handleCadastro}>Atualizar</button>
        </AtualizaModal>
      )}
    </div>
  );
};

export default AtualizaButton;