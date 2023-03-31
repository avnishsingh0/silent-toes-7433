const express= require("express")
const {connection}= require("./configs/db")
const { productRouter } = require("./routes/product.routes")
const {userRouter}=require('./routes/user.routes')
const cors = require("cors");
const app= express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.use('/users',userRouter)
app.use("/product", productRouter);

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
