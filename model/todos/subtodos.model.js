import mongoose from "mongoose";

const subTodosSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false   
    },
    CreatedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    }

});

export const sub_Todos = mongoose.model("sub_todos", subTodosSchema);
