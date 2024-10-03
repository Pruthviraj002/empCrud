const {getEmp,postEmp, login}=require("../Controller/empCon")

const route = require("express").Router()
route.get("/",getEmp)
route.post("/",postEmp)
route.post("/login",login)

module.exports = route