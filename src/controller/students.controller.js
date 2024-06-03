const Students = require("../models/students.model")

const liststudents =async (req , res) => {
    // console.log('list-student');
    try {
        const students = await Students.find()
        // console.log(cources);

        if (!students || students === 0) {
            res.status(404).json({
                success: false,
                message: "students data not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "students fetch suceesfully",
            data: students
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        })
    }
}

const getstudents = async (req, res) => {
    try {
        //console.log(req.params.student_id);

        const students = await Students.findById(req.params.student_id);
        console.log(students);

        if (!students) {
            res.status(404).json({
                success: false,
                message: "students not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "students fetched sucessfully",
            data: students
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal server error." + error.message
        })
    }
}

const addstudents = async (req , res) => {
    // console.log('add-student');
    try {
        // console.log(req.body);

        const students = await Students.create(req.body)

        if (!students) {
            res.status(400).json({
                success:false,
                message:"students data not created"
            })
        }

        res.status(201).json({
            success:true,
            message:"students created suceesfully",
            data:students
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        })
    }
}

const updatestudents = async (req , res) => {
    // console.log('update-student');
    try {
        // console.log(req.params.category_id);
        const students = await Students.findByIdAndUpdate(req.params.student_id, req.body,{new:true , runValidators:true})
        // console.log(categories);

        if(!students) {
            res.status(400).json({
                success:false,
                message:"students data not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"students updated suceesfully",
            data:students
        })


     
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error" + error.message
        })
    }
}

const deleteudents =async (req , res) => {
    // console.log('delet-student');
    try {
        const students = await Students.findByIdAndDelete(req.params.student_id)
        

        if (!students || students ===0) {
            res.status(404).json({
                success:false,
                message:"students data not Found"
            })
        }
        
        res.status(200).json({
            success:true,
            message:"students Delete suceesfully",    
            data:students
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error" + error.message
        })
    }
}

module.exports = {
    liststudents,
    getstudents,
    addstudents,
    updatestudents,
    deleteudents
}