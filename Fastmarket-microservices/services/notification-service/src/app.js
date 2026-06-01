const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Notification Service running' });
});

app.listen(3004);
