const mongoose = require('mongoose')

const coursesScema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            unique: true
        },
        description : {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
        },
        duration : {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
        },
        fees:{
            type: Number,
            trim: true,
            lowercase: true,
            required: true,
        },
        isActive: {
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Courses = mongoose.model('courses' , coursesScema);
module.exports = Courses