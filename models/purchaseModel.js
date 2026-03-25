import mongoose from 'mongoose'

const purchaseSchema = new mongoose.Schema({
     user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required : true },
     car: {type: mongoose.Schema.Types.ObjectId, ref: "car" , required: true  },
     dealer: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required:true},
     status: {type: String , enum: ["pending","approved","cancelled", "completed"], default: "pending"},
     paymentStatus: {type: String, enum: ["pending","completed"] ,default:"pending"},
     purchaseDate: {type: Date, default: Date.now},
}, {timestamps: true})

const purchaseModel = mongoose.models.purchase || mongoose.model("purchase", purchaseSchema)

export default purchaseModel;