import express from 'express';
import { apmRoutingServices } from './routes.js';

const port = process.env.PORT || 8081;

const app = express();

app.use(express.json());

apmRoutingServices(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
