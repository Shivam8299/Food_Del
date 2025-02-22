import express from "express"
import cors from "cors"
import { connectedDb } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config'

// app config
const app = express()
const port = 3000;

// db connection

connectedDb()
 
// middlewares
app.use(cors())
app.use(express.json())

// api endpoint

app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
            
app.get("/", (req, res)=>{
    res.send("hello from backend")
})

app.listen(port,()=>{
   console.log(`server is listing on port ${port}`)
})
