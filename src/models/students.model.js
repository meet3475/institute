const mongoose = require('mongoose')

const studentsScema = new mongoose.Schema(
    {
        course_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Courses',
            required: true
        },
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            unique: true
        },
        roll_no: {
            type: Number,
            trim: true,
            lowercase: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required:true,
        },
        mobile_no:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            trim: true,
            lowercase: true,
            required:true,
        },
        DOB:{
            type:String,
            trim: true,
            required:true,
        },
        password:{
            type:String,
            trim: true,
            required:true,
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Students = mongoose.model("students", studentsScema);
module.exports = Students