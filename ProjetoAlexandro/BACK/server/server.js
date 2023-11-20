const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const cardapioRoutes = require('./routes/cardapioRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/cardapio', cardapioRoutes);

app.get('/api/cardapio/buscar', (req, res) => {
  const searchTerm = req.query.q; // Obtém o termo de busca da query
  res.json({ results: [] }); // Substitua [] pelos resultados reais
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});