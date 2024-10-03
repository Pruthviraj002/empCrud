const mongoose = require("mongoose")

const empsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact: { type: Number, required: true },
    qualification: { type: String, required: true },
    salary: { type: Number, required: true },
    department: { type: String, required: true },
    address: { type: String, required: true },

})
module.exports = mongoose.model("myEmployees",empsSchema)