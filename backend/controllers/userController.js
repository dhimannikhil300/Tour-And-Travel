const User = require('../models/User')

exports.updateUser = async (req, res) => {
    const id = req.params.id
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body}, 
            {new: true})

        res.status(200).json({
            success:true,
            message: "Successfully updated",
            data: updatedUser
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: "Failded to update. Try Again"
        })
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id
    try{
        const deleteUser = await User.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message: "Successfully delete",
            data: deleteUser
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: "Failded to delete. Try Again"
        })
    }
}

exports.getSingleUser = async (req, res) => {
    const id = req.params.id
    try{
        const user = await User.findById(id)

        res.status(200).json({
            success:true,
            message: "Successfully fetch",
            data: user
        })
    }catch(err){
        res.status(404).json({
            success:false,
            message: "Not Found"
        })
    }
}

exports.getAllUser = async (req, res) => {
    console.log(page);
    try{
        const users = await User.find()

        return res.status(200).json({
            success:true,
            message: "Successful",
            data: users
        })
    }catch(err){
        res.status(404).json({
            success:false,
            message: "Not Found"
        })
    }
}