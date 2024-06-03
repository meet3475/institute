const mongoose = require('mongoose')

const subcoursesScema = new mongoose.Schema(
    {
        cource_id:{
            type:mongoose.Types.ObjectId,
            ref:'Courses',
            required: true
        },
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

const Subcourses = mongoose.model("subcourses" , subcoursesScema);
module.exports = Subcourses