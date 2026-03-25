export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
  //  console.log("authorizeRoles called, req.user:", req.user)
  
  // Check if req.user and req.user.role exist before accessing them
    if (!req.user || !req.user.role) {
     // console.log("ERROR: req.user is undefined or missing role!")
      return res.status(401).json({ success: false, message: "Not authorized" })
    }

    // Check if the user's role is in the list of allowed roles
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: "You are not allowed to perform this action" })
    }
    next()
  }
}