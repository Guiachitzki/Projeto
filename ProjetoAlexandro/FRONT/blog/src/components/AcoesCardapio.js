import React from 'react';
import BuscaModal from './BuscaModal';
import CadastroButton from './CadastroButton';
import AtualizarModal from './AtualizarModal'; // Crie um componente para o modal de atualização
import { deleteItem } from '../api';

const AcoesCardapio = ({ onSearch, onAtualizar }) => {
  const handleExcluir = (itemId) => {
    deleteItem(itemId)
      .then(() => {
        console.log('Item excluído com sucesso');
        onAtualizar(); // Atualiza a lista após a exclusão
      })
      .catch((error) => console.error('Erro ao excluir item:', error));
  };

  return (
    <div>
      <label>
        Buscar:
        <BuscaModal onSearch={onSearch} />
      </label>
      <CadastroButton />
      <AtualizarModal onAtualizar={onAtualizar} />
      <button onClick={() => handleExcluir(1)}>Excluir Item de Exemplo</button>
    </div>
  );
};

export default AcoesCardapio;