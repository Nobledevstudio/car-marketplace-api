import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';

// Middleware to protect routes and ensure the user is authenticated
export const protect = async(req,res, next)=>{

  // Initialize a variable to hold the token
    let token ;
    
    try {
      // Check if the Authorization header is present and starts with 'Bearer'
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
          token = req.headers.authorization.split(" ")[1]
         // console.log("AUTH HEADER:", req.headers.authorization)
         // console.log("USER FOUND IN DB:", req.user) 
        }
        
        if(!token){
            return res.status(401).json({success: false, message: "Not Authorized"})
        }
        
        const  decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
          // console.log("DECODE:", decode)
         req.user = await userModel.findById(decode.id).select("-password")
          //  console.log("USER FOUND AFTER QUERY:", req.user)

        next()
        
    } catch (error) {

        res.status(401).json({success: false, message: "Not Authorized"})
        
    }

}