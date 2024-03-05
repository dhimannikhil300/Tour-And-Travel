const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const tourRoute = require('./routes/tours')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const reviewRoute = require('./routes/reviews')
const bookingRoute = require('./routes/bookings')

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true,
    credentials: true
}

mongoose.set('strictQuery', false)
const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
        })
        console.log("Mongo DB is connected");
    }catch(e){
        console.log("Mongo DB is not connected. Error is : ", e);
    }
};

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)

app.listen(port , ()=>{
    connect()
    console.log("Server Listing on ", port);
})