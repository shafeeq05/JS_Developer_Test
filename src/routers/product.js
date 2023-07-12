import { Router } from "express";
import { controller } from "../controllers/product.js";

const router = Router()

router.get('/product/:keyword',controller.product)


export default router