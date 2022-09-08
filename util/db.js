const sequelize=require('sequelize')
const db=new sequelize('vaibhav','root','12345',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=db