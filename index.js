import express from 'express';
import { apmRoutingServices } from './routes.js';
import { getDBKey, getPort } from './utils.js';

const port = getPort();
const dbKey = getDBKey();

const app = express();

app.use(express.json());

apmRoutingServices(app, dbKey);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
console.log('Serve uses db: ', dbKey);
