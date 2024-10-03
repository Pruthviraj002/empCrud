const Employees = require("./ROute/empRoute")
const mongoose = require("mongoose")
const express= require("express")
require("dotenv/config")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to the server")
})

app.use("/api/employees",Employees)

app.listen(process.env.PORT || 5001)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}

db()