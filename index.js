import express from 'express';
import data from './products2.js';

const app = express();

app.get('/api/products', (req, res) => {
  return res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((item) => item.id === +req.params.id);
  return res.send(product);
});

app.listen(8081, () => console.log('Server listening on port 8081!'));
