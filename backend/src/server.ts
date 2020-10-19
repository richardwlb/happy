import express from 'express';
import path from 'path';

import routes from './routes';
import './database/connection';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);

// Métodos 

// HTTP: GET / PUT / DELETE / POST

// parametros

// Query: http://localhost:3333/users?search=richard&page=2
// Route: http://localhost:3333/users/1 (quando atualiza e deleta)
// Body: No corpo



