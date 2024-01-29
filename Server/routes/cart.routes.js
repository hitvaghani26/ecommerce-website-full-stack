import { Router } from 'express';
import { verifyJWT } from '../middlewares/auth.middlewares.js';
import { getCartByUserId, updateCartByUserId, deleteCartByUserId,isProductInCart } from '../controllers/cart.controller.js';

const router = Router();

// Get cart details by user ID
router.route('/carts').get(verifyJWT, getCartByUserId);

// Update cart by user ID
router.route('/update').put(verifyJWT, updateCartByUserId);

// Delete cart by user ID
router.route('/delete').delete(verifyJWT, deleteCartByUserId);
router.route('/isproductcart/:productId').get(verifyJWT, isProductInCart);

export default router;
