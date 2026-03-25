import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import carRouter from './routes/carRoute.js'
import bookingRouter from './routes/bookingRoute.js'
import purchaseRouter from './routes/purchaseRoute.js'
import paymentRouter from './routes/paymentRoute.js'
import adminRouter from './routes/adminRoute.js'


// Load environment variables from .env file
dotenv.config()

// App Configuration
const app = express()

const PORT = process.env.PORT || 5000

await connectDB()

// Middlewares
app.use(express.json())

// API Endpoints
app.get('/', (req,res)=>{
    res.send("API Working Perfectly")
})

app.use('/api/auth', userRouter)
app.use('/api/cars', carRouter )
app.use('/api/bookings', bookingRouter)
app.use('/api/purchases', purchaseRouter)
app.use('/api/payments', paymentRouter) 
app.use('/api/admin', adminRouter)



// Server Listener

if (process.env.NODE_ENV !== "test") {
        app.listen(process.env.PORT, ()=>{
        console.log(`Server Started On Port: ${PORT}`);
      })
}

export default app;