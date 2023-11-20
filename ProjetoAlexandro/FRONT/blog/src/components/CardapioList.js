import React, { useEffect, useState } from 'react';
import { getCardapio, deleteItem } from '../api';
import CadastroButton from './CadastroButton'; // Importe o componente do botão de cadastro
import BuscaButton from './BuscarButton';
import CadasroModal from './CadastroModal';
import BuscaModal from './BuscarModal';

const CardapioList = () => {
    const [cardapio, setCardapio] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showBuscaModal, setShowBuscaModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
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

    const handleSearch = () => {
      fetch(`/api/cardapio/buscar?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setCardapio(data.results)) // Substituir 'results' pelos resultados reais
      .catch((error) => console.error('Erro ao buscar itens:', error));
    };
  
    return (
      <div>
        <h2>Cardápio do Restaurante</h2>
        <div>
        <label>
          Buscar:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Buscar</button>
        {showBuscaModal && (
          <BuscaModal
            onClose={() => setShowBuscaModal(false)}
            onSearch={handleSearch}
          />
        )}
      </div>
        <ul>
          {cardapio.map((item) => (
            <li key={item.id}>
              {item.nome} - R$ {item.preco}{' '}
              <BuscaButton onClick={() => handleDelete(item.id)}>Excluir</BuscaButton>
            </li>
          ))}
        </ul>
        <CadastroButton onClick={handleOpenModal} />
        {showModal && <Modal onClose={handleCloseModal} />}
      </div>
    );
  };
  
  export default CardapioList;