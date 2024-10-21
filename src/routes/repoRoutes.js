import express from 'express';
import { repositories } from '../controllers/repoController.js';

const router = express.Router();

router.get('/repositorios', repositories);

export default router;
