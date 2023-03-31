const express= require("express")
const {connection}= require("./configs/db")
const {userRouter}=require('./routes/user.routes')
const app= express()
app.use(express.json())

app.use('/users',userRouter)

app.listen(4500,async()=>{
    try {
        await connection
        console.log("connect to db")
    } catch (error) {
        console.log("can't connected")
        console.log(error);
    }
    console.log("Server is running port 4500")
    
})
