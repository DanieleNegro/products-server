# Product Rest API services

This is a simple node js server that gives some Rest api services to handle the basic operations CRUD of e-commerce products database.

There are four differrente sources of products:

1. The first has 30s products where each product has these attributes:

   - title
   - description
   - price
   - discountPercentage
   - rating: avarage with two fixed decimal digits and range [0.00,5.00]
   - stock: numbers of items available
   - brand
   - category
   - thumbnail
   - images: string array where each item is a url

2. The second set is similar of the first:
   - productName
   - description
   - price
   - discountPercentage
   - rating: avarage with two fixed decimal digits and range [0.00,5.00]
   - productCode
   - category
   - imageUrl
   - releaseDate: a string date with this format dd/MM/yyyy
3. The third has only five items with same structure of the second but without discountPercentage. Some items has a list of tags.

4. The last set has a list of six products, a list of categories and e list of suppliers

## Available Scripts

In the project directory, you can run:

### `npm run start [-- [options]]`

Runs the server application.\
Server listening on port 8081.

## Options

### `--port=<port number>`

Runs the server application with specific port number.\

### `--db=<db key>`

Runs the server application on specific database.\
Available keys:

- `first`
- `second`

The application uses by default the third and the fours databases.\
The server exposes these services to db first, second and third:

Retrieve list of products:

- GET: /api/products

Retrieve product:

- GET: api/products/:id

Insert a product:

- POST: /api/products

Delete product:

- DELETE: /api/products/:id

Update product:

- PUT: /api/products/:id

while these services are only to fourth

Retrieve list of products:

- GET: /api/rx/products

Retrieve product:

- GET: /api/rx/products/:id

Insert a product:

- POST: /api/rx/products

Delete product:

- DELETE: /api/rx/products/:id

Update product:

- PUT: /api/rx/products/:id

Retrieve list of categories:

- GET: /api/rx/categories

Retrieve list of suppliers:

- GET: /api/rx/suppliers

Retrieve supplier:

- GET: /api/rx/suppliers/:id
