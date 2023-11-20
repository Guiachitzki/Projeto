import React, { useState } from 'react';
import Modal from './CadastroModal'; 

const CadastroButton = ({ onCadastro }) => {
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
      <button onClick={handleOpenModal}>Buscar Produto</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Formulário de Cadastro</h2>
          <button onClick={handleCadastro}>Buscar</button>
        </Modal>
      )}
    </div>
  );
};

export default CadastroButton;