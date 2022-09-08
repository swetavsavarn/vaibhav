const path=require('path')
const table=require('../models/table')
exports.home=((req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','homaepage.html'))


})
exports.db=((req,res)=>{
    const name=req.body.value
    table.create({name1:name}).then(res.json({"message":"info saved"})).catch((err)=>res.json({"message":"tu gadha hai"}))
    
})