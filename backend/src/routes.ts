import { Router } from 'express';
import multer from 'multer';    // MULTER PARA UPLOAD

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);    // MULTER PARA UPLOAD

routes.post('/orphanages', upload.array('images'), OrphanagesController.create); // Images é o nome do campo
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;