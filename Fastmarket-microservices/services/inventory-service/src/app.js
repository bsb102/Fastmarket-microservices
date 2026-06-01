const express = require('express');

const app = express();

app.get('/inventario', (req, res) => {
  res.json({
    producto: 'Laptop Gamer',
    stock: 25
  });
});

app.listen(3001, () => {
  console.log('Inventory Service running');
});
