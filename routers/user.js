import express from 'express';
import UserContoller from '../controllers/UserController.js';

const router = express.Router();

router.get('/', UserContoller.index);
router.post('/', UserContoller.store);
router.get('/:id', UserContoller.find);
router.put('/:id', UserContoller.update);
router.delete('/:id', UserContoller.delete);

export default router;