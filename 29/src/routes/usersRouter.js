import { Router } from 'express';
import { createUser, updateUser, getUser, listUser } from '../controllers/userController.js';

const router = Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.post('/', createUser);
router.get('/', listUser);

export default router;
