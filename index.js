import express from 'express';
import data from './products3.js';

const app = express();

app.use(express.json());

app.get('/api/products', (req, res) => {
  console.log('GET: /api/products');
  return res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = +req.params.id;
  const product = data.products.find((item) => item.id === productId);
  console.log(`GET: /api/products/${productId}`, product);
  return res.send(product);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  console.log('POST: /api/products', product);
  product.id = data.products.length + 1;
  data.products.push(product);
  return res.send(product);
});

app.delete('/api/products/:id', (req, res) => {
  const productId = +req.params.id;
  console.log(`DELETE: /api/products/${productId}`);
  const filteredList = data.products.filter((item) => item.id !== productId);
  data.products = filteredList;
  return res.send(filteredList);
});

app.put('/api/products/:id', (req, res) => {
  const productId = +req.params.id;
  const product = req.body;
  console.log(`PUT: /api/products/${productId}`, product);
  const index = data.products.findIndex((item) => item.id === productId);
  data.products[index] = product;
  return res.send(data.products[index]);
});

app.listen(8081, () => console.log('Server listening on port 8081!'));
