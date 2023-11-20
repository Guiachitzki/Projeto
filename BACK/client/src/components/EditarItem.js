import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getItem, updateItem } from '../api';

const EditarItem = () => {
  const { id } = useParams();
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    // Carrega os dados do item para edição ao montar o componente
    getItem(id)
      .then((response) => {
        const item = response.data;
        setNome(item.nome);
        setPreco(item.preco);
      })
      .catch((error) => console.error('Erro ao obter item para edição:', error));
  }, [id]);

  const handleUpdateItem = () => {
    const updatedItem = {
      nome: nome,
      preco: parseFloat(preco),
    };

    updateItem(id, updatedItem)
      .then(() => {
        console.log('Item atualizado com sucesso');
        // Redireciona de volta para o cardápio após a atualização
        history.push('/');
      })
      .catch((error) => console.error('Erro ao atualizar item:', error));
  };

  return (
    <div>
      <h2>Editar Item do Cardápio</h2>
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
        <button type="button" onClick={handleUpdateItem}>
          Atualizar Item
        </button>
      </form>
    </div>
  );
};

export default EditarItem;