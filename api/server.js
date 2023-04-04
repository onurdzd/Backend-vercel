const express=require("express")

const server=express()

server.use(express.json())

server.get("/api",(req,res,next)=>{
    res.status(200).json({message:"Hoşgeldin"})
})

module.exports=server