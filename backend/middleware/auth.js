import jwt from 'jsonwebtoken'

const authMiddlewares = async (req, res, next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:'not authorized login agian !!'})
    }
    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodeToken.id
        next();
    }catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}

export default authMiddlewares