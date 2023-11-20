import React, { useEffect, useState } from 'react';
import { getCardapio, deleteItem } from '../api';
import CadastroButton from './CadastroButton'; // Importe o componente do botão de cadastro
import Modal from './modal';

const CardapioList = () => {
    const [cardapio, setCardapio] = useState([]);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      fetchCardapio();
    }, []);
  
    const fetchCardapio = () => {
      getCardapio()
        .then((response) => setCardapio(response.data))
        .catch((error) => console.error('Erro ao obter cardápio:', error));
    };
  
    const handleDelete = (itemId) => {
      deleteItem(itemId)
        .then(() => {
          console.log('Item excluído com sucesso');
          fetchCardapio();
        })
        .catch((error) => console.error('Erro ao excluir item:', error));
    };
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      fetchCardapio(); // Atualiza a lista após o cadastro
    };
  
    return (
      <div>
        <h2>Cardápio do Restaurante</h2>
        <ul>
          {cardapio.map((item) => (
            <li key={item.id}>
              {item.nome} - R$ {item.preco}{' '}
              <button onClick={() => handleDelete(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <CadastroButton onClick={handleOpenModal} />
        {showModal && <Modal onClose={handleCloseModal} />}
      </div>
    );
  };
  
  export default CardapioList;