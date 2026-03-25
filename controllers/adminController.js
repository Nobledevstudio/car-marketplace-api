import { approveDealer, deleteUser, getAllBookingsForAdmin, getUsers } from "../services/adminServices.js";

export const getAllBookingsForAdminController = async(req,res)=>{

    try {

        const bookings = await getAllBookingsForAdmin(req.user);
        res.status(200).json({success: true, data: bookings})

      }catch (error) {
        console.error(error)
        res.status(400).json({success: false , message: error.message})
    }
}


export const getUsersController = async(req,res)=>{
      try {
            const users = await getUsers(req.user)
            res.status(200).json({success: true, data: users})
            
      } catch (error) {
            res.status(400).json({success: false ,  message: error.message })    
      }
}

export const deleteUserContoller = async (req, res) => {
  try {

    const { id } = req.params

    await deleteUser(id)

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully"
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


export const approveDealerController = async (req,res) => {
    
      try {
           
         const dealerId = req.params.id
       
         await approveDealer(dealerId, req.user)

        res.status(200).json({success: true , message: "Dealer Sucessfully Approved"})
            
      } catch (error) {

             res.status(400).json({success: false ,  message: error.message })    
      }
       
}