import express from 'express'
import { addToCart,removeFromCart, getCartData } from '../controllers/cartController.js'
import authMiddlewares from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/get', authMiddlewares, getCartData);
cartRouter.post('/add', authMiddlewares, addToCart);
cartRouter.post('/remove', authMiddlewares, removeFromCart);

export default cartRouter