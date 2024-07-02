const express= require('express')
const app= express()
app.use(express.json())
app.get('/',(req,res,next)=>{
return  res.status(200).json({"msg":"Hello from shopping"})
})
app.listen(8003,()=>console.log('shopping app  is listening to port 80003'))