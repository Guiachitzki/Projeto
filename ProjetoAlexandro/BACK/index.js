const express = require('express');
const app = express();

app.get('/', (req,res) => {
    return res.json({mensagem: 'Não sabemos oque ta acontecendo'})
});

app.listen(3001, () =>{
console.log('Servidor está Online!') 
});