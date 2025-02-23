import express from 'express'
import middleware from "../middleware/auth.js"
import { placeOrder } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.post("/place",middleware,placeOrder)


export default orderRouter