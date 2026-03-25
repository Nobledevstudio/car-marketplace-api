import mongoose from 'mongoose'
import mongose from 'mongoose'


const boookingSchema = new mongose.Schema({
     user: { type: mongose.Schema.Types.ObjectId, ref: "user", required : true },
     car: {type: mongose.Schema.Types.ObjectId, ref: "car" , required: true  },
     dealer: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required:true},
     startDate: { type: Date},
     endDate: { type: Date},
     status: {type: String , enum: ["pending","approved","cancelled", "completed"], default: "pending"},
     paymentStatus: {type: String, enum: ["pending","completed"] ,default:"pending"}
}, {timestamps: true})

const bookingModel = mongoose.models.booking || mongoose.model('booking', boookingSchema)

export default bookingModel