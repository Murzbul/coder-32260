import { Router } from 'express';
import {
  createBusiness,
  getBusiness,
  listBusinesses,
  addProducts,
  updateBusiness
} from '../controllers/businessController.js';

const router = Router();

router.get('/:id', getBusiness);
router.put('/:id', updateBusiness);
router.post('/', createBusiness);
router.get('/', listBusinesses);
router.post('/:id/product', addProducts);

export default router;
