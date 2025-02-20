import mongoose from 'mongoose'

export const connectedDb  = async () => {
    try {
        await mongoose.connect('mongodb+srv://shivam23:6392595578@cluster0.ixg0j.mongodb.net/?')
        console.log('db connected successfully')
    } catch (error) {
        console.log(error) 
    }
}