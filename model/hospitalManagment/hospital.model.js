import mongoose from "mongoose";

const hospitalSchema = new mongooose.Schema({
    name : {
        type : String, 
        required : true,
    },
    registered : {
        type : Boolean,
        required : true
    },
    speciality : {
        type : String,
        required : true
    },
    address : {
        type : String ,
        required : True
    }

    

}, { timesStamp: true });

export const Hospital = mongoose.Schema("Hospital" , hospitalSchema)