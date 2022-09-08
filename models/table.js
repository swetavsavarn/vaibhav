const sequelize=require('sequelize')
const db=require('../util/db')

const table=db.define('vaibhav1',{
    name1:{
        type:sequelize.STRING
    }
})
module.exports=table