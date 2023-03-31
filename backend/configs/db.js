const mongoose=require("mongoose")
require("dotenv").config();
const connection = mongoose.connect("mongodb+srv://avnishsingh:avnishsingh@cluster0.wvbiwdy.mongodb.net/lenscart?retryWrites=true&w=majority")
module.exports={
    connection
}