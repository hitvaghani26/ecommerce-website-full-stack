import { Router } from 'express';
import { addToWishlist, removeFromWishlist, getWishlistProducts,isProductInWishlist } from '../controllers/wishList.controller.js';
import {verifyJWT  } from "../middlewares/auth.middlewares.js";
const router = Router();




router.route('/addtowishlist').post(verifyJWT, addToWishlist);
router.route('/getwishlist').post(verifyJWT, getWishlistProducts);
router.route('/isproductinwishlist/:productId').get(verifyJWT, isProductInWishlist);



router.route('/removefromwishlist').post(verifyJWT , removeFromWishlist);

export default router;
