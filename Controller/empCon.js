const bcrypt = require("bcryptjs")
const  empController = require("../Model/emp")
const jwt= require("jsonwebtoken")

exports.getEmp = async (req,res)=>{
    try {
        const data = await empController.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postEmp = async (req,res)=>{
    try {
        const empExist = await empController.findOne({email:req.body.email})
        if(empExist) return res.status(400).json({errors:true,message:"user already exist!"})

        req.body.password = await bcrypt.hash(req.body.password,10)


        const data = await empController.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        const empExist = await empController.findOne({email:req.body.email})
        if(!empExist) return res.status(400).json({errors:true,message:"email or password is invalid"})

            const validPassword = await bcrypt.compare(req.body.password,empExist.password)
  if(!validPassword) return res.status(400).json({errors:true,message:"email or password is invalid"})
 
    const token = await jwt.sign({_id:empExist._id},process.env.SEC)

    return res.json({errors:false,data:{user:empExist ,token:token}})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}