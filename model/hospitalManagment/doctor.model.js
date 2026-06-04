import mongoose from "mongoose";

const doctorSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    experiance: {
        type: Number,
        required: true,
        default : 0
    },
    qualificaton : {
        type : String,
        required : true
    }
    



}, { timesStamp: true });

export const Docter = mongoose.Schema("Docter", doctorSchema)