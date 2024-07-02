const express= require('express')
const app= express()
app.use(express.json())
app.get('/',(req,res,next)=>{
return  res.status(200).json({"msg":"Hello from customer"})
})
app.listen(8001,()=>console.log('customer app  is listening to port 80001'))