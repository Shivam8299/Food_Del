import mongoose from 'mongoose'

export const connectedDb  = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('db connected successfully')
    } catch (error) {
        console.log(error) 
    }
}