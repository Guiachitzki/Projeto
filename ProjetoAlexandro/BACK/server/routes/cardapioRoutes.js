const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const db = require('../db');

router.get('/cardapio', authenticateToken, (req, res) => {
  db.query('SELECT * FROM cardapio', 
  function (err, results, fields) {
      
      res.status(200).json(results)
  });
db.end(
  function (err) { 
      if (err) throw err;
      else  console.log('Closing connection.') 
});
 });

router.post('/cadastrar', authenticateToken, (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({ message: 'Nome e preço são obrigatórios' });
  }
  
  const sql = 'INSERT INTO cardapio (nome, preco) VALUES (?, ?)';
  db.query(sql, [nome, preco], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao criar item no cardápio', error: err });
    }
    res.status(201).json({ message: 'Item cadastrado com sucesso' });
  });
});

router.put('/cardapio/:id', authenticateToken, (req, res) => {
  const itemId = req.params.id;
  const { nome, preco } = req.body;

  if (!nome || !preco) {
    return res.status(400).json({ message: 'Nome e preço são obrigatórios' });
  }

  const sql = 'UPDATE cardapio SET nome = ?, preco = ? WHERE id = ?';
  db.query(sql, [nome, preco, itemId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao atualizar item no cardápio', error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }

    res.status(200).json({ message: 'Item atualizado com sucesso' });
  });
});

router.delete('/cardapio/:id', authenticateToken, (req, res) => {
  const itemId = req.params.id;

  const sql = 'DELETE FROM cardapio WHERE id = ?';
  db.query(sql, [itemId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao excluir item do cardápio', error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Item não encontrado' });
    }

    res.status(200).json({ message: 'Item excluído com sucesso' });
  });
});


module.exports = router;