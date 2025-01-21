import express from 'express';
import { addToCart, getCart, removeFromCart } from './cartController.js';
import authMiddleware from './auth.js';

const cartRouter = express.Router();

cartRouter.post("/get",authMiddleware,getCart);
cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);

export default cartRouter;
