const Tour = require('../models/Tour')

exports.createTour = async (req, res)=>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()
        res.status(200).json({
            success:true,
            message: "Successfully created",
            data: savedTour
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: "Failded to create. Try Again"
        })
    }
}

exports.updateTour = async (req, res) => {
    const id = req.params.id
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id, {$set: req.body}, 
            {new: true})

        res.status(200).json({
            success:true,
            message: "Successfully updated",
            data: updatedTour
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: "Failded to update. Try Again"
        })
    }
}

exports.deleteTour = async (req, res) => {
    const id = req.params.id
    try{
        const deleteTour = await Tour.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message: "Successfully delete",
            data: deleteTour
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: "Failded to delete. Try Again"
        })
    }
}

exports.getSingleTour = async (req, res) => {
    const id = req.params.id
    try{
        console.log("request ");
        const tour = await Tour.findById(id).populate('reviews')

        res.status(200).json({
            success:true,
            message: "Successfully fetch",
            data: tour
        })
    }catch(err){
        res.status(404).json({
            success:false,
            message: "Not Found"
        })
    }
}

exports.getAllTour = async (req, res) => {
    const page = parseInt(req.query.page)
    console.log(page);
    try{
        const tours = await Tour.find().populate('reviews').skip(page*8).limit(8).exec()

        return res.status(200).json({
            success:true,
            length: tours.length,
            message: "Successful",
            data: tours
        })
    }catch(err){
        res.status(404).json({
            success:false,
            message: "Not Found"
        })
    }
}

exports.getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const tours = await Tour.find({city, distance:{$gte:distance}, 
                maxGroupSize:{$gte:maxGroupSize}}).populate('reviews').exec()

        return res.status(200).json({
            success:true,
            message: "Successful",
            data: tours
        })
    }catch(err){
        res.status(404).json({
            success:false,
            message: "Not Found"
        })
    }
}

exports.getFeaturedTour = async (req, res) => {
    try{
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8)

        return res.status(200).json({
            success:true,
            message: "Successful",
            data: tours
        })
    }catch(err){
        res.status(404).json({
            success:false,
            message: "Not Found"
        })
    }
}

exports.getTourCount = async (req, res) => {
    try{
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success:true, data: tourCount})
    }catch(err){
        res.status(500).json({success:false, message: "Failed to fetch"})
    }
}