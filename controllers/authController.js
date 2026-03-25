import { loginUser, registerUser } from "../services/authServices.js"


export const registerController  = async(req,res)=>{

      try {
        const data = req.body
        const user = await registerUser(data)
        res.status(201).json({ success: true,  data: user})
      } catch (error) {
         res.status(400).json({success: false ,  message: error.message })
      }
}

export const loginController = async(req,res) =>{
        try {
            const data =  req.body
            const user = await loginUser(data)
            res.status(200).json({success: true,  data: user})
        } catch (error) {
              res.status(400).json({success: false ,  message: error.message })
        }
} 
