import mongoose from "mongoose"

const todoScheme = new mongoose.Schema({
    color: String,
    content : {
        type : String,
        required : true
    },
    iscompleted: {
        type: Boolean,
        required: true,
        default : false
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    sub_todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sub_todos"
        }
    ]
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoScheme)