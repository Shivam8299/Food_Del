import express from "express"
import cors from "cors"

// app config
const app = express()
const port = 3000
app.use(cors())

app.get("/", (req, res)=>{
    res.send("hello from backend")
})

app.listen(port,()=>{
   console.log(`server is listing on port ${port}`)
})