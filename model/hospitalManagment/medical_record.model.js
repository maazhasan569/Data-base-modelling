import mongoose from "mongoose";

const medicalRecordSchema = new mongooose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    patientdetial: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Patient"
        }
    ]
    



}, { timesStamp: true });

export const MedicalRecord = mongoose.Schema("MedicalRecord", medicalRecordSchema)