const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Order Service running' });
});

app.listen(3002);
