import express from 'express'
import { getproducts ,getProductById,updateproduct, createproduct, deleteproduct} from '../Controllers/productController.js';

const router =express.Router();

router.get("/getdata",getproducts)
router.get("/getdata/:id",getProductById)
router.post("/create",createproduct)
router.put("/update/:id",updateproduct)
router.delete("/delete/:id",deleteproduct)





export default router;