const express= require('express')
const app= express()
app.use(express.json())
app.get('/',(req,res,next)=>{
return  res.status(200).json({"msg":"Hello from products"})
})
app.listen(8002,()=>console.log('product app  is listening to port 80002'))