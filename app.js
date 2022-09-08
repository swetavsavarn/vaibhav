const express1=require('express')
const app=express1()

const bp=require('body-parser')
app.use(bp.json())
const router=require('./router/router')
const db=require('./util/db')
const table=require('./models/table')

app.use(router)

db.sync().then(()=>{app.listen(5000)})
