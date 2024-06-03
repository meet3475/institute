const Subcourses = require("../models/Subcourses.model")


const listsubcourses =async (req , res) => {
    // console.log("list-subcouses");
    try {
        const subcourses = await Subcourses.find()
        // console.log(cources);

        if (!subcourses || subcourses === 0) {
            res.status(404).json({
                success: false,
                message: "subcourses data not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "subcourses fetch suceesfully",
            data: subcourses
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        })
    }
}

const getsubcourses = async (req, res) => {
    try {
        //console.log(req.params.subcourses_id);

        const subcourses = await Subcourses.findById(req.params.subcourses_id);
        console.log(subcourses);

        if (!subcourses) {
            res.status(404).json({
                success: false,
                message: "subcourses not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "subcourses fetched sucessfully",
            data: subcourses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal server error." + error.message
        })
    }
}
 
const addsubcourses = async (req , res)=> {
    // console.log('add-subcourses');
    try {
        // console.log(req.body);

        const subcourses = await Subcourses.create(req.body)

        if (!subcourses) {
            res.status(400).json({
                success:false,
                message:"subcourses data not created"
            })
        }

        res.status(201).json({
            success:true,
            message:"subcourses created suceesfully",
            data:subcourses
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error" + error.message
        })
    }
    
}

const updatesubcourses =async (req , res)=> {
    // console.log("update-subcourse");
    try {
        // console.log(req.params.category_id);
        const subcourses = await Subcourses.findByIdAndUpdate(req.params.subcourses_id, req.body,{new:true , runValidators:true})
        // console.log(categories);

        if(!subcourses) {
            res.status(400).json({
                success:false,
                message:"subcourses data not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"subcourses updated suceesfully",
            data:subcourses
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error" + error.message
        })
    }
}

const deletesubcourses =async (req , res) =>  {
    // console.log('delete-subcatagory');
    try {
        const subcourses = await Subcourses.findByIdAndDelete(req.params.subcourses_id)
        

        if (!subcourses || subcourses ===0) {
            res.status(404).json({
                success:false,
                message:"subcourses data not Found"
            })
        }
        
        res.status(200).json({
            success:true,
            message:"subcourses Delete suceesfully",    
            data:subcourses
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error" + error.message
        })
    }
}

module.exports = {
    listsubcourses,
    getsubcourses,
    addsubcourses,
    updatesubcourses,
    deletesubcourses
}