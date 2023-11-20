import React from 'react';
import './Modal.css'; // Adicione estilos CSS para o modal, conforme necessário

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;