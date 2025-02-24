import express from 'express'
import middleware from "../middleware/auth.js"
import { placeOrder,verifyOrder,userOrders, listOrder, updateStatus } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.post("/place",middleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",middleware,userOrders)
orderRouter.get("/list",listOrder)
orderRouter.post("/status",updateStatus)

export default orderRouter