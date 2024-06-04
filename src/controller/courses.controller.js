const Courses = require("../models/Courses.model")


const listcources = async (req, res) => {
    // console.log('list-cources');
    try {
        const cources = await Courses.find()
        console.log(cources);

        if (!cources || cources === 0) {
            res.status(404).json({
                success: false,
                message: "cources data not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "cources fetch suceesfully",
            data: cources
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        })
    }
}

const getcources = async (req, res) => {
    try {
        //console.log(req.params.cource_id);

        const cources = await Courses.findById(req.params.cource_id);
        console.log(cources);

        if (!cources) {
            res.status(404).json({
                success: false,
                message: "cources not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "cources fetched sucessfully",
            data: cources
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal server error." + error.message
        })
    }
}

const addcources = async (req , res) => {
    // console.log('add-cources');
    try {
        // console.log(req.body);

        const courses = await Courses.create(req.body)

        if (!courses) {
            res.status(400).json({
                success:false,
                message:"courses data not created"
            })
        }

        res.status(201).json({
            success:true,
            message:"courses created suceesfully",
            data:courses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        })
    }

}

const updatecources =async (req,res) => {
    // console.log("update-courses");
    try {
        // console.log(req.params.category_id);
        const courses = await Courses.findByIdAndUpdate(req.params.cource_id, req.body,{new:true , runValidators:true})
        // console.log(categories);

        if(!courses) {
            res.status(400).json({
                success:false,
                message:"courses data not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"courses updated suceesfully",
            data:courses
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error" + error.message
        })
    }
}

const deletecources =async (req , res) => {
    // console.log("delet-courses");
    try {
        const courses = await Courses.findByIdAndDelete(req.params.cource_id)
        

        if (!courses || courses ===0) {
            res.status(404).json({
                success:false,
                message:"courses data not Found"
            })
        }
        
        res.status(200).json({
            success:true,
            message:"courses Delete suceesfully",    
            data:courses
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error" + error.message
        })
    }
}

module.exports = {
    listcources,
    addcources,
    getcources,
    updatecources,
    deletecources
}