const mysql = require('mysql');

const db = mysql.createConnection({

  host: 'jdbc:mysql://localhost',
  user: 'dbconn',
  password: '1234',
  database: 'mysql',
  port: '3306',
    
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados estabelecida.');
  }
});

module.exports = db;