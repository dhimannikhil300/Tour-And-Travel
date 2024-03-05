const Booking = require('../models/Booking')

exports.createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try{
        console.log(newBooking);
        const saveBooking = await newBooking.save()
        res.status(200).json({success:true, message: 'Your tour is booked', data:saveBooking})
    }catch(err){
        res.status(500).json({success:false, message: 'internal server error', err})
    }
}

exports.getBooking = async (req, res) => {
    const id = req.params.id
    try{
        const book = await Booking.findById(id)
        res.status(200).json({success:true, message: 'Successful', data:book})
    }catch(err){
        res.status(404).json({success:false, message: 'Not found'})
    }
}

exports.getAllBooking = async (req, res) => {
    try{
        const book = await Booking.findById()
        res.status(200).json({success:true, message: 'Successful', data:book})
    }catch(err){
        res.status(500).json({success:false, message: 'Internal Server Error'})
    }
}