import {Router} from 'express';
import {createProduct, getProducts, getOneProducts, updateProduct, getManProducts, getWomanProducts,getPruductCategoryShort,newProduct,trendingProduct} from '../controllers/product.controller.js';
import { upload } from '../middlewares/multer.middlewares.js';
const router = Router();

router.route("/create").post( upload.fields([
    {name: 'image', maxCount: 1},

]),createProduct);

router.route("/update/:id").post(upload.fields([
    {name: 'image', maxCount: 1},

]), updateProduct);

router.route("/getproducts").get(getProducts);
router.route("/getmanproduct").get(getManProducts);
router.route("/getwomanproduct").get(getWomanProducts); 
router.route("/getoneproduct/:id").get(getOneProducts);
router.route("/getproductby/:category/:shorttype").get(getPruductCategoryShort);
router.route("/mainpage/newproduct8").get(newProduct);
router.route("/mainpage/newproduct8/:type").get(newProduct);
router.route("/mainpage/trendingproduct9").get(trendingProduct);




export default router;