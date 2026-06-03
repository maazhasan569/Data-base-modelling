import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            lowerCase : true, 
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : string,
            required : true,
        }
        
    } , 
    {timestamps : true}
)

export const Users = mongoose.model("Users" , userSchema)