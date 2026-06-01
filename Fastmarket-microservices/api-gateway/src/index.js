const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'API Gateway Running' });
});

app.listen(3000, () => {
  console.log('Gateway running');
});
