import express from 'express'
import { addFood,listFood,removeFoodItems } from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router()


//image storage 

const storage = multer.diskStorage({
    destination:'uploads',
    filename: (req,file,callback)=>{
        return callback (null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})

foodRouter.post('/add',upload.single('image'),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFoodItems)



export default foodRouter