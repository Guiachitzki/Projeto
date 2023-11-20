import React, { useState } from 'react';
import Modal from './Modal'; // Importe um componente de modal, caso queira exibir um formulário de cadastro

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
      <button onClick={handleOpenModal}>Cadastrar Novo Item</button>
      {/* Adicione um modal aqui, se necessário */}
      {showModal && (
        <Modal onClose={handleCloseModal}>
          {/* Conteúdo do modal (por exemplo, um formulário de cadastro) */}
          <h2>Formulário de Cadastro</h2>
          <button onClick={handleCadastro}>Cadastrar</button>
        </Modal>
      )}
    </div>
  );
};

export default CadastroButton;