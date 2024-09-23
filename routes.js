import apmDataRouting from './products3.js';
import apmDataRxJs from './products4.js';

export function apmRoutingServices(app) {
  app.get('/api/products', (req, res) => {
    console.log('GET: /api/products');
    return res.send(apmDataRouting.products);
  });

  app.get('/api/products/:id', (req, res) => {
    const productId = +req.params.id;
    const product = apmDataRouting.products.find(
      (item) => item.id === productId
    );
    console.log(`GET: /api/products/${productId}`, product);
    return res.send(product);
  });

  app.post('/api/products', (req, res) => {
    const product = req.body;
    console.log('POST: /api/products', product);
    product.id = apmDataRouting.products.length + 1;
    apmDataRouting.products.push(product);
    return res.send(product);
  });

  app.delete('/api/products/:id', (req, res) => {
    const productId = +req.params.id;
    console.log(`DELETE: /api/products/${productId}`);
    const filteredList = apmDataRouting.products.filter(
      (item) => item.id !== productId
    );
    apmDataRouting.products = filteredList;
    return res.send(filteredList);
  });

  app.put('/api/products/:id', (req, res) => {
    const productId = +req.params.id;
    const product = req.body;
    console.log(`PUT: /api/products/${productId}`, product);
    const index = apmDataRouting.products.findIndex(
      (item) => item.id === productId
    );
    apmDataRouting.products[index] = product;
    return res.send(apmDataRouting.products[index]);
  });

  app.get('/api/rx/products', (req, res) => {
    console.log('GET: /api/rx/products');
    return res.send(apmDataRxJs.products);
  });

  app.get('/api/rx/products/:id', (req, res) => {
    const productId = +req.params.id;
    const product = apmDataRxJs.products.find((item) => item.id === productId);
    console.log(`GET: /api/rx/products/${productId}`, product);
    return res.send(product);
  });

  app.post('/api/rx/products', (req, res) => {
    const product = req.body;
    console.log('POST: /api/rx/products', product);
    product.id = apmDataRxJs.products.length + 1;
    apmDataRxJs.products.push(product);
    return res.send(product);
  });

  app.delete('/api/rx/products/:id', (req, res) => {
    const productId = +req.params.id;
    console.log(`DELETE: /api/rx/products/${productId}`);
    const filteredList = apmDataRxJs.products.filter(
      (item) => item.id !== productId
    );
    apmDataRxJs.products = filteredList;
    return res.send(filteredList);
  });

  app.put('/api/rx/products/:id', (req, res) => {
    const productId = +req.params.id;
    const product = req.body;
    console.log(`PUT: /api/rx/products${productId}`, product);
    const index = apmDataRxJs.products.findIndex(
      (item) => item.id === productId
    );
    apmDataRxJs.products[index] = product;
    return res.send(apmDataRxJs.products[index]);
  });

  app.get('/api/rx/categories', (req, res) => {
    console.log('GET: /api/rx/categories');
    return res.send(apmDataRxJs.categories);
  });

  app.get('/api/rx/suppliers', (req, res) => {
    console.log('GET: /api/rx/suppliers');
    return res.send(apmDataRxJs.suppliers);
  });
}
