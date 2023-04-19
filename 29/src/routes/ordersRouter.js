import { Router } from 'express';
import { createOrder, getOrder, listOrders, resolveOrder } from '../controllers/orderController.js';

const router = Router();

router.get('/:id', getOrder);
router.post('/', createOrder);
router.get('/', listOrders);
router.post('/:id', resolveOrder);

export default router;
