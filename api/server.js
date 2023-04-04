const express=require("express")

const server=express()

server.use(express.json())

const projectRouter=require("./projects/projects-router")

server.use("/api/projects",projectRouter)


server.get("/api",(req,res,next)=>{
    res.status(200).json({message:"Hoşgeldin"})
})

module.exports=server