const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Logistics Service running' });
});

app.listen(3003);
