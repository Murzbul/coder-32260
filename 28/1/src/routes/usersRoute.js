import { Router } from 'express';
import { createUser, getUser } from '../controllers/userController.js';

const router = Router();

router.get('/:id', getUser);
router.post('/', createUser);

export default router;
